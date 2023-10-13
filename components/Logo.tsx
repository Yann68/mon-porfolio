'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import LogoSite from '@/public/logo-lion.png';

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push('/')}
      alt="logo"
      src={LogoSite}
      className="cursor-pointer rounded-full"
      priority
      style={{
        height: '40px',
        width: '40px',
      }}
    />
  );
};

export default Logo;
