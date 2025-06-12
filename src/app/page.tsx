import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DownloadCloud, ArrowRight } from 'lucide-react';
import { CV_DOWNLOAD_LINK } from '@/lib/constants';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-16 items-center">
        <div className="md:col-span-2 flex justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl border-4 border-primary/20">
            <Image
<<<<<<< HEAD
              src="/image/rere.jpeg" // Path relatif ke folder public
=======
              src="/images/ahyeon.jpg" // Path relatif ke folder public
>>>>>>> a2d93e83e98f94c6bb0cea1df5f842d44d61650b
              alt="Renas Tasya Putri"
              fill // Menggunakan fill agar gambar mengisi div parent
              sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px" // Membantu Next.js mengoptimalkan gambar untuk berbagai ukuran layar
              priority // Memprioritaskan pemuatan gambar ini (LCP)
              className="object-cover transform hover:scale-105 transition-transform duration-300"
              data-ai-hint="woman portrait"
            />
          </div>
        </div>
        <div className="md:col-span-3 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6">
            Hello, I'm Renas Tasya Putri
          </h1>
          <p className="text-lg sm:text-xl text-foreground/80 mb-8 leading-relaxed text-balance">
            A passionate and dynamic communication specialist with a knack for crafting compelling narratives and fostering meaningful connections. Explore my journey and discover how my skills can bring value to your projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" asChild className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <Link href={CV_DOWNLOAD_LINK} target="_blank" download>
                <DownloadCloud className="mr-2 h-5 w-5" />
                Download CV
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <Link href="/projects">
                View My Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
