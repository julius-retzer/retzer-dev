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
    <section className="relative min-h-[90vh] flex items-center py-16 overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute top-1/4 -left-20 h-60 w-60 rounded-full bg-accent/15 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 h-40 w-40 rounded-full bg-chart-3/20 blur-3xl"></div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <div className="inline-block rounded-lg bg-primary/15 px-3 py-1 text-sm font-medium text-primary mb-4 animate-fade-in">
              Available for new opportunities
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block animate-fade-in-up [animation-delay:200ms]">Hi, I'm {data.name.split(' ')[0]}</span>
              <span className="mt-2 block gradient-text animate-fade-in-up [animation-delay:400ms]">{data.label.split(' | ')[0]}</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-muted-foreground animate-fade-in-up [animation-delay:600ms]">
              {data.label.split(' | ')[1]}
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up [animation-delay:800ms]">
              <Button asChild className="relative overflow-hidden group glow-effect">
                <Link href="mailto:jul.retzer@gmail.com">
                 Contact Me
                </Link>
              </Button>
              <Button variant="outline" asChild className="relative overflow-hidden group">
                <Link href="#projects">
                 View Projects
                </Link>
              </Button>
            </div>
          </div>
          <div className="order-1 flex justify-center md:order-2">
            <div className="relative">
              {/* Decorative elements around avatar */}
              <div className="absolute -z-10 inset-0 rounded-full bg-gradient-to-r from-primary/30 to-accent/20 blur-xl animate-pulse"></div>
              <div className="absolute -z-10 -inset-1 rounded-full bg-gradient-to-r from-primary/40 via-accent/20 to-primary/40 animate-spin-slow"></div>

              <Avatar className="h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 border-4 border-background shadow-xl animate-fade-in">
                {data.image ? (
                  <AvatarImage src={data.image} alt={data.name} />
                ) : (
                  <AvatarFallback className="text-6xl bg-gradient-to-br from-primary/90 to-accent/80">
                    {initials}
                  </AvatarFallback>
                )}
              </Avatar>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#about" aria-label="Scroll to About section" className="block p-2 rounded-full hover:bg-muted transition-colors">
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
