'use client'

import Image from 'next/image'
import { PROJECTS_DATA } from '@/lib/constants'

export default function ProjectsPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">My Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project) => (
          <div
            key={project.id}
            className="rounded-lg shadow p-6 space-y-4 bg-white dark:bg-gray-900"
          >
            {project.youtubeEmbedUrl ? (
              <div className="aspect-[3/2] w-full overflow-hidden rounded-lg">
                <iframe
                  src={project.youtubeEmbedUrl}
                  title={project.title}
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="relative w-full aspect-[3/2] overflow-hidden rounded-lg">
                <Image
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-primary">{project.title}</h3>
              <p className="text-base text-foreground">{project.description}</p>
              <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">
                {project.reflectiveNarrative}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
