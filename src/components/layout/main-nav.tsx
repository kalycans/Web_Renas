"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === item.href
              ? "text-foreground font-semibold" // Active link: Coklat tua olive (#6C5E3B), bold
              : "text-muted-foreground"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
