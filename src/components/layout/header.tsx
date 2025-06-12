'use client';

import Link from 'next/link';
import { MainNav } from './main-nav';
import { MobileNav } from './mobile-nav';
import { SearchInput } from '../search-input';
import { Button } from '@/components/ui/button';
import { Briefcase } from 'lucide-react'; // Example icon for logo

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          {/* Using text as logo */}
          <Briefcase className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg text-primary">(NAMA WEB NYA RE)</span>
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
