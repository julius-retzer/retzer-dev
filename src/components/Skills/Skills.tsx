import { type CVData } from '~/types/cv';

type SkillsProps = {
  skills: CVData['skills'];
};

const Skills = ({ skills }: SkillsProps) => {
  // Group skills by category
  const skillsByCategory = skills.reduce<Record<string, string[]>>((acc, skill) => {
    const category = skill.name;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill.keywords.join(', '));
    return acc;
  }, {});

  const getSkillColor = (category: string) => {
    const colors = {
      'Frontend': 'bg-primary/15 text-primary dark:bg-primary/20 dark:text-primary',
      'Backend': 'bg-accent/15 text-accent dark:bg-accent/20 dark:text-accent',
      'Languages': 'bg-chart-3/15 text-chart-3 dark:bg-chart-3/20 dark:text-chart-3',
      'Tools': 'bg-chart-5/15 text-chart-5 dark:bg-chart-5/20 dark:text-chart-5',
      'Frameworks': 'bg-chart-1/15 text-chart-1 dark:bg-chart-1/20 dark:text-chart-1',
      'Testing': 'bg-destructive/15 text-destructive dark:bg-destructive/20 dark:text-destructive',
      'Databases': 'bg-chart-2/15 text-chart-2 dark:bg-chart-2/20 dark:text-chart-2',
      'DevOps': 'bg-muted text-muted-foreground dark:bg-muted dark:text-muted-foreground',
    };
    
    return colors[category as keyof typeof colors] || 'bg-muted text-muted-foreground dark:bg-muted dark:text-muted-foreground';
  };

  return (
    <section id="skills" className="py-16 bg-muted/30 dark:bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
            Skills & Expertise
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            Here are the technologies and tools I specialize in.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {Object.entries(skillsByCategory).map(([category, keywords]) => (
            <div 
              key={category}
              className="overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-md glow-effect"
            >
              <div className="border-b border-border px-4 py-3 bg-card/80">
                <h3 className="text-lg font-medium">{category}</h3>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {keywords.flatMap(keyword => 
                    keyword.split(', ').map(skill => (
                      <span 
                        key={skill} 
                        className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${getSkillColor(category)}`}
                      >
                        {skill}
                      </span>
                    ))
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
