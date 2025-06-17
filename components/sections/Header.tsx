'use client';
import LogoComponent from '@/components/LogoComponent';
import FreeAccessButton from '@/components/FreeAccessButton';
import NavItem from '@/components/NavItem';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between py-4  container mx-auto">
        <div
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="cursor-pointer"
        >
          <LogoComponent />
        </div>
        <div className="flex items-center gap-8">
          <NavItem href="#features" text="How It Works" />
          <NavItem href="#extraction-methods" text="See It in Action" />
          <NavItem href="#case-studies" text="Case Studies " />
          <NavItem href="#contacts" text="Contacts" />
          <FreeAccessButton />
        </div>
      </div>
    </header>
  );
}
