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
    <Card className="">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-2">
        <Image
          src={image}
          alt="kasaImage"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </CardContent>
      <CardFooter className="flex flex-col">
        {githubLink && (
          <Image
            src={LogoGithub}
            alt="logo-github"
            style={{
              width: '35px',
              height: '35px',
            }}
            className="cursor-pointer bg-black rounded-full border border-black"
            onClick={() => router.push(githubLink)}
          />
        )}

        <p
          className="cursor-pointer"
          onClick={() => router.push(link)}>
          {link}
        </p>
      </CardFooter>
    </Card>
  );
};

export default CardProjects;
