"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function BannerAnimado() {
  const whatsappUrl = "https://wa.me/56997913248?text=Hola,%20me%20interesa%20solicitar%20una%20demo%20presencial%20en%20mi%20local.";

  const solutions = [
    "Desarrollo Web & PWA (Súper rápidas)",
    "Agendamiento Online Inteligente (Reservas 24/7)",
    "Automatización de Procesos",
    "Menú Digital & Comanda KDS",
    "Kits Llave en Mano (Software + Hardware)",
  ];

  return (
    <section className="relative overflow-hidden my-16 mx-4 sm:mx-6 lg:mx-8 max-w-7xl lg:mx-auto rounded-3xl border border-slate-200 bg-white shadow-xl flex flex-col md:flex-row min-h-[460px] md:h-[460px]">
      
      {/* Light side (Left Column) */}
      <div className="w-full md:w-[58%] flex flex-col justify-between p-6 sm:p-8 md:p-12 z-10">
        {/* Logo */}
        <div className="pb-6">
          <Image
            src="/logo.png"
            alt="Frames Logo"
            width={120}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </div>

        {/* Text area */}
        <div className="space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] block">
              SOMOS
            </span>
            <h2 className="text-lg sm:text-xl font-extrabold text-[#002d59] leading-none tracking-wide">
              TU SOCIO EN
            </h2>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0f2d4a] leading-tight tracking-tight uppercase">
              AUTOMATIZACIÓN <br className="hidden sm:inline" />
              LOCAL
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-700 leading-none tracking-tight uppercase">
              DESARROLLO <br className="hidden sm:inline" />
              <span className="text-[#003466]">WEB</span>
            </h2>
          </div>

          {/* Subtitles with small green decorator */}
          <div className="space-y-1.5 pt-2 border-l-2 border-[#00cc44] pl-3">
            <p className="text-[10px] font-bold text-[#002d59] tracking-wider uppercase">
              DIGITALIZAMOS TUS PROCESOS
            </p>
            <p className="text-[10px] font-bold text-[#002d59] tracking-wider uppercase">
              ELIMINAMOS EL PAPEL
            </p>
            <p className="text-[10px] font-bold text-[#002d59] tracking-wider uppercase">
              MÁS TIEMPO PARA CRECER
            </p>
          </div>

          {/* Custom CTA Button */}
          <div className="pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 group"
            >
              <div className="flex items-center justify-center h-11 w-11 rounded-full bg-[#00cc44] text-white shadow-md group-hover:scale-110 transition-transform duration-300 shrink-0">
                <ArrowRight className="h-5 w-5" />
              </div>
              <div className="bg-[#003466] hover:bg-[#00264d] text-white font-extrabold text-xs tracking-widest px-7 py-3.5 rounded-full shadow-md transition-colors duration-300 uppercase">
                SOLICITAR DEMO
              </div>
            </a>
          </div>
        </div>

        {/* Footer text (only on desktop it sits bottom-left; on mobile it falls under) */}
        <div className="hidden md:block pt-6 max-w-[70%]">
          <p className="text-[9px] text-slate-500 font-semibold leading-relaxed italic">
            Transformamos Pymes locales en la Región de O&apos;Higgins con tecnología moderna, kits de hardware preconfigurados y puesta en marcha presencial a domicilio.
          </p>
        </div>
      </div>

      {/* Blue side (Right Column) */}
      <div className="w-full md:w-[48%] bg-[#002a5c] text-white flex flex-col justify-center p-8 md:p-12 md:pl-20 z-10 md:absolute md:right-0 md:top-0 md:h-full md:rounded-l-[220px] lg:rounded-l-[280px] md:border-l-8 md:border-[#00cc44] relative overflow-hidden">
        
        {/* Soft overlay lines on blue */}
        <div className="absolute inset-0 bg-[url('/banner.svg')] bg-cover bg-center opacity-[0.05] pointer-events-none" />

        <div className="relative z-10 space-y-5">
          <div className="space-y-0.5">
            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest block">
              NUESTRAS
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#00cc44] tracking-wide uppercase">
              SOLUCIONES
            </h3>
          </div>

          <ul className="space-y-3">
            {solutions.map((sol, index) => (
              <li key={index} className="flex items-start space-x-3 text-xs sm:text-sm font-medium">
                <div className="h-2 w-2 rounded-full bg-[#00cc44] mt-1.5 shrink-0" />
                <span>{sol}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Floating Center Man (positioned absolutely on desktop; shown in-between columns on mobile) */}
      <div className="relative md:absolute md:bottom-0 md:left-[51%] md:-translate-x-1/2 md:h-[105%] w-full md:w-auto z-20 flex justify-center items-end pointer-events-none select-none overflow-hidden md:overflow-visible h-[280px] sm:h-[340px] md:h-[105%]">
        <Image
          src="/man-laptop-cutout.png"
          alt="Socio en Automatización Local"
          width={400}
          height={400}
          className="object-contain h-full w-auto max-h-full animate-float"
          priority
        />
      </div>

      {/* Mobile-only footer text */}
      <div className="block md:hidden bg-slate-50 border-t border-slate-100 p-6 text-center z-10">
        <p className="text-[10px] text-slate-500 font-semibold leading-relaxed">
          Transformamos Pymes locales en la Región de O&apos;Higgins con tecnología moderna, kits de hardware preconfigurados y puesta en marcha presencial a domicilio.
        </p>
      </div>

    </section>
  );
}
