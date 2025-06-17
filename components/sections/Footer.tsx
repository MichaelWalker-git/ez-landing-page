import LogoComponent from '@/components/LogoComponent';

export default function Footer() {
  return (
    <section className="px-8 py-8 container mx-auto">
      <div className="flex items-center justify-between gap-4 font-semibold">
        <LogoComponent />
        <div>Copyright © {new Date().getFullYear()} Extend</div>
      </div>
    </section>
  );
}
