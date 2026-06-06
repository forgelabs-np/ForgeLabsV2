'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '../icons/logo';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ContactOverlay } from '../contact/contact-overlay';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/case-studies', label: 'Case Studies' },
];

export function Header() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 py-4 px-6">
        <div className="bg-white rounded-2xl shadow-lg flex items-center p-4 h-24">
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center gap-2 pl-6" prefetch={false}>
              <Logo />
            </Link>
          </div>
          <nav className="hidden items-center gap-2 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'group relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-600 hover:bg-primary hover:text-primary-foreground'
                  )}
                  prefetch={false}
                >
                  <span className="relative block h-5 text-center leading-5 overflow-hidden">
                    <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                      {link.label}
                    </span>
                    <span className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                      {link.label}
                    </span>
                  </span>
                </Link>
              );
            })}
          </nav>
          <div className="flex-1 flex justify-end">
            <div className="hidden items-center gap-4 lg:flex pr-4">
              <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => setContactOpen(true)}>
                Contact Us
              </Button>
            </div>
            <div className="lg:hidden ml-auto flex items-center gap-2">
              {isMounted && (
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right">
                    <SheetHeader>
                      <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                    </SheetHeader>
                    <div className="grid gap-6 p-6">
                      <Link href="/" className="flex items-center gap-2" prefetch={false}>
                        <Logo />
                      </Link>
                      <nav className="grid gap-4">
                        {navLinks.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href}
                            className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                            prefetch={false}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </nav>
                      <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full" onClick={() => {
                        const sheetClose = document.querySelector('[data-radix-dialog-close]');
                        if (sheetClose instanceof HTMLElement) {
                            sheetClose.click();
                        }
                        setContactOpen(true)
                      }}>
                        Contact Us
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>
              )}
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isContactOpen && <ContactOverlay onClose={() => setContactOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
