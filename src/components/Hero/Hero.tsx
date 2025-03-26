import Link from 'next/link';
import Image from 'next/image';
import { type CVData } from '~/types/cv';
import { Button } from '~/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';

type HeroProps = {
  data: CVData['basics'];
};

const Hero = ({ data }: HeroProps) => {
  const initials = data.name.split(' ').map(name => name[0]).join('');
  
  return (
    <section className="relative flex min-h-[90vh] items-center py-16 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Hi, I'm {data.name.split(' ')[0]}</span>
              <span className="mt-2 block text-primary">{data.label.split(' | ')[0]}</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
              {data.label.split(' | ')[1]}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="#contact">
                  Contact Me
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#projects">
                  View Projects
                </Link>
              </Button>
            </div>
          </div>
          <div className="order-1 flex justify-center md:order-2">
            <Avatar className="h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 border-4 border-primary shadow-xl">
              {data.image ? (
                <AvatarImage src={data.image} alt={data.name} />
              ) : (
                <AvatarFallback className="text-6xl">
                  {initials}
                </AvatarFallback>
              )}
            </Avatar>
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
            className="h-8 w-8 text-muted-foreground"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
