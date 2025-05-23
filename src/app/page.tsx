import { getCVData } from '~/utils/cv';
import MainLayout from '~/components/Layout/MainLayout';
import Hero from '~/components/Hero/Hero';
import Summary from '~/components/Summary/Summary';
import Projects from '~/components/Projects/Projects';
import Experience from '~/components/Experience/Experience';
import Skills from '~/components/Skills/Skills';
import Contact from '~/components/Contact/Contact';

export default function HomePage() {
  // Server-side fetch of CV data
  const cvData = getCVData();

  // Ensure projects array exists (fallback to empty array if not)
  const projects = cvData.projects || [];

  return (
    <MainLayout>
      <Hero data={cvData.basics} />
      <Summary data={cvData.basics} />
      <Experience work={cvData.work || []} />
      <Skills skills={cvData.skills || []} />
      {/* <Projects projects={projects} /> */}
      {/* <Contact data={cvData.basics} /> */}
    </MainLayout>
  );
}
