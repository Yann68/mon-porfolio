'use client';
import Image from 'next/image';
import { Button } from '../ui/button';
import ImageComputer from '@/public/image1.jpg';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Header = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const scrollToProject = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row md:justify-around">
      <div
        ref={ref}
        style={{
          transform: isInView ? 'none' : 'translateX(100%)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
        }}
        className="w-full p-5 pt-0  md:max-w-[400px] lg:max-w-[500px] md:pt-5">
        <h1 className="text-primary font-semibold mb-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Bienvenue sur mon Portfolio
        </h1>
        <p className="text-secondary-foreground dark:text-primary-foreground text-sm sm:text-base md:text-lg">
          Développeur Full Stack passionné par React et Next.js, je crée des
          expériences utilisateur exceptionnelles en combinant des composants
          frontend réactifs avec des architectures backend robustes. Ma
          spécialisation dans Next.js me permet de concevoir des applications
          web rapides et bien référencées.
        </p>
        <div className="py-3">
          <Button
            className="h-8 w-[150px] md:h-10"
            onClick={scrollToProject}>
            Mes projets
          </Button>
        </div>
      </div>
      <div
        ref={ref}
        style={{
          transform: isInView ? 'none' : 'translateX(100%)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
        }}
        className="flex justify-center">
        <div className="w-full h-[270px] sm:h-[300px] sm:w-[600px] md:p-3 md:h-[350px] md:w-[450px] lg:w-[600px]">
          <Image
            alt="ordinateur"
            src={ImageComputer}
            priority
            className="sm:shadow-[0_0_8px_0_black] dark:sm:shadow-[0_0_8px_0_white] sm:rounded"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
