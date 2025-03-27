import { type CVData } from '~/types/cv';

type SkillsProps = {
  skills: CVData['skills'];
};

const Skills = ({ skills }: SkillsProps) => {
  if (!skills || skills.length === 0) {
    return null;
  }

  return (
    <section id="skills" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
            Skills & Expertise
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            Technologies and tools I specialize in.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <div 
                key={skill.name}
                className="px-6 py-3 rounded-full bg-muted/30 hover:bg-primary/10 transition-colors duration-300 text-lg font-medium"
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
