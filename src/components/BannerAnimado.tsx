"use client";

import Image from "next/image";
import { Zap, CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";

export default function BannerAnimado() {
  const whatsappUrl = "https://wa.me/56997913248?text=Hola,%20me%20interesa%20solicitar%20una%20demo%20presencial%20en%20mi%20local.";

  const solutions = [
    "Desarrollo Web & PWA de Alto Rendimiento",
    "Agendamiento Online Inteligente (24/7)",
    "Notificaciones Automáticas por WhatsApp",
    "Menú Digital QR + Comanda KDS Cocina",
    "Kits Llave en Mano (Tablet Modo Kiosco)",
  ];

  return (
    <section className="relative overflow-hidden my-16 mx-4 sm:mx-6 lg:mx-8 max-w-7xl lg:mx-auto rounded-3xl border border-slate-200/80 bg-white/40 shadow-xl backdrop-blur-md">
      
      {/* SVG Background Layer */}
      <div className="absolute inset-0 -z-10 opacity-[0.08] pointer-events-none select-none">
        <Image
          src="/banner.svg"
          alt="Banner background grid"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Decorative Blur Ambient Lights */}
      <div className="absolute top-[-30%] right-[-10%] w-[300px] h-[300px] rounded-full bg-slate-200/30 blur-[60px] pointer-events-none -z-10 animate-glow" />
      <div className="absolute bottom-[-20%] left-[-5%] w-[250px] h-[250px] rounded-full bg-slate-100/40 blur-[50px] pointer-events-none -z-10" />

      {/* Content Container */}
      <div className="px-6 py-12 sm:px-12 sm:py-16 lg:py-20 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Heading and CTAs */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
          
          <div className="inline-flex items-center space-x-1.5 bg-slate-900 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
            <Zap className="h-3 w-3 text-green-400 fill-current animate-pulse" />
            <span>Digitalización Local</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Lleva tu negocio al siguiente nivel con{" "}
            <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 bg-clip-text text-transparent">
              automatización inteligente
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
            Implementamos sistemas modernos a medida en la Región de O&apos;Higgins. Olvídate del papeleo, las comisiones abusivas y los procesos manuales ineficientes.
          </p>

          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-slate-950 hover:bg-slate-900 text-white text-sm font-bold px-6 py-3.5 rounded-xl border border-slate-800 hover:border-slate-700 shadow-md transition-all duration-300 group"
            >
              <MessageCircle className="h-4.5 w-4.5 text-green-400 group-hover:scale-110 transition-transform" />
              <span>Solicitar Demo Presencial</span>
              <ArrowRight className="h-4 w-4 ml-1 opacity-70 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

        {/* Right Column: Floating Solutions Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          
          <div className="w-full max-w-[360px] silver-metallic-card rounded-2xl p-6 sm:p-8 shadow-2xl border-slate-200/90 animate-float relative overflow-hidden">
            
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 opacity-40 pointer-events-none animate-shimmer" />

            <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest border-b border-slate-200/60 pb-3 mb-4">
              Nuestras Soluciones
            </h3>

            <ul className="space-y-3.5">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start space-x-3 text-xs text-slate-600 font-medium">
                  <CheckCircle2 className="h-4.5 w-4.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>{solution}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-slate-400 font-bold">
              <span>Soporte 24/7 Local</span>
              <span className="text-slate-500">100% Personalizado</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
