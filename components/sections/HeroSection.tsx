import { Input } from '@/components/ui/input';
import FreeAccessButton from '@/components/FreeAccessButton';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden py-20  scroll-mt-24"
      style={{
        backgroundImage: `url('/images/backgrounds/hero-bg.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        scrollMarginTop: '120px',
      }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Effortlessly Transform Unstructured Data into Insights
            </h1>
            <p className="text-lg text-slate-700">
              Automate data extraction, streamline workflows, and power AI-driven decisions —
              without complex setups
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Input type="email" placeholder="Email" className="max-w-md" />
              <FreeAccessButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
