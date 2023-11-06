'use client';

import Image, { StaticImageData } from 'next/image';
import { ThreeScene } from '@/components/ThreeScene';
import { ImageMap } from '@/lib/unsplash';
import { TechIcons } from '@/lib/tech-icons';
import MCSLogo from '@/images/web/mcs-logo.svg';
import MCSScreenshot from '@/images/web/mcs-desktop.png';

const Container = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="container mx-auto flex flex-col gap-8 items-center justify-center py-16">
      {children}
    </div>
  );
};

const H2 = ({ children }: React.PropsWithChildren) => {
  return (
    <h2 className="text-2xl bg-yellow-400 px-3 py-2 font-mono font w-fit">
      {children}
    </h2>
  );
};

type Img = {
  src: StaticImageData;
  alt: string;
};

const ImageGrid = ({ cols = 3, images }: { cols?: number; images: Img[] }) => {
  // Place each next images into a grid of cols, each image being placed into the next available column
  const columns: Img[][] = new Array(cols).fill([]);
  images.forEach((img, i) => {
    columns[i % cols] = [...columns[i % cols], img];
  });
  return (
    <div className="grid grid-cols-3 grid-rows-1 gap-4 items-start">
      {columns.map((col, i) => (
        <div key={i} className="grid gap-4">
          {col.map((img, j) => (
            <Image
              src={img.src}
              alt={img.alt}
              className="rounded-md shadow-md hover:scale-[1.01] transition-transform"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <div className="container mx-auto grid grid-cols-[auto_1fr]">
        <div className="h-full max-w-xl py-24 flex flex-col justify-center">
          <header className="text-4xl bg-yellow-400 px-3 py-2 font-mono -rotate-3 w-fit -translate-y-8">
            McNeil Web
          </header>

          <h1 className="text-4xl bg-stone-800 text-yellow-400 px-3 py-2 font-mono w-fit">
            Jonathan McNeil
          </h1>

          <p className="text-xl bg-stone-100 px-3 py-2 mt-4 leading-relaxed">
            Multi-faceted companies require multi-faceted talent. My expertise
            is creating beautiful, functional, and engaging experiences together
            with a team.
          </p>

          <p className="text-xl bg-stone-100 px-3 py-2 mt-4 leading-relaxed">
            I&apos;m a master in 3D, Web, and Video with an amplitude of
            experience in marketing, design, and business development.
          </p>
        </div>
        <ThreeScene />
      </div>

      <Container>
        <H2>Experienced and Skilled In</H2>

        <div className="flex flex-wrap items-center justify-start gap-8">
          {TechIcons.map((icon) => {
            return (
              <div className="flex flex-col items-center justify-center group relative overflow-clip hover:overflow-visible">
                <h3 className="none group-hover:block transition-all text-center absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[105%] w-fit bg-stone-50 p-2 rounded-md z-10 opacity-0 group-hover:opacity-100">
                  {icon.name}
                </h3>
                <Image
                  width={64}
                  src={icon.src}
                  alt={icon.name}
                  className="group-hover:scale-105 transition-transform"
                />
              </div>
            );
          })}
        </div>
      </Container>

      <Container>
        <H2>3D Design and VDC</H2>
        <ImageGrid images={ImageMap} />
      </Container>

      <Container>
        <div className="max-w-lg flex flex-col gap-4">
          <H2>Web Services</H2>
          <p className="text-xl bg-stone-50 px-3 py-2">
            I make tools that work they way you need them to, and I make them
            look their best. It's that simple.
          </p>
        </div>
      </Container>
    </main>
  );
}
