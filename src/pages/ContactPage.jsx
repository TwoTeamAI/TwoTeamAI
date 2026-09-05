import { useState, useEffect } from 'react'
import { ContactModal } from '../components/shared/ContactModal'

export function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalPrefill, setModalPrefill] = useState({})

  useEffect(() => {
    const handleOpenModal = (e) => {
      setModalPrefill(e.detail?.prefill || {})
      setModalOpen(true)
    }
    window.addEventListener('open-contact-modal', handleOpenModal)
    return () => window.removeEventListener('open-contact-modal', handleOpenModal)
  }, [])

  const handleSubmit = async (formData) => {
    const data = Object.fromEntries(formData)

    try {
      const response = await fetch('/api/submit-project-brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Project brief submission failed')
      }

      setModalOpen(false)
      alert('Thanks! We\'ll get back to you within 24 hours.')
    } catch (error) {
      console.error(error)
      alert('We could not submit your brief right now. Please try again or contact us on WhatsApp.')
    }
  }

  return (
    <div className="min-h-screen">
      <section className="section-padding pt-28 lg:pt-32 relative" aria-labelledby="contact-hero-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.06)_0%,_transparent_70%)]" aria-hidden="true" />
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <span className="section-label">Get in Touch</span>
            <h1 id="contact-hero-title" className="font-display text-display-lg font-bold text-chalk tracking-tight mb-6">
              Let&apos;s talk about <span className="text-gradient-amber">your project</span>.
            </h1>
            <p className="text-body-lg text-titanium leading-relaxed">
              No sales scripts. No pressure. Just a conversation about what you&apos;re building and how we can help.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding pb-10" aria-labelledby="contact-options-title">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="animate-slide-up">
              <h2 id="contact-options-title" className="font-display text-heading-lg font-semibold text-chalk mb-6">
                Three ways to start
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <article className="card-interactive p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald/10 border border-emerald/20 flex items-center justify-center text-[10px] font-mono font-bold tracking-wider text-emerald" aria-hidden="true">CHAT</div>
                    <div>
                      <h3 className="font-display text-heading-md font-semibold text-chalk mb-1">WhatsApp Consultation</h3>
                      <p className="text-body text-titanium">Fastest way to start. Share your idea, get quick feedback, and book a discovery call — all in chat.</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a
                      href="https://wa.me/917276136138?text=Hi%20TwoTeamAI%2C%20I%20have%20an%20idea%20I%27d%20like%20to%20discuss."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp w-full sm:w-auto justify-center"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.454.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.398.01-.598.01-.203.005-.40.016-.598.016l-.735-.712c-.234-.227-.68-.607-.935-.97l-.69-.958-.423-.423-.284-.267-.062-.078c-.227-.266-.27-.606-.16-.816.054-.1.424-.628.67-.81.388-.272 1.23-.826 1.767-1.157.29-.18.62-.36.997-.54.37-.18.752-.27 1.134-.27h.008c.523 0 .97.236 1.278.566.476.5 1.64 2.01 1.762 2.29.097.22.194.503.16.702-.032.17-.187.498-.434.81l-.45.572-.27.348c-.25.318-.53.676-.573.79-.075.19-.094.403-.094.603 0 .203.043.44.127.614.084.173.372.66.733.874.297.174.68.26 1.032.182.364-.08.716-.26 1.007-.448.297-.198.564-.41.798-.66.234-.25.44-.53.626-.848.097-.173.31-.484.356-.56.032-.032.08-.236.232-.472.14-.223.31-.43.468-.6.15-.15.285-.285.473-.473l.215-.227c.535-.543 1.268-1.08 1.65-1.08.38 0 .74.094 1.07.283.33.188.618.412.848.68.23.267.41.57.527.903.102.292.132.608.132.94 0 .365-.034.69-.102 1.002zM12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5.01L2 22l6.99-1.99C10.47 21.513 12.18 22 14 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-2.745 0-5.206-.875-7.116-2.427l-.92.322.343-.963c-.713-.974-1.17-2.16-1.17-3.433 0-3.854 3.146-7 7-7 1.27 0 2.47.183 3.57.5.318.104.59.137.888.103.308-.034.627-.16.866-.372.228-.2.45-.45.67-.706.228-.254.448-.52.66-.8.22-.288.42-.58.608-.88.18-.29.33-.59.43-.9.1-.32.15-.64.15-.96 0-.5-.12-.98-.36-1.4-.306-.49-.75-.92-1.32-1.32-.57-.42-1.06-.54-1.5-.36-.32.12-.64.17-.97.15-.1.02-.31.03-.52.03-1.745 0-3.25-1.38-3.566-3.67-.3-.22-.54-.5-.74-.8-.2-.3-.34-.62-.43-.94-.08-.33-.07-.67.02-1 .07-.24.19-.46.34-.66.14-.19.3-.37.46-.55.17-.18.34-.35.52-.52.18-.17.36-.33.55-.49.18-.17.36-.33.55-.49.18-.17.36-.33.55-.49.18-.17.36-.33.55-.49.19-.17.38-.33.56-.49.2-.16.39-.31.57-.47.17-.16.33-.33.5-.49.17-.16.34-.32.51-.48.27-.26.5-.54.69-.84.2-.3.35-.62.45-.95.1-.33.15-.67.15-1.01 0-.48-.11-.95-.33-1.4-.22-.45-.55-.87-1.01-1.24-.33-.27-.69-.49-1.07-.67-.38-.19-.78-.3-1.18-.34-.4-.04-.8-.06-1.2-.08-1.24-.05-2.39-.08-3.5-.08-4.422 0-8 3.578-8 8 0 4.422 3.578 8 8 8z"/>
                      </svg>
                      Open WhatsApp
                    </a>
                    <p className="text-caption text-titanium/60 mt-2 text-center">Typically replies within 2 hours</p>
                  </div>
                </article>

                <article className="card-interactive p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center text-[10px] font-mono font-bold tracking-wider text-amber" aria-hidden="true">BRIEF</div>
                    <div>
                      <h3 className="font-display text-heading-md font-semibold text-chalk mb-1">Project Brief Form</h3>
                      <p className="text-body text-titanium">More structured. 3 minutes to give us the full picture. We&apos;ll respond with a detailed proposal within 24 hours.</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => setModalOpen(true)}
                      className="btn-primary w-full sm:w-auto justify-center"
                      aria-haspopup="dialog"
                    >
                      Fill Project Brief
                    </button>
                    <p className="text-caption text-titanium/60 mt-2 text-center">No spam. No marketing emails.</p>
                  </div>
                </article>
              </div>

              <div className="max-w-2xl mx-auto p-6 text-center bg-gradient-to-r from-amber/5 via-transparent to-emerald/5 border border-hairline rounded-2xl">
                <h3 className="font-display text-heading-md font-semibold text-chalk mb-2">Prefer email?</h3>
                <p className="text-body text-titanium mb-4">Send us a note at <a href="mailto:twoteamai@gmail.com" className="text-amber hover:text-bronze transition-colors">twoteamai@gmail.com</a> and we&apos;ll reply within 24 hours.</p>
                <div className="flex flex-wrap items-center justify-center gap-4 text-body-sm text-titanium/60">
                  <span className="flex items-center gap-1 font-mono text-[10px]">REMOTE / INDIA</span>
                </div>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=twoteamai@gmail.com&su=Project%20discussion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex mt-5 justify-center"
                >
                  Email Us to Discuss
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-30 bg-charcoal/50 border-y border-hairline" aria-labelledby="faq-title">
        <div className="container-custom">
          <div className="section-header mb-12 max-w-3xl">
            <span className="section-label">Common Questions</span>
            <h2 id="faq-title" className="section-title">
              Answers to frequent questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4" role="list">
            {[
              { q: 'How does the discovery workshop work?', a: 'A 2-week structured sprint where we validate your problem, define scope, create a technical plan, and give you a detailed proposal for the build phase. No obligation to continue.' },
              { q: 'What if I don\'t have a clear scope yet?', a: 'That\'s exactly what discovery is for. We help you go from "I have an idea" to a detailed product spec with architecture, timeline, and budget.' },
              { q: 'Do you work with non-technical founders?', a: 'Yes. Many of our clients are domain experts, not engineers. We translate business problems into technical solutions and keep you informed without jargon.' },
              { q: 'What\'s your typical engagement model?', a: 'Phased projects with weekly demos. You approve each phase before the next starts. For ongoing work, we offer monthly retainers with priority support.' },
              { q: 'Can you work with our existing team?', a: 'Absolutely. We can augment your team, take ownership of a module, or act as your external product engineering partner.' },
              { q: 'What happens after launch?', a: 'We offer ongoing partnerships: monitoring, iteration planning, feature development, scaling support. Many clients stay with us for years.' },
            ].map((faq, index) => (
              <details key={index} className="glass-card group" role="listitem">
                <summary className="p-5 flex items-center justify-between cursor-pointer list-none">
                  <span className="font-medium text-chalk pr-4">{faq.q}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-titanium/40 transition-transform group-open:rotate-180 flex-shrink-0" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </summary>
                <div className="px-5 pb-5 text-body text-sand border-t border-hairline animate-slide-down">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSubmit={handleSubmit} prefill={modalPrefill} />
    </div>
  )
}