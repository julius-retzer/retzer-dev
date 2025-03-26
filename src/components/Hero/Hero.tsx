import Link from 'next/link';
import Image from 'next/image';
import { type CVData } from '~/types/cv';

type HeroProps = {
  data: CVData['basics'];
};

const Hero = ({ data }: HeroProps) => {
  return (
    <section className="relative flex min-h-[90vh] items-center py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Hi, I'm {data.name.split(' ')[0]}</span>
              <span className="mt-2 block text-blue-600 dark:text-blue-400">{data.label.split(' | ')[0]}</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              {data.label.split(' | ')[1]}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-base font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Contact Me
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                View Projects
              </Link>
            </div>
          </div>
          <div className="order-1 flex justify-center md:order-2">
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-blue-600 shadow-xl dark:border-blue-400 sm:h-72 sm:w-72 md:h-80 md:w-80">
              {data.image ? (
                <Image
                  src={data.image}
                  alt={data.name}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gray-200 dark:bg-gray-700">
                  <span className="text-6xl font-bold text-gray-500 dark:text-gray-400">
                    {data.name.split(' ').map(name => name[0]).join('')}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#about" aria-label="Scroll to About section">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-8 w-8 text-gray-400 dark:text-gray-500"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
