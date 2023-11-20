'use client';

import { FaBars } from 'react-icons/fa6';

interface IconBarProps {
  onClick: () => void;
}

const IconBar = ({ onClick }: IconBarProps) => {
  return (
    <div
      onClick={onClick}
      className="
     fixed
      cursor-pointer
      text-2xl
      right-7
      top-3
      sm:hidden
      hover:opacity-50
      z-20
      text-secondary
      dark:text-primary">
      <FaBars />
    </div>
  );
};

export default IconBar;
