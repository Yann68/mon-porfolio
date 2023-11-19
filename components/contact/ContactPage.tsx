'use client';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ContactPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateX(100%)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
      }}
      className="md:max-w-[400px] md:mx-5 rounded p-3 pt-0">
      <h2 className="text-primary mb-3 font-semibold mt-3 text-3xl sm:text-4xl">
        Contactez-moi pour discuter de projets !
      </h2>
      <p className="text-secondary-foreground dark:text-primary-foreground text-sm sm:text-base md:text-lg">
        Cher visiteur, Je suis ravi de votre intérêt pour mon portfolio de
        développeur web. Si vous avez des projets passionnants, des idées
        innovantes ou si vous souhaitez discuter de collaborations potentielles,
        n&apos;hésitez pas à me laisser vos coordonnées ainsi qu&apos;un message
        expliquant vos besoin. Je suis là pour vous répondre rapidement.
      </p>
      <p className="py-2 font-bold text-secondary-foreground dark:text-primary-foreground text-sm sm:text-base md:text-lg">
        Merci d&apos;avoir visiter mon portfolio. J&apos;attends avec impatience
        la possibilité de discuter de vos projets.
      </p>
    </div>
  );
};

export default ContactPage;
