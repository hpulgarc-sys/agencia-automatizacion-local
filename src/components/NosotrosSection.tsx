"use client";

import { Rocket, Compass, Zap, ShieldCheck, Users, Award, Clock, CheckCircle, TrendingUp } from "lucide-react";

export default function NosotrosSection() {
  const values = [
    { name: "Innovación", icon: Zap },
    { name: "Transparencia", icon: ShieldCheck },
    { name: "Cercanía", icon: Users },
    { name: "Calidad", icon: Award },
    { name: "Rapidez", icon: Clock },
    { name: "Soluciones reales", icon: CheckCircle },
    { name: "Mejora continua", icon: TrendingUp },
  ];

  return (
    <section id="nosotros" className="py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-slate-200/40 blur-[80px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] left-[-10%] w-[250px] h-[250px] rounded-full bg-slate-200/30 blur-[70px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1 bg-white border border-slate-200 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-500 shadow-sm">
            <span>NUESTRA ESENCIA</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Comprometidos con el Desarrollo de la PYME Local
          </h2>
        </div>

        {/* Mission and Vision Grid (2 cards in parallel) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Mission Card */}
          <div className="bg-white/80 backdrop-blur-sm border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-100/50 to-transparent rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-300" />
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3.5 bg-slate-100 rounded-2xl border border-slate-200/60 text-slate-700">
                <Rocket className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Misión</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Ayudar a pequeñas y medianas empresas a crecer mediante tecnología, automatización, inteligencia artificial y diseño estratégico.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white/80 backdrop-blur-sm border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-100/50 to-transparent rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-300" />
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3.5 bg-slate-100 rounded-2xl border border-slate-200/60 text-slate-700">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Visión</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Convertirnos en una de las empresas chilenas más reconocidas en soluciones digitales para PYMES, integrando IA, automatización y diseño en un solo servicio.
            </p>
          </div>

        </div>

        {/* Values Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">
              Nuestros Valores
            </h3>
          </div>

          {/* Grid of 7 modules/pills */}
          <div className="flex flex-wrap justify-center gap-3.5 max-w-4xl mx-auto">
            {values.map((val, index) => {
              const IconComp = val.icon;
              return (
                <div
                  key={index}
                  className="bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-350 px-5 py-3 rounded-full flex items-center space-x-2.5 shadow-sm hover:shadow-md transition-all duration-300 cursor-default group"
                >
                  <IconComp className="h-4 w-4 text-slate-400 group-hover:text-slate-600 group-hover:scale-110 transition-all duration-200" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                    {val.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
