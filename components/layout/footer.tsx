import Link from "next/link"
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="font-bold">Bugema Adventist Primary</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Excellence in Christian Education. Nurturing young minds with values and knowledge.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm text-muted-foreground hover:text-primary">
                About Us
              </Link>
              <Link href="/academics" className="block text-sm text-muted-foreground hover:text-primary">
                Academics
              </Link>
              <Link href="/admissions" className="block text-sm text-muted-foreground hover:text-primary">
                Admissions
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <div className="space-y-2">
              <Link href="/news" className="block text-sm text-muted-foreground hover:text-primary">
                News
              </Link>
              <Link href="/events" className="block text-sm text-muted-foreground hover:text-primary">
                Events
              </Link>
              <Link href="/gallery" className="block text-sm text-muted-foreground hover:text-primary">
                Gallery
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Bugema, Wakiso District, Uganda</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+256 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@bugemaprimary.ac.ug</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bugema Adventist Primary School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
