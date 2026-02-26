import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <div className="mb-6 inline-block rounded-lg bg-primary/10 px-4 py-2">
            <span className="text-sm font-semibold text-primary">We're Hiring</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            Design, Develop, and Deploy <span className="text-primary">Cutting-Edge Products</span>
          </h1>

          <p className="mb-8 text-lg text-foreground/70">
            Join Qmax Systems and work on full-cycle product development. From Hardware and AI to Industrial Design, gain hands-on experience solving complex challenges with experienced engineers in a culture that prioritizes your growth.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Explore Roles <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Internships
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-8">
            <div>
              <div className="text-3xl font-bold text-primary">15+</div>
              <p className="text-sm text-foreground/70">Open Positions</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">8</div>
              <p className="text-sm text-foreground/70">Engineering Domains</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">100%</div>
              <p className="text-sm text-foreground/70">Growth Focused</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
