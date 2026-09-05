import { Hero } from '../components/home/Hero'
import { ProblemSection } from '../components/home/ProblemSection'
import { ServicesGrid } from '../components/home/ServicesGrid'
import { ProcessSection } from '../components/home/ProcessSection'
import { CaseStudiesSpotlight } from '../components/home/CaseStudiesSpotlight'
import { WhyUsSection } from '../components/home/WhyUsSection'
import { FinalCTA } from '../components/home/FinalCTA'
import { RevealOnScroll } from '../components/shared/RevealOnScroll'

export function HomePage() {
  return (
    <>
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