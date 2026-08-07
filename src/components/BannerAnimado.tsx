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
    <section className="relative overflow-hidden my-16 mx-4 sm:mx-6 lg:mx-8 max-w-7xl lg:mx-auto rounded-3xl border border-slate-200 bg-[#f8fafc] shadow-xl flex flex-col md:flex-row min-h-[460px] md:h-[460px]">
      
      {/* Light side (Left Column) */}
      <div className="w-full md:w-[50%] flex flex-col justify-between p-6 sm:p-8 md:p-12 pb-14 md:pb-16 z-10 items-center text-center">
        {/* Logo */}
        <div className="w-full flex justify-center md:justify-start pb-4">
          <Image
            src="/logo.png"
            alt="Frames Logo"
            width={110}
            height={36}
            className="h-8 w-auto object-contain"
            priority
          />
        </div>

        {/* Text area centered */}
        <div className="flex flex-col items-center justify-center flex-grow space-y-4 md:max-w-[85%]">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.22em] block">
              SOMOS
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-500 leading-none tracking-wider uppercase">
              TU SOCIO EN
            </h2>
            <h1 className="text-2xl sm:text-3xl md:text-3.5xl font-black text-[#002d59] leading-tight tracking-tight uppercase">
              AUTOMATIZACIÓN LOCAL
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-4.5xl font-black text-slate-700 leading-none tracking-tight uppercase">
              DESARROLLO <span className="text-[#003466]">WEB</span>
            </h2>
          </div>

          {/* Subtitles centered */}
          <div className="space-y-1 py-1 text-center">
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

          {/* Custom CTA Button centered */}
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 group transition-transform duration-200 active:scale-95"
            >
              <div className="flex items-center justify-center h-11 w-11 rounded-full bg-[#00cc44] text-white shadow-md group-hover:bg-[#00b33c] transition-colors duration-200 shrink-0">
                <ArrowRight className="h-5 w-5" />
              </div>
              <div className="bg-[#003466] hover:bg-[#00254d] text-white font-extrabold text-xs tracking-widest px-7 py-3.5 rounded-full shadow-md transition-colors duration-200 uppercase">
                SOLICITAR DEMO
              </div>
            </a>
          </div>
        </div>

        {/* Footer text (Hidden on mobile inside column, positioned absolutely below) */}
        <div className="h-2 hidden md:block" />
      </div>

      {/* Blue side (Right Column) */}
      <div className="w-full md:w-[50%] bg-[#002a5c] text-white flex flex-col justify-center items-center p-8 md:p-12 md:pl-20 z-10 md:absolute md:right-0 md:top-0 md:h-full md:rounded-l-[220px] lg:rounded-l-[260px] md:border-l-8 md:border-[#00cc44] relative overflow-hidden text-center">
        
        {/* Soft overlay lines on blue */}
        <div className="absolute inset-0 bg-[url('/banner.svg')] bg-cover bg-center opacity-[0.04] pointer-events-none" />

        <div className="relative z-10 space-y-6 flex flex-col items-center">
          <div className="space-y-0.5">
            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest block">
              NUESTRAS
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#00cc44] tracking-wide uppercase">
              SOLUCIONES
            </h3>
          </div>

          <ul className="text-left space-y-3 max-w-[280px]">
            {solutions.map((sol, index) => (
              <li key={index} className="flex items-start space-x-3 text-xs sm:text-sm font-medium">
                <div className="h-2 w-2 rounded-full bg-[#00cc44] mt-1.5 shrink-0" />
                <span>{sol}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Floating Center Man - Perfectly Centered on Desktop (left-1/2) with no float animation */}
      <div className="relative md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:h-[96%] w-full md:w-auto z-20 flex justify-center items-end pointer-events-none select-none overflow-hidden md:overflow-visible h-[260px] sm:h-[320px] md:h-[96%]">
        <Image
          src="/man-laptop-cutout.png"
          alt="Socio en Automatización Local"
          width={400}
          height={400}
          className="object-contain h-full w-auto max-h-full"
          priority
        />
      </div>

      {/* Centered Footer Text - Restored to original centered bottom layout */}
      <div className="absolute bottom-4 left-0 right-0 text-center px-4 z-30 hidden md:block pointer-events-none">
        <p className="text-[9px] text-slate-400 font-semibold leading-relaxed tracking-wide max-w-[70%] mx-auto">
          Transformamos Pymes locales en la Región de O&apos;Higgins con tecnología moderna, de hardware preconfigurados y puesta en marcha presencial a domicilio.
        </p>
      </div>

      {/* Mobile-only footer text */}
      <div className="block md:hidden bg-slate-50 border-t border-slate-100 p-5 text-center z-10">
        <p className="text-[9px] text-slate-500 font-semibold leading-relaxed">
          Transformamos Pymes locales en la Región de O&apos;Higgins con tecnología moderna, de hardware preconfigurados y puesta en marcha presencial a domicilio.
        </p>
      </div>

    </section>
  );
}
