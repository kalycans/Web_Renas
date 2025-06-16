import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  title: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string; // Used for AI summary
  reflectiveNarrative: string; // Displayed on card
  imageUrl: string;
  youtubeEmbedUrl?: string // ✅ ditambahkan di sini
  imageAlt: string;
  dataAiHint: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}
