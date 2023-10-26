'use client';
import { useRouter } from 'next/navigation';

import { StaticImageData } from 'next/image';
import LogoGithub from '@/public/logo-github.png';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import Divider from './Divider';

interface CardProjectsProps {
  title: string;
  description: string;
  image: StaticImageData;
  githubLink: string;
  link: string;
}

const CardProjects = ({
  title,
  description,
  image,
  githubLink,
  link,
}: CardProjectsProps) => {
  const router = useRouter();
  return (
    <Card className="bg-slate-200 dark:bg-dark-bg shadow-md">
      <CardHeader className=" pt-2 sm:min-h-[150px]">
        <CardTitle className="dark:text-gray-400 pb-2 font-bold">
          {title}
        </CardTitle>
        <Divider />
        <CardDescription className="text-gray-600 dark:text-gray-500 sm:text-base">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-3 shadow-md">
        <Image
          src={image}
          alt="kasaImage"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </CardContent>

      <CardFooter className="flex flex-col pb-2">
        <Divider />
        <div
          className={`w-full flex items-center mt-3 pb-0 ${
            !link ? 'flex justify-end' : 'flex justify-between'
          }`}>
          {link && (
            <Button
              className={`cursor-pointer h-9 w-[150px] ${
                !githubLink && 'sm:mt-2'
              }`}
              onClick={() => router.push(link)}>
              Voir site
            </Button>
          )}
          {githubLink && (
            <div
              onClick={() => router.push(githubLink)}
              className="flex flex-col items-center cursor-pointer hover:opacity-70">
              <Image
                src={LogoGithub}
                alt="logo-github"
                style={{
                  width: '35px',
                  height: '35px',
                }}
                className="bg-black rounded-full border border-black"
              />
              <p className="font-semibold">Github</p>
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardProjects;
