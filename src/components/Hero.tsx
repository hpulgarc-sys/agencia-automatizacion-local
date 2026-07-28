import { MessageSquare, ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  const whatsappUrl = "https://wa.me/56997913248?text=Hola,%20me%20interesa%20solicitar%20una%20demo%20presencial%20en%20mi%20local.";

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-24 lg:py-32 border-b border-slate-200">
      
      {/* Decorative Metallic Blur Circles */}
      <div className="absolute top-[-20%] left-[-10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-slate-200/50 blur-[80px] -z-10" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-slate-200/40 blur-[80px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Local Badge */}
            <div className="inline-flex items-center space-x-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-semibold text-slate-600 tracking-wide">
                Servicios Disponibles en Región de O&apos;Higgins
              </span>
            </div>

            {/* Impact Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Digitaliza tu negocio local y{" "}
              <span className="bg-gradient-to-r from-slate-950 via-slate-700 to-slate-500 bg-clip-text text-transparent">
                elimina el papeleo manual
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Sistemas de pedidos en línea, comanderas digitales y automatización de formularios para pymes en la Región de O&apos;Higgins.
            </p>

            {/* Value Props Bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0 text-left pt-2">
              <div className="flex items-center space-x-2 text-sm text-slate-700">
                <CheckCircle2 className="h-4.5 w-4.5 text-slate-500 shrink-0" />
                <span>100% Sin Comisiones por Venta</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-700">
                <ShieldCheck className="h-4.5 w-4.5 text-slate-500 shrink-0" />
                <span>Soporte e Instalación Local</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-700 col-span-1 sm:col-span-2">
                <Zap className="h-4.5 w-4.5 text-slate-500 shrink-0" />
                <span>Sistemas optimizados para celulares y tablets</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-slate-950 text-white hover:bg-slate-900 px-8 py-4 rounded-xl text-base font-bold border border-slate-800 hover:border-slate-700 shadow-md hover:shadow-lg transition-all group duration-300"
              >
                <MessageSquare className="h-5 w-5 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                <span>Solicitar Demo Presencial</span>
              </a>
              
              <a
                href="#servicios"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white text-slate-700 hover:text-slate-950 px-6 py-4 rounded-xl text-base font-semibold border border-slate-200 hover:border-slate-300 shadow-sm transition-all duration-300"
              >
                <span>Ver servicios</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

          </div>

          {/* Graphical/Mockup Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square rounded-3xl silver-metallic-card p-6 flex flex-col justify-between silver-glow border-slate-200/80 animate-float">
              
              {/* Card Header */}
              <div className="flex justify-between items-center pb-4 border-b border-slate-200/60">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <div className="w-12 h-2 rounded bg-slate-200" />
                </div>
                <div className="bg-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2 py-0.5 rounded border border-slate-200">
                  Panel de Control
                </div>
              </div>

              {/* Card Body Metrics */}
              <div className="py-6 space-y-4 flex-grow flex flex-col justify-center">
                
                {/* Metric 1 */}
                <div className="bg-white p-3 rounded-xl border border-slate-150 shadow-sm flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-semibold text-slate-400 block uppercase tracking-wider">
                      Pedidos en cocina
                    </span>
                    <span className="text-lg font-bold text-slate-800">Menú de Bowls</span>
                  </div>
                  <span className="bg-green-50 text-green-700 border border-green-200/50 text-[11px] font-bold px-2.5 py-1 rounded-full">
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
              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
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
