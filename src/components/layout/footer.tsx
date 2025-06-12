"use client";

import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear !== null ? currentYear : new Date().getFullYear()} User Persona. All rights reserved.
        </p>
        <div className="flex items-center space-x-2">
          {SOCIAL_LINKS.map((link) => (
            <Button
              key={link.name}
              variant="ghost"
              size="icon"
              asChild
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={link.name}
            >
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                <link.icon className="h-5 w-5" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
