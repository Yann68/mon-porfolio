'use client';
import Image from 'next/image';
import ImageComputer from '@/public/image1.jpg';
import Divider from '@/components/Divider';
import Language from '@/components/Language';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="h-full flex flex-col">
      <div className="w-full flex flex-col md:flex-row md:justify-around">
        <div className="w-full p-5 pt-0 md:w-[400px] lg:w-[500px] md:pt-5">
          <h1 className="font-semibold mb-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Bienvenue sur mon Porfolio
          </h1>
          <p className="text-sm sm:text-base md:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            aspernatur optio harum nostrum voluptatem quam eos mollitia
            voluptatibus similique illo?
          </p>
          <div className="p-3">
            <Button>Mes projets</Button>
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
        <h1 className="text-center underline underline-offset-2 md:underline-offset-4 decoration-slate-700 decoration-2 md:decoration-4 font-semibold mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Mes compétences
        </h1>
        <div className="flex justify-evenly flex-col md:flex-row mt-10">
          <div className="flex justify-center">
            <div className="relative -top-6">
              <Language />
            </div>
          </div>
          <div className="mx-8 flex flex-wrap space-x-5 justify-around sm:space-x-10 ">
            <div>
              <h3 className="relative -left-4 underline underline-offset-2 md:underline-offset-3 decoration-slate-700 decoration-1 md:decoration-2 font-semibold mb-3 text-2xl md:text-3xl lg:text-4xl">
                Front-end
              </h3>
              <ul className="text-xl list-disc">
                <li>Html5</li>
                <li>Javascript</li>
                <li>React.js</li>
                <li>Next.js</li>
              </ul>
            </div>
            <div>
              <h3 className="relative -left-4 underline underline-offset-2 md:underline-offset-3 decoration-slate-700 decoration-1 md:decoration-2 font-semibold mb-3 text-2xl md:text-3xl lg:text-4xl">
                Back-end
              </h3>
              <ul className="text-xl list-disc">
                <li>Node</li>
                <li>MongoDb</li>
                <li>Vercel</li>
                <li>Formfree</li>
              </ul>
            </div>
            <div>
              <h3 className="relative -left-4 underline underline-offset-2 md:underline-offset-3 decoration-slate-700 decoration-1 md:decoration-2 font-semibold mb-3 text-2xl md:text-3xl lg:text-4xl">
                Design
              </h3>
              <ul className="text-xl list-disc">
                <li>Css3</li>
                <li>ChakraUi</li>
                <li>Tailwind</li>
                <li>Shadcn/ui</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Divider />
      <div>
        <h1 className="text-center underline underline-offset-2 md:underline-offset-4 decoration-slate-700 decoration-2 md:decoration-4 font-semibold mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Mes projets
        </h1>
      </div>
    </div>
  );
}
