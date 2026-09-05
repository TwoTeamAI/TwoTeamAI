import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export function ContactModal({ isOpen, onClose, onSubmit, prefill = {} }) {
  const formRef = useRef(null)
  const previousActiveElement = useRef(null)

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement
      document.body.style.overflow = 'hidden'
      setTimeout(() => formRef.current?.focus(), 100)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="absolute inset-0 bg-carbon/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative max-w-lg w-full max-h-[calc(100vh-2rem)] overflow-y-auto bg-mineral border border-hairline rounded-2xl shadow-elevation-3 animate-scale-in">
        <div className="flex items-center justify-between p-4 lg:p-6 border-b border-hairline">
          <h2 id="modal-title" className="font-display text-heading-md font-semibold text-chalk">
            Project Brief Form
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-titanium hover:text-chalk hover:bg-charcoal transition-colors"
            aria-label="Close modal"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); onSubmit(new FormData(e.currentTarget)) }} className="p-4 lg:p-6 space-y-4" ref={formRef}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="label-field">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="input-field"
                placeholder="Your name"
                defaultValue={prefill.name || ''}
                required
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="email" className="label-field">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="input-field"
                placeholder="you@company.com"
                defaultValue={prefill.email || ''}
                required
                autoComplete="email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="label-field">Company (Optional)</label>
            <input
              type="text"
              id="company"
              name="company"
              className="input-field"
              placeholder="Company name"
              defaultValue={prefill.company || ''}
              autoComplete="organization"
            />
          </div>

          <div>
            <label htmlFor="phone" className="label-field">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="input-field"
              placeholder="Your phone number"
              defaultValue={prefill.phone || ''}
              required
              autoComplete="tel"
              inputMode="tel"
            />
          </div>

          <div>
            <label htmlFor="projectType" className="label-field">Project Type</label>
            <select id="projectType" name="projectType" className="input-field" defaultValue={prefill.projectType || ''}>
              <option value="">Select project type</option>
              <option value="landing">Landing Page / Marketing Site</option>
              <option value="webapp">Web Application (with login/dashboard)</option>
              <option value="saas">SaaS Platform (billing, teams, API)</option>
              <option value="ai">AI-Powered Feature / RAG System</option>
              <option value="whatsapp">WhatsApp Automation / Chatbot</option>
              <option value="modernize">Legacy Modernization / Migration</option>
              <option value="custom">Something Else / Not Sure</option>
            </select>
          </div>

          <div>
            <label htmlFor="timeline" className="label-field">Timeline</label>
            <select id="timeline" name="timeline" className="input-field" defaultValue={prefill.timeline || ''}>
              <option value="">When do you need it?</option>
              <option value="asap">ASAP (Rush)</option>
              <option value="normal">Standard Timeline</option>
              <option value="flexible">Flexible (Optimize for Quality)</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="label-field">Tell Us About Your Idea</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="input-field resize-none"
              placeholder="What are you trying to build? What problem does it solve? Any specific requirements?"
              defaultValue={prefill.message || ''}
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button type="submit" className="btn-primary justify-center flex-1">
              Send Project Brief
            </button>
            <a
              href="https://wa.me/917276136138?text=Hi%20TwoTeamAI%2C%20I%20have%20an%20idea%20I%27d%20like%20to%20discuss."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp justify-center flex-1"
              onClick={onClose}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.454.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.398.01-.598.01-.203.005-.40.016-.598.016l-.735-.712c-.234-.227-.68-.607-.935-.97l-.69-.958-.423-.423-.284-.267-.062-.078c-.227-.266-.27-.606-.16-.816.054-.1.424-.628.67-.81.388-.272 1.23-.826 1.767-1.157.29-.18.62-.36.997-.54.37-.18.752-.27 1.134-.27h.008c.523 0 .97.236 1.278.566.476.5 1.64 2.01 1.762 2.29.097.22.194.503.16.702-.032.17-.187.498-.434.81l-.45.572-.27.348c-.25.318-.53.676-.573.79-.075.19-.094.403-.094.603 0 .203.043.44.127.614.084.173.372.66.733.874.297.174.68.26 1.032.182.364-.08.716-.26 1.007-.448.297-.198.564-.41.798-.66.234-.25.44-.53.626-.848.097-.173.31-.484.356-.56.032-.032.08-.236.232-.472.14-.223.31-.43.468-.6.15-.15.285-.285.473-.473l.215-.227c.535-.543 1.268-1.08 1.65-1.08.38 0 .74.094 1.07.283.33.188.618.412.848.68.23.267.41.57.527.903.102.292.132.608.132.94 0 .365-.034.69-.102 1.002zM12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5.01L2 22l6.99-1.99C10.47 21.513 12.18 22 14 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-2.745 0-5.206-.875-7.116-2.427l-.92.322.343-.963c-.713-.974-1.17-2.16-1.17-3.433 0-3.854 3.146-7 7-7 1.27 0 2.47.183 3.57.5.318.104.59.137.888.103.308-.034.627-.16.866-.372.228-.2.45-.45.67-.706.228-.254.448-.52.66-.8.22-.288.42-.58.608-.88.18-.29.33-.59.43-.9.1-.32.15-.64.15-.96 0-.5-.12-.98-.36-1.4-.306-.49-.75-.92-1.32-1.32-.57-.42-1.06-.54-1.5-.36-.32.12-.64.17-.97.15-.1.02-.31.03-.52.03-1.745 0-3.25-1.38-3.566-3.67-.3-.22-.54-.5-.74-.8-.2-.3-.34-.62-.43-.94-.08-.33-.07-.67.02-1 .07-.24.19-.46.34-.66.14-.19.3-.37.46-.55.17-.18.34-.35.52-.52.18-.17.36-.33.55-.49.18-.17.36-.33.55-.49.18-.17.36-.33.55-.49.18-.17.36-.33.55-.49.19-.17.38-.33.56-.49.2-.16.39-.31.57-.47.17-.16.33-.33.5-.49.17-.16.34-.32.51-.48.27-.26.5-.54.69-.84.2-.3.35-.62.45-.95.1-.33.15-.67.15-1.01 0-.48-.11-.95-.33-1.4-.22-.45-.55-.87-1.01-1.24-.33-.27-.69-.49-1.07-.67-.38-.19-.78-.3-1.18-.34-.4-.04-.8-.06-1.2-.08-1.24-.05-2.39-.08-3.5-.08-4.422 0-8 3.578-8 8 0 4.422 3.578 8 8 8z"/>
              </svg>
              WhatsApp Instead
            </a>
          </div>
        </form>

        <p className="px-4 lg:px-6 pb-4 lg:pb-6 text-caption text-titanium/60 text-center">
          We typically respond within 24 hours. No spam, ever.
        </p>
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}