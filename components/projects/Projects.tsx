import { DataProjects } from '@/data/data';
import CardProjects from './CardProjects';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div>
      <h2
        ref={ref}
        style={{
          transform: isInView ? 'none' : 'translateX(-100%)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
        }}
        className="text-primary text-center underline underline-offset-2 md:underline-offset-4 decoration-primary decoration-2 md:decoration-[3px] font-semibold mt-3 text-3xl sm:text-4xl md:text-5xl">
        Mes projets
      </h2>
      <div className="mt-4 md:mt-10 p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {DataProjects.map((project) => (
          <CardProjects
            key={project.title}
            {...project}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
