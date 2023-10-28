'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import LogoSite from '@/public/logo-lion.png';

const Logo = () => {
  const router = useRouter();
  return (
    <div className="w-8 h-8 sm:w-11 sm:h-11">
      <Image
        onClick={() => router.push('/')}
        alt="logo"
        src={LogoSite}
        className="
      cursor-pointer 
      rounded-full"
        priority
        style={{
          height: '100%',
          width: '100%',
        }}
      />
    </div>
  );
};

export default Logo;
