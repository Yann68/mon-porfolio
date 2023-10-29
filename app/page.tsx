'use client';
import Image from 'next/image';
import ImageComputer from '@/public/image1.jpg';
import Divider from '@/components/Divider';
import Language from '@/components/Language';
import { Button } from '@/components/ui/button';
import CardProjects from '@/components/CardProjects';
import { DataProjects } from '@/data/data';
import { useRouter } from 'next/navigation';

import { useRef, RefObject } from 'react';

export default function Home() {
  const router = useRouter();

  const ref: RefObject<HTMLDivElement> = useRef(null);

  const scrollToProject = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="h-full flex flex-col">
      <div className="w-full flex flex-col md:flex-row md:justify-around">
        <div className="w-full p-5 pt-0 max-w-[400px] md:max-w-[400px] lg:max-w-[500px] md:pt-5">
          <h1 className="text-primary font-semibold mb-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Bienvenue sur mon Portfolio
          </h1>
          <p className="text-secondary-foreground dark:text-primary-foreground text-sm sm:text-base md:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            aspernatur optio harum nostrum voluptatem quam eos mollitia
            voluptatibus similique illo?
          </p>
          <div className="py-3">
            <Button
              className="h-8 w-[150px] md:h-10"
              onClick={scrollToProject}>
              Mes projets
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full h-[270px] sm:h-[300px] sm:w-[600px] md:p-3 md:h-[350px] md:w-[500px] lg:w-[600px]">
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
      <Divider />
      <div className="relative z-0 flex flex-col w-full">
        <h1 className="text-primary text-center underline underline-offset-2 md:underline-offset-4 decoration-primary decoration-2 md:decoration-[3px] font-semibold mt-3 text-3xl sm:text-4xl md:text-5xl">
          Mes connaissances
        </h1>
        <div className="flex justify-evenly flex-col md:flex-row mt-6">
          <div className="flex justify-center items-center md:ml-3 ">
            <Language />
          </div>
          <div className="md:w-[500px] mt-4 md:mt-8 mx-4 sm:mx-8 flex flex-wrap justify-between">
            <div className="mb-3">
              <h3 className="text-primary relative md:-left-4 underline underline-offset-2 md:underline-offset-3 decoration-primary decoration-1 md:decoration-2 font-semibold mb-3 text-2xl md:text-3xl ">
                Front-end
              </h3>
              <ul className="text-secondary-foreground dark:text-primary-foreground text-base sm:text-lg md:text-xl md:list-disc">
                <li>Html5</li>
                <li>Javascript</li>
                <li>React.js</li>
                <li>Next.js</li>
              </ul>
            </div>
            <div className="mx-4 mb-3">
              <h3 className="text-primary relative md:-left-4 underline underline-offset-2 md:underline-offset-3 decoration-primary decoration-1 md:decoration-2 font-semibold mb-3 text-2xl md:text-3xl">
                Back-end
              </h3>
              <ul className="text-secondary-foreground dark:text-primary-foreground text-base sm:text-lg md:text-xl md:list-disc">
                <li>Node.js</li>
                <li>MongoDb</li>
                <li>Express.js</li>
                <li>Vercel</li>
                <li>Formfree</li>
              </ul>
            </div>
            <div className="mb-3">
              <h3 className="text-primary relative md:-left-4 underline underline-offset-2 md:underline-offset-3 decoration-primary decoration-1 md:decoration-2 font-semibold mb-3 text-2xl md:text-3xl">
                UI/UX design
              </h3>
              <ul className="text-secondary-foreground dark:text-primary-foreground text-base sm:text-lg md:text-xl md:list-disc">
                <li>CSS</li>
                <li>Module.css</li>
                <li>ChakraUi</li>
                <li>Tailwind CSS</li>
                <li>Shadcn/ui</li>
              </ul>
            </div>
          </div>
        </div>
        <div ref={ref}></div>
      </div>
      <Divider />
      <div>
        <h1 className="text-primary text-center underline underline-offset-2 md:underline-offset-4 decoration-primary decoration-2 md:decoration-[3px] font-semibold mt-3 text-3xl sm:text-4xl md:text-5xl">
          Mes projets
        </h1>
        <div className="mt-4 md:mt-10 p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {DataProjects.map((project) => (
            <CardProjects
              key={project.title}
              title={project.title}
              description={project.description}
              picture={project.picture}
              githubLink={project.githubLink}
              link={project.link}
            />
          ))}
        </div>
      </div>
      <Divider />
      <div className="my-3 px-5 flex flex-col items-center">
        <div>
          <h3 className="font-semibold text-primary text-2xl md:text-3xl">
            Vous souhaitez me contacté ?
          </h3>
          <p className="text-secondary-foreground dark:text-primary-foreground py-2 text-sm sm:text-base md:text-lg">
            Pour toutes informations complémentaire,
            <br /> vous pouvez me contacté en remplissant le formulaire
          </p>
          <div className="flex justify-end">
            <Button
              className="h-8 w-[150px] md:h-10"
              onClick={() => router.push('/contact')}>
              Contactez-Moi
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
