import { TechIcons } from '@/lib/tech-icons';
import { StaticImageData } from 'next/image';

interface WebProject {
  title: string;
  description: string;
  tech: { name: string; src: StaticImageData }[];
  url: string;
  image: string;
}

export const McNeilCustomStone: WebProject = {
  title: 'McNeil Custom Stone',
  description:
    'A website for a local stone countertop company. This website was built using Next.js, TailwindCSS, and Firebase.',
  tech: TechIcons.filter((icon) =>
    ['Next.js', 'Tailwind CSS', 'Firebase'].includes(icon.name)
  ),
  url: 'https://mcneilcustomstone.com',
  image: '/images/mcneil-custom-stone.png'
};

export const WebProjects: WebProject[] = [McNeilCustomStone];
