import { MessageSquare, ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  const whatsappUrl = "https://wa.me/56997913248?text=Hola,%20me%20interesa%20solicitar%20una%20demo%20presencial%20en%20mi%20local.";

  return (
    <section className="relative overflow-hidden bg-primary text-white py-16 sm:py-24 lg:py-32 border-b border-primary-light">
      
      {/* Decorative Metallic Blur Circles */}
      <div className="absolute top-[-20%] left-[-10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-accent/10 blur-[80px] -z-10" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-gold/10 blur-[80px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Local Badge */}
            <div className="inline-flex items-center space-x-1.5 bg-primary/45 px-3 py-1.5 rounded-full border border-primary-light/60 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold text-slate-200 tracking-wide">
                Servicios Disponibles en Región de O&apos;Higgins
              </span>
            </div>

            {/* Impact Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Digitaliza tu negocio local y{"  "}
              <span className="bg-gradient-to-r from-white via-slate-100 to-accent bg-clip-text text-transparent">
                elimina el papeleo manual
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Sistemas de pedidos en línea, comanderas digitales y automatización de formularios para pymes en la Región de O&apos;Higgins.
            </p>

            {/* Value Props Bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0 text-left pt-2">
              <div className="flex items-center space-x-2 text-sm text-slate-200">
                <CheckCircle2 className="h-4.5 w-4.5 text-accent shrink-0" />
                <span>100% Sin Comisiones por Venta</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-200">
                <ShieldCheck className="h-4.5 w-4.5 text-accent shrink-0" />
                <span>Soporte e Instalación Local</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-200 col-span-1 sm:col-span-2">
                <Zap className="h-4.5 w-4.5 text-accent shrink-0" />
                <span>Sistemas optimizados para celulares y tablets</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-accent text-primary hover:bg-emerald-400 px-8 py-4 rounded-xl text-base font-bold shadow-md hover:shadow-lg transition-all group duration-300"
              >
                <MessageSquare className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span>Solicitar Demo Presencial</span>
              </a>
              
              <a
                href="#servicios"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-transparent text-white hover:text-accent px-6 py-4 rounded-xl text-base font-semibold border border-white/20 hover:border-accent shadow-sm transition-all duration-300"
              >
                <span>Ver servicios</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

          </div>

          {/* Graphical/Mockup Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square rounded-3xl bg-white p-6 flex flex-col justify-between shadow-2xl border border-slate-200 animate-float text-slate-800">
              
              {/* Card Header */}
              <div className="flex justify-between items-center pb-4 border-b border-slate-200/80">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <div className="w-12 h-2 rounded bg-slate-200" />
                </div>
                <div className="bg-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2 py-0.5 rounded border border-slate-250">
                  Panel de Control
                </div>
              </div>

              {/* Card Body Metrics */}
              <div className="py-6 space-y-4 flex-grow flex flex-col justify-center">
                
                {/* Metric 1 */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-150 shadow-sm flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-semibold text-slate-400 block uppercase tracking-wider">
                      Pedidos en cocina
                    </span>
                    <span className="text-lg font-bold text-slate-850">Menú de Bowls</span>
                  </div>
                  <span className="bg-accent/10 text-emerald-800 border border-accent/20 text-[11px] font-bold px-2.5 py-1 rounded-full">
                    Activo
                  </span>
                </div>

                {/* Metric 2 */}
                <div className="bg-white p-3 rounded-xl border border-slate-150 shadow-sm flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-semibold text-slate-400 block uppercase tracking-wider">
                      Automatización
                    </span>
                    <span className="text-lg font-bold text-slate-800">Fichas a PDF</span>
                  </div>
                  <span className="bg-slate-50 text-slate-700 border border-slate-200 text-[11px] font-bold px-2.5 py-1 rounded-full">
                    Listo (0s)
                  </span>
                </div>

              </div>

              {/* Card Footer Graphic */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                <div className="flex space-x-1.5 items-center">
                  <span className="w-2 h-2 rounded-full bg-slate-400" />
                  <span className="font-medium">100% Eficiencia local</span>
                </div>
                <span className="font-bold text-slate-700">10x más rápido</span>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
