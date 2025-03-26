import { type CVData } from '~/types/cv';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Badge } from '~/components/ui/badge';

type ExperienceProps = {
  work: CVData['work'];
};

const formatDate = (dateString: string) => {
  if (!dateString) return 'Present';
  
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });
};

const Experience = ({ work }: ExperienceProps) => {
  return (
    <section id="experience" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
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
                <Card className="border-none shadow-sm">
                  <CardHeader className="pb-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <CardTitle className="text-xl">{job.position}</CardTitle>
                      <Badge variant="outline" className="font-medium text-primary">{job.name}</Badge>
                    </div>
                    <CardDescription>
                      {formatDate(job.startDate)} - {formatDate(job.endDate)}
                      {job.location && (
                        <>
                          <span className="mx-2">•</span>
                          <span>{job.location}</span>
                        </>
                      )}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="prose prose-gray max-w-none">
                      {job.summary.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="text-muted-foreground">
                          {paragraph}
                        </p>
                      ))}
                    </div>
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
