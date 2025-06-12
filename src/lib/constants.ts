import type { NavItem, Project, SocialLink } from '@/types';
import { Home, User, Briefcase, Mail, Linkedin, Instagram, Github, MessageSquare, DownloadCloud } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'About Me', href: '/about' },
  { title: 'Projects', href: '/projects' },
  { title: 'Contact', href: '/contact' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'Community Outreach Program',
    description: 'Led a team to organize a local community outreach program focusing on youth education and engagement. Successfully partnered with local schools and businesses to provide resources and mentorship opportunities, impacting over 200 students.',
    reflectiveNarrative: 'This project taught me the power of collaboration and empathetic leadership. Seeing the direct impact on students was incredibly rewarding.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAlt: 'Community event with volunteers and students',
    dataAiHint: 'community event',
  },
  {
    id: '2',
    title: 'University Debate Club President',
    description: 'Served as President of the University Debate Club, overseeing a 50% growth in membership. Organized multiple inter-university debate competitions and workshops on public speaking and critical thinking.',
    reflectiveNarrative: 'Honed my public speaking, organizational, and leadership skills significantly. Fostered an environment of intellectual curiosity and respectful discourse.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAlt: 'Students participating in a debate competition',
    dataAiHint: 'debate competition',
  },
  {
    id: '3',
    title: 'Social Media Campaign for NGO',
    description: 'Developed and executed a social media campaign for a non-governmental organization to raise awareness about environmental conservation. The campaign reached over 50,000 people and increased online donations by 30%.',
    reflectiveNarrative: 'Learned the nuances of digital communication and strategic content creation. It was fulfilling to use my skills for a cause I care deeply about.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAlt: 'Social media graphics for environmental campaign',
    dataAiHint: 'social media',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Email', url: 'mailto:your.email@example.com', icon: Mail },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', icon: Linkedin },
  { name: 'Instagram', url: 'https://instagram.com/yourprofile', icon: Instagram },
  { name: 'GitHub', url: 'https://github.com/yourprofile', icon: Github },
  { name: 'WhatsApp', url: 'https://wa.me/1234567890', icon: MessageSquare }, // Replace with actual WhatsApp number
];

export const CV_DOWNLOAD_LINK = '/cv_persona_comunicare.pdf'; // User should place their CV here
