import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Smartphone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Get In Touch</h1>
        <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto text-balance">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something impactful.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <Mail className="mr-3 h-6 w-6" /> Direct Contact
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Email</h3>
              <a href="mailto:your.email@example.com" className="text-accent-foreground hover:underline break-all">
                your.email@example.com
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">WhatsApp</h3>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-accent-foreground hover:underline">
                +1 (234) 567-890 (Click to chat)
              </a>
              <p className="text-xs text-muted-foreground mt-1">Please replace with your actual WhatsApp number or link.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <Smartphone className="mr-3 h-6 w-6" /> Social Media
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80 mb-6 text-balance">
              Connect with me on social media to see more of my work and activities.
            </p>
            <div className="flex flex-wrap gap-4">
              {SOCIAL_LINKS.filter(link => link.name !== 'Email' && link.name !== 'WhatsApp').map((link) => (
                <Button key={link.name} variant="outline" asChild className="transition-colors duration-300">
                  <Link href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <link.icon className="mr-2 h-5 w-5" />
                    {link.name}
                  </Link>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
