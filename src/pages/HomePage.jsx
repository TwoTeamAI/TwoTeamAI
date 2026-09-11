import { Hero } from '../components/home/Hero'
import { ProblemSection } from '../components/home/ProblemSection'
import { ServicesGrid } from '../components/home/ServicesGrid'
import { ProcessSection } from '../components/home/ProcessSection'
import { CaseStudiesSpotlight } from '../components/home/CaseStudiesSpotlight'
import { WhyUsSection } from '../components/home/WhyUsSection'
import { FinalCTA } from '../components/home/FinalCTA'
import { RevealOnScroll } from '../components/shared/RevealOnScroll'
import { SEOHead } from '../hooks/useSEO'

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TwoTeamAI',
  url: 'https://twoteamai.vercel.app',
  logo: 'https://twoteamai.vercel.app/og-image.jpg',
  description: 'Senior product engineering studio specializing in web apps, SaaS platforms, AI solutions and business automation.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-7276136138',
    contactType: 'customer support',
    availableLanguage: ['English', 'Hindi'],
    areaServed: 'IN',
  },
  sameAs: [
    'https://wa.me/917276136138',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  knowsAbout: [
    'Web Development', 'SaaS Development', 'Artificial Intelligence',
    'React', 'Next.js', 'Node.js', 'WhatsApp Automation', 'Chatbot Development',
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'TwoTeamAI',
  url: 'https://twoteamai.vercel.app',
  description: 'Product Engineering Studio — Web, SaaS, AI & Automation',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://twoteamai.vercel.app/work',
  },
}

export function HomePage() {
  return (
    <>
      <SEOHead
        title="Product Engineering Studio — Web, SaaS & AI Development"
        description="TwoTeamAI is a senior product engineering studio. We build web apps, SaaS platforms, AI-powered solutions and business automation — from idea to production, with zero handoffs."
        keywords="product engineering studio, web development India, SaaS platform development, AI solutions, React developer, Next.js development, business automation, WhatsApp chatbot, freelance software engineer India"
        canonical="/"
        jsonLd={[organizationJsonLd, websiteJsonLd]}
      />
      <Hero />
      <RevealOnScroll><WhyUsSection /></RevealOnScroll>
      <RevealOnScroll delay={80}><ProblemSection /></RevealOnScroll>
      <RevealOnScroll delay={120}><ServicesGrid /></RevealOnScroll>
      <RevealOnScroll delay={160}><ProcessSection /></RevealOnScroll>
      <RevealOnScroll delay={200}><CaseStudiesSpotlight /></RevealOnScroll>
      <RevealOnScroll delay={240}><FinalCTA /></RevealOnScroll>
    </>
  )
}