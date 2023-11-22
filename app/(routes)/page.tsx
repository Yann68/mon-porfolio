'use client';

import Header from '@/components/header/Header';
import Skills from '@/components/skills/Skills';
import Projects from '@/components/projects/Projects';
import ContactHome from '@/components/contact/ContactHomePage';
import Divider from '@/components/Divider';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <ContactHome />
    </div>
  );
}
