import Image from 'next/image';
import { type CVData } from '~/types/cv';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';
import { Button } from '~/components/ui/button';

type ProjectsProps = {
  projects: CVData['projects'];
};

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className="py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-[250px] w-[250px] rounded-full bg-accent/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
            Featured Projects
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            A selection of my recent work and contributions.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card 
              key={project.name} 
              className="overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50 opacity-0 animate-fade-in-up glow-effect"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-accent/10">
                    <span className="text-4xl font-bold text-primary/60">
                      {project.name.charAt(0)}
                    </span>
                  </div>
                )}
                
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-white font-bold text-lg">{project.name}</h3>
                </div>
              </div>
              
              <CardHeader className="p-5 pb-0">
                <CardTitle className="group-hover:text-primary transition-colors">{project.name}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-5 pt-4">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.keywords?.map((tech) => (
                    <span 
                      key={tech}
                      className="inline-flex items-center rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-medium text-primary transition-all hover:bg-primary/25"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="p-5 pt-0 flex gap-3">
                {project.url && (
                  <Button variant="link" className="p-0 h-auto group/btn" asChild>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-accent"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-1 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                      </svg>
                      <span className="relative">
                        Demo
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover/btn:w-full transition-all duration-300"></span>
                      </span>
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="link" className="p-0 h-auto group/btn" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium"
                    >
                      <svg className="mr-1 h-4 w-4 transition-transform group-hover/btn:rotate-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      <span className="relative">
                        GitHub
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover/btn:w-full transition-all duration-300"></span>
                      </span>
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
