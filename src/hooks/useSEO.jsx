import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://twoteamai.vercel.app'
const OG_IMAGE = `${BASE_URL}/og-image.jpg`
const SITE_NAME = 'TwoTeamAI'

/**
 * useSEO — sets per-page <title>, <meta>, canonical, Open Graph,
 * Twitter Card, and optional JSON-LD structured data.
 *
 * @param {Object} options
 * @param {string} options.title        - Page title (without site name suffix)
 * @param {string} options.description  - Meta description (150–160 chars)
 * @param {string} options.keywords     - Comma-separated keywords
 * @param {string} [options.canonical]  - Canonical path, e.g. "/services"
 * @param {string} [options.ogImage]    - Override OG image URL
 * @param {string} [options.ogType]     - "website" | "article" (default: "website")
 * @param {Object} [options.jsonLd]     - JSON-LD structured data object
 * @returns {JSX.Element}               - <Helmet> element to render
 */
export function SEOHead({
  title,
  description,
  keywords = '',
  canonical = '',
  ogImage = OG_IMAGE,
  ogType = 'website',
  jsonLd = null,
}) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} — Have an idea? Let's build it.`

  const canonicalUrl = canonical
    ? `${BASE_URL}${canonical}`
    : BASE_URL

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE_NAME} — ${title || 'Product Engineering Studio'}`} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${SITE_NAME} — ${title || 'Product Engineering Studio'}`} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        Array.isArray(jsonLd)
          ? jsonLd.map((schema, i) => (
              <script key={i} type="application/ld+json">
                {JSON.stringify(schema)}
              </script>
            ))
          : (
            <script type="application/ld+json">
              {JSON.stringify(jsonLd)}
            </script>
          )
      )}
    </Helmet>
  )
}
