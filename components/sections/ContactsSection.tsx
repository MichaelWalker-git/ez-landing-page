import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ContactsSection() {
  return (
    <section id="contacts" className="py-20 px-2 scroll-mt-16">
      <div className="container mx-auto">
        <div className="bg-emerald-600 rounded-3xl p-8 md:p-16 text-center text-white">
          <h3 className="text-2xl md:text-2xl sm:text-2xl font-bold mb-4">
            Get Free Access to EzPaperwork
          </h3>
          <p className="text-md mb-1 max-w-2xl mx-auto">
            Unlock a free trial of EzPaperwork and explore its key features.
          </p>
          <p className="text-md mb-8 max-w-2xl mx-auto">
            Simply enter your name and email, and we'll send you access details right away!
          </p>

          <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
            <Input type="text" placeholder="Name" className="bg-white text-slate-900 border-0" />
            <Input type="email" placeholder="Email" className="bg-white text-slate-900 border-0" />
            <Button className="bg-slate-800 hover:bg-slate-700 text-white">Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
