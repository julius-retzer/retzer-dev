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
      'Frontend': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      'Backend': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      'Languages': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      'Tools': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      'Frameworks': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
      'Testing': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      'Databases': 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
      'DevOps': 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
    };
    
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
  };

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Skills & Expertise
          </h2>
          <p className="mb-12 text-lg text-gray-600 dark:text-gray-400">
            Here are the technologies and tools I specialize in.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {Object.entries(skillsByCategory).map(([category, keywords]) => (
            <div 
              key={category}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
            >
              <div className="border-b border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
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
