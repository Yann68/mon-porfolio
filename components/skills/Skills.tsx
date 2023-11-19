'use client';
import { useRef } from 'react';
import Language from './Language';
import { motion, useInView, useScroll } from 'framer-motion';
const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateX(-100%)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
      }}
      className="relative z-0 flex flex-col w-full">
      <h2 className="text-primary text-center underline underline-offset-2 md:underline-offset-4 decoration-primary decoration-2 md:decoration-[3px] font-semibold mt-3 text-3xl sm:text-4xl md:text-5xl">
        Mes compétences
      </h2>
      <div className="flex justify-evenly flex-col md:flex-row mt-6">
        <motion.div
          ref={ref}
          style={{
            scale: scrollYProgress,
          }}
          className="flex justify-center items-center md:ml-3 ">
          <Language />
        </motion.div>
        <motion.div
          ref={ref}
          style={{
            scale: scrollYProgress,
          }}
          className="md:w-[500px] mt-4 md:mt-8 mx-4 sm:mx-8 flex flex-wrap justify-between">
          <div className="mb-3">
            <h3 className="text-primary relative md:-left-4 underline underline-offset-2 md:underline-offset-3 decoration-primary decoration-1 md:decoration-2 font-semibold mb-3 text-2xl md:text-3xl ">
              Front-end
            </h3>
            <ul className="text-secondary-foreground dark:text-primary-foreground text-base sm:text-lg md:text-xl md:list-disc">
              <li>Html5</li>
              <li>Javascript</li>
              <li>React</li>
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
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
