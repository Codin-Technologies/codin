import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { Services } from '@/components/sections/Services';
import { BornAndRaise } from '@/components/sections/BornAndRaise';
import { CTA } from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <BornAndRaise />
      <CTA />
    </>
  );
}
