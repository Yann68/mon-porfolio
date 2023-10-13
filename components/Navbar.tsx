'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Logo from './Logo';

import ToggleDarkMode from './ToggleDarkMode';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div
      className="
    pt-12
    sm:py-0
    fixed
    w-full
    shadow 
    shadow-slate-950
    dark:shadow-white
    bg-white
    dark:bg-black">
      <div
        className="
      absolute
      top-0
      left-2
      p-1
      sm:hidden">
        <Logo />
      </div>
      <div
        className="
        w-full 
        hidden
        sm:block">
        <div
          className="
      flex
      justify-between
      items-center
      py-1
      px-8
      w-full">
          <Logo />
          <nav className="relative">
            <div
              className="
          absolute
          left-[29%]
          top-1
          h-5
          border-s
          border-slate-950 
          dark:border-white"
            />
            <div
              className="
          absolute
          right-[30%]
          top-1
          h-5
          border-s
          border-slate-950 
          dark:border-white"
            />
            <ul
              className="
          flex
          text-md
          justify-between
          space-x-8 
          font-semibold
        ">
              <li>
                <Link
                  className={`
                  transition 
                  duration-200 
                  ease-in-out 
                  hover:opacity-50 ${
                    pathname === '/'
                      ? 'text-black dark:text-white underline underline-offset-4 font-medium'
                      : ''
                  }`}
                  href={'/'}>
                  Accueil
                </Link>
              </li>

              <li>
                <Link
                  className={`
                  transition 
                  duration-200 
                  ease-in-out 
                  hover:opacity-50 ${
                    pathname === '/about'
                      ? 'text-black dark:text-white underline underline-offset-4 font-medium'
                      : ''
                  }`}
                  href={'/about'}>
                  A propos
                </Link>
              </li>

              <li>
                <Link
                  className={`
                  transition 
                  duration-200 
                  ease-in-out 
                  hover:opacity-50 ${
                    pathname === '/contact'
                      ? 'text-black dark:text-white underline underline-offset-4 font-medium'
                      : ''
                  }`}
                  href={'/contact'}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <ToggleDarkMode />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
