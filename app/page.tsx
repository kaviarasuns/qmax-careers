import { Header } from '@/components/careers/header'
import { Hero } from '@/components/careers/hero'
import { CurrentOpenings } from '@/components/careers/current-openings'
import { InternshipProgram } from '@/components/careers/internship-program'
import { CTA } from '@/components/careers/cta'
import { Footer } from '@/components/careers/footer'
import FooterV2 from '@/components/footer'
import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <CurrentOpenings />
      {/* <InternshipProgram /> */}
      <CTA />
      <FooterV2 />
    </main>
  )
}
