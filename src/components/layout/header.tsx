'use client';

import Link from 'next/link';
import { MainNav } from './main-nav';
import { MobileNav } from './mobile-nav';
import { SearchInput } from '../search-input';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          {/* Gambar logo lebih besar dan berbentuk lingkaran */}
          <img
            src="/image/logo-rere.jpeg" // gunakan slash forward (/) untuk path yang benar
            alt="Your Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
        </Link>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <MainNav />
          <SearchInput />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
