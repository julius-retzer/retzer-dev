import { getCVData } from '~/utils/cv';
import MainLayout from '~/components/Layout/MainLayout';
import Hero from '~/components/Hero/Hero';
import About from '~/components/About/About';
import Projects from '~/components/Projects/Projects';
import Experience from '~/components/Experience/Experience';
import Contact from '~/components/Contact/Contact';

export default function HomePage() {
  // Server-side fetch of CV data
  const cvData = getCVData();
  
  // Ensure projects array exists (fallback to empty array if not)
  const projects = cvData.projects || [];

  return (
    <MainLayout>
      <Hero data={cvData.basics} />
      <About data={cvData.basics} />
      <Experience work={cvData.work || []} />
      <Projects projects={projects} />
      <Contact data={cvData.basics} />
    </MainLayout>
  );
}
