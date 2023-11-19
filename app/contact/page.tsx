'use client';
import ContactPage from '@/components/contact/ContactPage';
import FormContact from '@/components/contact/FormContact';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
const Contact = () => {
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
      className="w-full flex flex-col-reverse justify-center md:flex-row md:justify-evenly px-5 pb-5">
      <div className="flex justify-center">
        <div className="w-[400px] shadow dark:shadow-primary rounded-md text-secondary dark:text-primary bg-slate-900 p-5">
          <FormContact />
        </div>
      </div>
      <ContactPage />
    </div>
  );
};

export default Contact;
