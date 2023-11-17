'use client';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { FaHouse } from 'react-icons/fa6';
import { FaCircleInfo } from 'react-icons/fa6';
import { FaEnvelope } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

const Footer = () => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  return (
    <div
      className="w-full flex flex-col-reverse sm:flex-row sm:justify-around items-center border-t border-slate-950 dark:border-white bg-primary
    dark:bg-secondary p-5 pt-2">
      <nav className="mt-3 sm:md-0">
        <ul
          className="
          flex
          text-sm 
          sm:text-base 
          md:text-lg
          font-semibold
          flex-col
         space-y-1
          ">
          <li>
            <Link
              className={cn(
                'flex items-center transition duration-200 ease-in-out hover:opacity-80',
                pathname === '/'
                  ? 'text-secondary dark:text-primary'
                  : 'text-secondary-foreground dark:text-primary-foreground'
              )}
              href={'/'}>
              <div className="mr-3">
                <FaHouse />
              </div>
              Accueil
            </Link>
          </li>
          <li>
            <Link
              className={cn(
                'flex items-center transition duration-200 ease-in-out hover:opacity-80',
                pathname === '/about'
                  ? 'text-secondary dark:text-primary'
                  : 'text-secondary-foreground dark:text-primary-foreground'
              )}
              href={'/about'}>
              <div className="mr-3">
                <FaCircleInfo />
              </div>
              A propos
            </Link>
          </li>
          <li>
            <Link
              className={cn(
                'flex items-center transition duration-200 ease-in-out hover:opacity-80',
                pathname === '/contact'
                  ? 'text-secondary dark:text-primary'
                  : 'text-secondary-foreground dark:text-primary-foreground'
              )}
              href={'/contact'}>
              <div className="mr-3">
                <FaEnvelope />
              </div>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <p className="order-first sm:order-none mt-3 sm:md-0 text-secondary-foreground dark:text-primary-foreground text-sm sm:text-base md:text-lg">
        &copy;Copyright {currentYear}
      </p>
      <Logo />
    </div>
  );
};

export default Footer;
