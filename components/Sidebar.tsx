'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import ToggleDarkMode from './ToggleDarkMode';
import IconBar from './IconBar';
import { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconBar onClick={handleOpen} />
      <div
        onClick={handleOpen}
        className={`${
          open && 'sm:hidden w-full h-full absolute bg-black opacity-50 z-20'
        } `}
      />
      <div
        className={`sm:hidden transition duration-500 ease-in-out w-52 pb-3 h-full absolute  dark:bg-black bg-slate-950 border-r border-white border-e flex flex-col items-center pt-3 z-30 ${
          open ? 'translate-x-0' : '-translate-x-[210px]'
        }`}>
        <Logo />
        <div
          onClick={handleOpen}
          className="absolute right-4 top-3 text-xl cursor-pointer">
          <FaXmark />
        </div>
        <nav className="h-full">
          <ul className="flex text-md font-semibold flex-col pt-6 space-y-5">
            <li>
              <Link
                onClick={handleOpen}
                className={` transition duration-200 ease-in-out hover:opacity-50 ${
                  pathname === '/' ? 'text-white' : ''
                }`}
                href={'/'}>
                Accueil
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpen(false)}
                className={` transition duration-200 ease-in-out hover:opacity-50 ${
                  pathname === '/about' ? 'text-white' : ''
                }`}
                href={'/about'}>
                A propos
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpen(false)}
                className={` transition duration-200 ease-in-out hover:opacity-50 ${
                  pathname === '/contact' ? 'text-white' : ''
                }`}
                href={'/contact'}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <ToggleDarkMode />
      </div>
    </>
  );
};

export default Sidebar;
