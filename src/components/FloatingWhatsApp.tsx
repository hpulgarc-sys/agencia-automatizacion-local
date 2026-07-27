"use client";

import { MessageSquare } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/56997913248";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center"
      aria-label="Hablar por WhatsApp"
    >
      
      {/* Tooltip Label */}
      <span className="hidden sm:inline-block bg-slate-900 text-white text-xs font-bold px-3 py-2 rounded-xl mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md border border-slate-800 pointer-events-none select-none">
        ¿Dudas? Escríbenos
      </span>

      {/* Pulsing Ripple Background */}
      <span className="absolute inline-flex h-14 w-14 rounded-full bg-green-400 opacity-75 animate-ping -z-10" />

      {/* Button Body */}
      <div className="h-14 w-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border border-green-400">
        <MessageSquare className="h-6 w-6 text-white shrink-0 fill-current" />
      </div>

    </a>
  );
}
