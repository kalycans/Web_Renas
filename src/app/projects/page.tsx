import ProjectCard from '@/components/project-card';
import { PROJECTS_DATA } from '@/lib/constants';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">My Projects</h1>
        <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto text-balance">
          A showcase of my involvement in various social and organizational activities, highlighting key learnings and achievements.
        </p>
      </header>
      
      {PROJECTS_DATA.length === 0 ? (
        <p className="text-center text-muted-foreground">No projects to display at the moment. Please check back later!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
