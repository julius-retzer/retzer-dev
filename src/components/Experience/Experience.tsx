import { type CVData } from '~/types/cv';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Badge } from '~/components/ui/badge';
import { ExternalLink } from 'lucide-react';

type ExperienceProps = {
  work: CVData['work'];
};

const formatDate = (dateString: string) => {
  if (!dateString) return 'Present';
  
  const date = new Date(dateString);
  return date.getFullYear().toString();
};

const Experience = ({ work }: ExperienceProps) => {
  return (
    <section id="experience" className="py-16 bg-muted/30 dark:bg-muted/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-[200px] w-[200px] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-accent/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
            Work Experience
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            My professional journey and contributions.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative border-l border-border pl-8">
            {work.map((job, index) => (
              <div 
                key={`${job.name}-${job.startDate}`}
                className={`mb-12 ${index === work.length - 1 ? '' : ''}`}
              >
                <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background">
                  <div className="h-3 w-3 rounded-full bg-primary"></div>
                </div>
                <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300 glow-effect">
                  <CardHeader className="pb-2">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        {job.url ? (
                          <a 
                            href={job.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 hover:text-primary transition-colors"
                          >
                            <CardTitle className="text-xl font-bold">{job.name}</CardTitle>
                            <ExternalLink size={16} className="inline-block" />
                          </a>
                        ) : (
                          <CardTitle className="text-xl font-bold">{job.name}</CardTitle>
                        )}
                        {job.isRemote && (
                          <Badge variant="secondary" className="font-medium text-xs">Remote</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-medium text-muted-foreground">{job.position}</span>
                      </div>
                    </div>
                    <CardDescription>
                      {formatDate(job.startDate)} - {formatDate(job.endDate)}
                      {job.location && (
                        <>
                          <span className="mx-2">&#x00B7;</span>
                          <span>{job.location}</span>
                        </>
                      )}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    {job.summary && job.summary.trim() !== "" && (
                      <p className="text-muted-foreground mb-4">{job.summary}</p>
                    )}
                    {job.highlights && job.highlights.length > 0 && (
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        {job.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm">{highlight}</li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
