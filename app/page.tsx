import { Header } from '@/components/careers/header'
import { Hero } from '@/components/careers/hero'
import { CurrentOpenings } from '@/components/careers/current-openings'
import { JobDetails } from '@/components/careers/job-details'
import { WhyJoinQmax } from '@/components/careers/why-join-qmax'
import { InternshipProgram } from '@/components/careers/internship-program'
import { CTA } from '@/components/careers/cta'
import { Footer } from '@/components/careers/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <CurrentOpenings />
      <JobDetails />
      <WhyJoinQmax />
      <InternshipProgram />
      <CTA />
      <Footer />
    </main>
  )
}
