"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchInput() {
  return (
    <div className="relative ml-auto hidden sm:flex items-center">
      <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search..."
        className="pl-8 sm:w-[200px] md:w-[250px] lg:w-[300px] rounded-md h-9"
        // Add functionality later
      />
    </div>
  );
}
