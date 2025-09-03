import Link from "next/link";
import { Github, Linkedin, Facebook, Phone, Mail, MapPin, Home, GraduationCap, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="w-full py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="#home" className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Hung Phu</span>
            </Link>
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Hung Phu. All rights reserved.</p>
          </div>

          {/* Column 2: My Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">My Info</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="h-4 w-4 text-primary"/>
                <span>0396384095</span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="h-4 w-4 text-primary"/>
                <a href="mailto:phunlh2001@gmail.com" className="hover:text-primary transition-colors">
                  phunlh2001@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <GraduationCap className="h-4 w-4 text-primary"/>
                <span>FPT University (7.9 GPA)</span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Home className="h-4 w-4 text-primary"/>
                <span>From: Dong Thap</span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <MapPin className="h-4 w-4 text-primary"/>
                <span>Based in: Can Tho</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/phunlh2001" target="_blank" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/phunlh2001/" target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.facebook.com/phunlh2001/" target="_blank" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}