'use client';
import LogoComponent from '@/components/LogoComponent';
import FreeAccessButton from '@/components/FreeAccessButton';
import NavItem from '@/components/NavItem';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

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
        <div className="hidden md:flex items-center gap-6">
          <NavItem href="#features" text="How It Works" />
          <NavItem href="#extraction-methods" text="See It in Action" />
          <NavItem href="#case-studies" text="Case Studies " />
          <NavItem href="#contacts" text="Contacts" />
          <FreeAccessButton />
        </div>

        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle navigation">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md">
          <div className="flex flex-col gap-4">
            <NavItem href="#features" text="How It Works" onClick={closeMenu} />
            <NavItem href="#extraction-methods" text="See It in Action" onClick={closeMenu} />
            <NavItem href="#case-studies" text="Case Studies" onClick={closeMenu} />
            <NavItem href="#contacts" text="Contacts" onClick={closeMenu} />
            <FreeAccessButton />
          </div>
        </div>
      )}
    </header>
  );
}
