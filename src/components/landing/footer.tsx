
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-blue-50/50 to-white pt-16 pb-8 text-sm text-muted-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="ForgeLabs Logo" width={140} height={32} />
            </div>
            <p className="max-w-md">
              Where ideas are forged into impactful digital realities. We specialize in building enterprise-grade web applications tailored for your business needs.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>forgelabs.np@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>+977 9765142241</span>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-primary transition-colors" prefetch={false}>Home</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors" prefetch={false}>About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors" prefetch={false}>Services</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors" prefetch={false}>Contact</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-primary transition-colors" prefetch={false}>Get Support</Link></li>
              <li><Link href="#" className="hovertext-primary transition-colors" prefetch={false}>FAQs</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} ForgeLabs Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
