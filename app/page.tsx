import { Hero } from '@/components/careers/hero'
import { CurrentOpenings } from '@/components/careers/current-openings'
import { OpeningsList } from '@/components/careers/openings-list'
import { CTA } from '@/components/careers/cta'
import FooterV2 from '@/components/footer'
import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <OpeningsList />
      <CurrentOpenings hideHeader={true} />
      {/* <InternshipProgram /> */}
      <CTA />
      <FooterV2 />
    </main>
  )
}
