'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../Logo';
import IconBar from './IconBar';
import { FaXmark } from 'react-icons/fa6';
import { FaHouse } from 'react-icons/fa6';
import { FaCircleInfo } from 'react-icons/fa6';
import { FaEnvelope } from 'react-icons/fa6';

import ToggleDarkMode from '../ToggleDarkMode';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (!open || window.innerWidth > 640) {
        document.body.style.overflow = 'auto';
        setOpen(false);
      } else {
        document.body.style.overflow = 'hidden';
      }
    };
    // Appeler la fonction de gestion du défilement lorsque la page charge
    handleScroll();

    // Attacher le gestionnaire d'événements de redimensionnement de la fenêtre
    window.addEventListener('resize', handleScroll);

    // Nettoyer le gestionnaire d'événements lorsque le composant est démonté
    return () => {
      window.removeEventListener('resize', handleScroll);
    };
  }, [open]); // Assurez-vous que la dépendance est vide pour n'exécuter qu'une fois au chargement

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconBar onClick={handleOpen} />
      <div
        onClick={handleOpen}
        className={cn(
          open && 'sm:hidden w-full h-full fixed bg-black opacity-70 z-20'
        )}
      />
      <div
        className={cn(
          'sm:hidden transition duration-500 ease-in-out w-52 pb-3 h-full fixed dark:bg-secondary bg-primary border-r border-white border-e flex flex-col items-center pt-3 z-30',
          open ? 'translate-x-0' : '-translate-x-[210px]'
        )}>
        <div className="w-full ps-4">
          <Logo />
        </div>
        <div
          onClick={handleOpen}
          className="
          absolute
          right-4
          top-3
          text-xl
          cursor-pointer
          text-secondary
          dark:text-primary">
          <FaXmark />
        </div>
        <nav className="h-full">
          <ul
            className="
          flex
          text-md
          font-semibold
          flex-col
          pt-6
          space-y-5
          w-[150px]">
            <li>
              <Link
                onClick={handleOpen}
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
                onClick={() => setOpen(false)}
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
                onClick={() => setOpen(false)}
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
        <ToggleDarkMode />
      </div>
    </>
  );
};

export default Sidebar;
