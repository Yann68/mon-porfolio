'use client';
import { useRef } from 'react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { useInView } from 'framer-motion';
const ContactHome = () => {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateX(-100%)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
      }}
      className="my-3 px-5 flex flex-col items-center">
      <div>
        <h3 className="font-semibold text-primary text-2xl md:text-3xl">
          Vous souhaitez me contacter ?
        </h3>
        <p className="text-secondary-foreground dark:text-primary-foreground py-2 text-sm sm:text-base md:text-lg">
          Pour toutes informations complémentaires,
          <br /> vous pouvez me contacter en remplissant le formulaire
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
  );
};

export default ContactHome;
