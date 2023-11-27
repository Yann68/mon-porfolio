'use client';

import { cn } from '@/lib/utils';
import { FaBars } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
interface IconBarProps {
  onClick: () => void;
}

const IconBar = ({ onClick }: IconBarProps) => {
  const pathname = usePathname();
  return (
    <div
      onClick={onClick}
      className={cn(
        'fixed cursor-pointer text-2xl right-7 top-3 sm:hidden hover:opacity-50 z-20 text-secondary dark:text-primary',
        pathname === '/sign-in' ||
          pathname === '/sign-up' ||
          pathname === '/sign-in/factor-one' ||
          pathname === '/sign-up/verify-email-address'
          ? 'text-primary dark:text-primary'
          : ''
      )}>
      <FaBars />
    </div>
  );
};

export default IconBar;
