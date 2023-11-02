import Image from 'next/image';
import Archimedes from '@/images/archimedes.png';
import { Geo } from '@/components/Geo';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center py-24 px-4">
      <div className="container mx-auto grid grid-cols-12  text-stone-700">
        <div className="col-span-full lg:col-span-8 xl:col-span-4 bg-white/90 backdrop-blur-sm shadow-lg p-8">
          <h1 className="text-4xl font-light tracking-wider">
            Jonathan McNeil
          </h1>
          <p className="text-xl mt-4 leading-relaxed">
            Multi-faceted companies require multi-faceted talent. My expertise
            is creating beautiful, functional, and engaging experiences together
            with a team.
          </p>
          <p className="text-xl mt-4 leading-relaxed">
            I&apos;m a master in 3D, Web, and Video with an amplitude of
            experience in marketing, design, and business development.
          </p>
        </div>
      </div>
      <Geo />
    </main>
  );
}
