"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageSquare, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = "https://wa.me/56997913248?text=Hola,%20me%20interesa%20digitalizar%20mi%20negocio.";

  const navLinks = [
    { name: "Servicios", href: "#servicios" },
    { name: "Demos en Vivo", href: "#demos" },
    { name: "Cotizar", href: "#cotizar" },
  ];

  return (
    <header className="sticky top-0 z-50 glass-morphic w-full transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center hover:opacity-90 transition-opacity">
            <Image
              src="/logo.png"
              alt="Agencia de Software & Automatización Local"
              width={150}
              height={80}
              className="h-8 sm:h-10 w-auto"
              priority
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-slate-900 text-white hover:bg-slate-800 text-sm font-medium px-4 py-2 rounded-full border border-slate-700 hover:border-slate-600 transition-all shadow-sm group"
            >
              <MessageSquare className="h-4 w-4 text-green-400 group-hover:scale-110 transition-transform" />
              <span>WhatsApp</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md px-4 pt-4 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center space-x-2 bg-slate-900 text-white py-3 px-4 rounded-xl border border-slate-700 text-base font-medium transition-all"
            >
              <MessageSquare className="h-5 w-5 text-green-400" />
              <span>Hablar por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
