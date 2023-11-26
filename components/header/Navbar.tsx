'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';
import Logo from '../Logo';
import ToggleDarkMode from '../ToggleDarkMode';
import { cn } from '@/lib/utils';
import { useAuth } from '@clerk/nextjs';

const Navbar = () => {
  const pathname = usePathname();
  const { userId } = useAuth();

  return (
    <header
      className={cn(
        'pt-12 sm:py-0 fixed w-full shadow shadow-primary dark:shadow-primary bg-primary dark:bg-secondary opacity-95 z-10',
        pathname === '/sign-in' ||
          pathname === '/sign-up' ||
          pathname === '/sign-in/factor-one' ||
          pathname === '/sign-up/verify-email-address'
          ? 'hidden'
          : ''
      )}>
      <div
        className="
      absolute
      top-1
      left-7
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
      px-4
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
          border-secondary 
          dark:border-primary"
            />
            <div
              className="
          absolute
          right-[30%]
          top-1
          h-5
          border-s
          border-secondary  
          dark:border-primary"
            />
            <ul
              className="
          text-secondary-foreground
          dark:text-primary-foreground
          flex
          text-md
          justify-between
          space-x-8 
          font-semibold
        ">
              <li>
                <Link
                  className={cn(
                    'transition duration-200 ease-in-out hover:opacity-80',
                    pathname === '/'
                      ? 'text-secondary dark:text-primary underline underline-offset-4 font-medium'
                      : ''
                  )}
                  href={'/'}>
                  Accueil
                </Link>
              </li>

              <li>
                <Link
                  className={cn(
                    'transition duration-200 ease-in-out hover:opacity-80',
                    pathname === '/about'
                      ? 'text-secondary dark:text-primary underline underline-offset-4 font-medium'
                      : ''
                  )}
                  href={'/about'}>
                  A propos
                </Link>
              </li>

              <li>
                <Link
                  className={cn(
                    'transition duration-200 ease-in-out hover:opacity-80',
                    pathname === '/contact'
                      ? 'text-secondary dark:text-primary underline underline-offset-4 font-medium'
                      : ''
                  )}
                  href={'/contact'}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center justify-between space-x-4">
            {!userId && (
              <Link
                className={cn(
                  'text-secondary-foreground dark:text-primary-foreground transition duration-200 ease-in-out hover:opacity-80',
                  pathname === '/sign-in' || pathname === '/sign-up'
                    ? 'text-secondary dark:text-primary underline underline-offset-4 font-medium'
                    : ''
                )}
                href="sign-in">
                Connexion
              </Link>
            )}
            <ToggleDarkMode />
            {userId && <UserButton afterSignOutUrl="/" />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
