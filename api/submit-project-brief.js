export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, company, projectType, timeline, message } = request.body || {}

  if (!name || !email || !phone || !message) {
    return response.status(400).json({ error: 'Name, email, phone, and message are required' })
  }

  const { AIRTABLE_TOKEN, AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME } = process.env

  if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_NAME) {
    return response.status(500).json({ error: 'Airtable is not configured' })
  }

  try {
    const fields = {
      'Full Name': name,
      Email: email,
      Phone: phone,
      Message: message,
      Status: 'New',
      'Submitted At': new Date().toISOString(),
    }

    if (company) fields.Company = company
    if (projectType) fields['Project Type'] = projectType
    if (timeline) fields.Timeline = timeline

    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fields }),
      },
    )

    if (!airtableResponse.ok) {
      const errorBody = await airtableResponse.json().catch(() => ({}))
      const airtableMessage = errorBody?.error?.message || errorBody?.error?.type
      console.error('Airtable submission failed:', errorBody)
      return response.status(502).json({
        error: airtableMessage || 'Unable to save project brief',
      })
    }

    return response.status(201).json({ success: true })
  } catch (error) {
    console.error('Project brief API failed:', error)
    return response.status(502).json({ error: 'Unable to reach Airtable' })
  }
}
