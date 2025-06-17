'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CaseCard from '@/components/CaseCard';
import { caseStudies } from '@/constants/cases';

export default function CaseStudies() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    scrollToIndex(1);
  }, []);

  const scrollBy = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;

    const newIndex =
      dir === 'left'
        ? Math.max(activeIndex - 1, 0)
        : Math.min(activeIndex + 1, caseStudies.length - 1);

    const target = scrollRef.current.children[newIndex] as HTMLElement;

    if (target) {
      const container = scrollRef.current;
      const scrollLeft = target.offsetLeft - (container.clientWidth - target.clientWidth) / 2;
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      setActiveIndex(newIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;

    const target = scrollRef.current.children[index] as HTMLElement;

    if (target) {
      const container = scrollRef.current;
      const scrollLeft = target.offsetLeft - (container.clientWidth - target.clientWidth) / 2;
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      setActiveIndex(index);
    }
  };

  return (
    <section
      id="case-studies"
      className="py-20 scroll-mt-16"
      style={{
        backgroundImage: `url('/images/backgrounds/cases-bg.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundSize: 'cover',
      }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-green-700 bg-clip-text text-transparent">
            Our Case Studies
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth gap-6 scrollbar-hide pb-2 px-2"
          >
            {caseStudies.map((card, index) => (
              <div key={index} className="snap-center shrink-0">
                <CaseCard card={card} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 w-full md:w-[54%]">
          {/* Arrow buttons */}
          <div className="flex gap-2">
            <Button
              variant="default"
              size="icon"
              className="rounded-full bg-black hover:bg-slate-400"
              onClick={() => scrollBy('left')}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="default"
              size="icon"
              className="rounded-full bg-black hover:bg-slate-400"
              onClick={() => scrollBy('right')}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex gap-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeIndex === index
                    ? 'bg-emerald-500 scale-110'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
