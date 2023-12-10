'use client';

import LogoGithub from '@/public/logo-github.png';
import { FaHeart } from 'react-icons/fa6';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';
import Divider from '../Divider';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';

interface CardProjectsProps {
  title: string;
  description: string;
  picture: string;
  githubLink: string;
  link: string;
}

const CardProjects = ({
  title,
  description,
  picture,
  githubLink,
  link,
}: CardProjectsProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scrollYProgress,
      }}>
      <Card className="shadow-sm shadow-primary dark:shadow-primary">
        <CardContent className="p-2">
          <Image
            className="rounded-sm shadow-sm dark:shadow-primary"
            src={picture}
            alt={title}
            width={0}
            height={0}
            sizes="auto"
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </CardContent>
        <CardHeader className="pt-2 pb-0 sm:min-h-[125px]">
          <CardTitle className="pb-2 font-bold">{title}</CardTitle>
          <Divider />
          <CardDescription className="font-semibold text-secondary-foreground dark:text-primary-foreground max-w-[250px] sm:text-base">
            {description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-col pb-4">
          <Divider />
          <div
            className={cn(
              'w-full flex items-center mt-3 pb-0',
              !link ? 'flex justify-end mt-4 md:mt-3' : 'flex justify-between',
              !githubLink && ' md:mt-4 md:mb-2'
            )}>
            {link && (
              <Button
                className={cn(
                  'cursor-pointer h-8 w-[150px] md:h-10',
                  !githubLink && 'sm:mt-2'
                )}>
                <Link
                  target="_blank"
                  href={link}>
                  Voir le site
                </Link>
              </Button>
            )}
            {githubLink && (
              <Link
                href={githubLink}
                target="_blank"
                className="flex flex-col items-center cursor-pointer hover:opacity-70">
                <Image
                  src={LogoGithub}
                  alt="logo-github"
                  priority
                  style={{
                    width: '35px',
                    height: '35px',
                  }}
                  className="bg-black rounded-full border border-black"
                />
                <p className="text-secondary-foreground hidden md:block font-semibold">
                  Github
                </p>
              </Link>
            )}
          </div>
          <div className="mt-2 w-full flex justify-start items-center">
            <div
              className={cn(
                'cursor-pointer text-2xl text-secondary-foreground dark:text-primary-foreground'
              )}>
              <FaHeart />
            </div>

            <p className="ml-3">j&apos;aimes</p>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CardProjects;
