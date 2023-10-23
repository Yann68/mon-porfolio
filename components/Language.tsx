'use client';
import Image from 'next/image';

import LogoNext from '@/public/next.svg';
import LogoReact from '@/public/logo-react.svg';
import LogoJs from '@/public/logo-javascript.svg';
import LogoHtml from '@/public/logo-html.svg';
import LogoCss from '@/public/logo-css.svg';
import LogoNode from '@/public/logo-nodejs.svg';
import LogoGithub from '@/public/logo-github.svg';
import LogoVercel from '@/public/vercel.svg';
import LogoMongoDb from '@/public/logo-mongodb.svg';
import LogoTailwind from '@/public/logo-tailwind.svg';
import LogoChakraUi from '@/public/logo-chakraUi.svg';

// animate-spin-reverse
// animate-[spin_5000ms_linear_infinite]

const Language = () => {
  return (
    <div className="relative w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] rounded-full animate-[spin_5000ms_linear_infinite] ">
      <div className=" absolute top-0 left-0 sm:left-3 sm:top-2 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full m-6">
        <Image
          src={LogoReact}
          alt="Logo-react"
          className="animate-spin-reverse shadow-md dark:shadow-white border border-slate-950 rounded-full "
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
      <div className=" absolute top-0 left-[40%]  w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full m-6]">
        <Image
          src={LogoJs}
          alt="Logo-javascript"
          className="animate-spin-reverse shadow-md dark:shadow-white border border-slate-950 rounded-full"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
      <div className="absolute top-0 right-0 sm:top-2 sm:right-3  w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full m-6">
        <Image
          src={LogoNext}
          alt="Logo-next-js"
          className="p-1 animate-spin-reverse shadow-md dark:shadow-white border border-slate-950 dark:bg-gray-200 rounded-full"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
      <div className="absolute top-[20%] left-[15%] sm:left-[20%] sm:top-[25%] w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full m-6">
        <Image
          src={LogoHtml}
          alt="Logo-html"
          className="animate-spin-reverse shadow-md dark:shadow-white border border-slate-950 rounded-full"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
      <div className=" absolute top-[20%] right-[15%] sm:right-[20%] sm:top-[25%] w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full m-6">
        <Image
          src={LogoCss}
          alt="Logo-css"
          className="animate-spin-reverse shadow-md dark:shadow-white border border-slate-950 rounded-full"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
      <div className=" absolute bottom-[13%] left-[28%] sm:bottom-[19%] sm:left-[32%] w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full m-6">
        <Image
          src={LogoChakraUi}
          alt="Logo-chakraUi"
          className="animate-spin-reverse shadow-md dark:shadow-white border border-slate-950 rounded-full"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
      <div className=" absolute bottom-0 right-0 sm:bottom-4 sm:right-2  w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full m-6">
        <Image
          src={LogoNode}
          alt="Logo-node-js"
          className="p-1 animate-spin-reverse shadow-md dark:shadow-white border border-slate-950 dark:bg-gray-200 rounded-full"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
      <div className="absolute -bottom-6 right-[29%] sm:right-[32%] w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full m-6">
        <Image
          src={LogoGithub}
          alt="Logo-github"
          className="animate-spin-reverse shadow-md dark:shadow-white border border-slate-950 rounded-full"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
      <div className=" absolute bottom-0 left-0 sm:bottom-4 sm:left-2  w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full m-6">
        <Image
          src={LogoVercel}
          alt="Logo-vercel"
          className="p-1 animate-spin-reverse shadow-md dark:shadow-white border border-slate-950 dark:bg-gray-200 rounded-full"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
      <div className=" absolute top-[28%] -left-6 sm:top-[30%] w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full m-6">
        <Image
          src={LogoMongoDb}
          alt="Logo-mongo-db"
          className="animate-spin-reverse shadow-md dark:shadow-white border border-slate-950 rounded-full"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
      <div className=" absolute top-[28%] -right-6 sm:top-[30%] w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full m-6">
        <Image
          src={LogoTailwind}
          alt="Logo-tailwind"
          className="animate-spin-reverse shadow-md dark:shadow-white border border-slate-950 rounded-full"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </div>
  );
};

export default Language;
