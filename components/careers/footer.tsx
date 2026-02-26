import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-20">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-4 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-6 w-6 rounded bg-primary"></div>
              <span className="font-bold text-foreground">Qmax Systems</span>
            </div>
            <p className="text-sm text-foreground/70">
              Building cutting-edge technology through innovation, expertise, and collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Careers</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#openings" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Open Positions
                </Link>
              </li>
              <li>
                <Link href="#why-join" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Why Join Us
                </Link>
              </li>
              <li>
                <Link href="#internships" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Internships
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-foreground/70">careers@qmaxsys.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-foreground/70">+91 (044) XXXX-XXXX</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-foreground/70">Chennai, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-foreground/60">
            © 2024 Qmax Systems. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </Link>
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
