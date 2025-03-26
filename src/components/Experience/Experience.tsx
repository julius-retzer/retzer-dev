import { type CVData } from '~/types/cv';

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
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Work Experience
          </h2>
          <p className="mb-12 text-lg text-gray-600 dark:text-gray-400">
            My professional journey and contributions.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative border-l border-gray-300 pl-8 dark:border-gray-700">
            {work.map((job, index) => (
              <div 
                key={`${job.name}-${job.startDate}`}
                className={`mb-12 ${index === work.length - 1 ? '' : ''}`}
              >
                <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-900">
                  <div className="h-3 w-3 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                </div>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-bold">{job.position}</h3>
                  <span className="text-gray-500 dark:text-gray-400">•</span>
                  <span className="font-medium text-blue-600 dark:text-blue-400">{job.name}</span>
                </div>
                <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                  {formatDate(job.startDate)} - {formatDate(job.endDate)}
                  {job.location && (
                    <>
                      <span className="mx-2">•</span>
                      <span>{job.location}</span>
                    </>
                  )}
                </div>
                <div className="prose prose-gray max-w-none dark:prose-invert">
                  {job.summary.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-gray-600 dark:text-gray-400">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
