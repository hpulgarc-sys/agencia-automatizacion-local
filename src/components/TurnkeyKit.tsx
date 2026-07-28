import { Shield, Sparkles, Check, Tablet } from "lucide-react";

export default function TurnkeyKit() {
  const specs = [
    { title: "Tablet Android 10.1\" ", desc: "Pantalla HD IPS de alta resistencia y procesador optimizado para uso continuo." },
    { title: "Bloqueo 'Modo Kiosco'", desc: "Sistema de seguridad que restringe el uso del dispositivo exclusivamente para tu software." },
    { title: "Soporte Metálico Premium", desc: "Base de acero reforzado para mesón, cocina o recepción, giratoria y antirrobo." },
    { title: "Puesta en Marcha Presencial", desc: "Configuramos tu red, instalamos el hardware y capacitamos a tu equipo en tu local." },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Description & Specifications */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            <div className="space-y-4">
              <span className="bg-slate-100 border border-slate-250 text-slate-700 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded">
                Equipamiento Incluido
              </span>
              
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                Kit &apos;Llave en Mano&apos;: Software + Hardware Listo para Usar
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Olvídate de comprar o configurar equipos difíciles. Ofrecemos una solución completa que incluye el software preinstalado en una Tablet Android configurada profesionalmente para tu negocio.
              </p>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {specs.map((spec, index) => (
                <div key={index} className="flex space-x-3">
                  <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-slate-700 h-10 w-10 shrink-0 flex items-center justify-center shadow-sm">
                    <Check className="h-5 w-5 text-slate-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800">
                      {spec.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      {spec.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-6 pt-4 border-t border-slate-150">
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-600">
                <Shield className="h-5 w-5 text-slate-400" />
                <span>Garantía de Hardware</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-600">
                <Sparkles className="h-5 w-5 text-slate-400" />
                <span>Soporte Local Técnico</span>
              </div>
            </div>

          </div>

          {/* Right Column: Tablet Mockup Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[1.4] bg-slate-950 rounded-[28px] p-6.5 shadow-2xl border-4 border-slate-900 flex items-center justify-center silver-glow">
              
              {/* Tablet Screen */}
              <div className="w-full h-full bg-slate-50 rounded-xl overflow-hidden flex flex-col justify-between border border-slate-800 relative">
                
                {/* Screen Header */}
                <div className="bg-slate-900 text-white py-2 px-4 flex justify-between items-center text-[10px] font-bold">
                  <div className="flex items-center space-x-1.5">
                    <Tablet className="h-3.5 w-3.5 text-slate-300" />
                    <span>Modo Kiosco Activo</span>
                  </div>
                  <span className="text-green-400 font-extrabold flex items-center space-x-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-ping mr-1" />
                    En Línea
                  </span>
                </div>

                {/* Screen Body */}
                <div className="p-4 flex-grow flex flex-col justify-center space-y-3 bg-white">
                  
                  {/* Mock Dashboard */}
                  <div className="border border-slate-200 rounded-xl p-3 bg-slate-50 flex items-center justify-between">
                    <div className="space-y-1">
                      <span className="text-[9px] text-slate-400 block font-bold tracking-wide uppercase">Caja / Recepción</span>
                      <span className="text-xs font-black text-slate-800">Menú de Bowls / Agenda</span>
                    </div>
                    <span className="bg-slate-900 text-white text-[9px] font-black px-2 py-1 rounded-lg">
                      Iniciar
                    </span>
                  </div>

                  <div className="border border-slate-150 rounded-xl p-3 bg-slate-50 flex items-center justify-between opacity-50 select-none">
                    <div className="space-y-1">
                      <span className="text-[9px] text-slate-400 block font-bold tracking-wide uppercase">Ajustes del Dispositivo</span>
                      <span className="text-xs font-black text-slate-800">Bloqueado por Admin</span>
                    </div>
                    <span className="text-[9px] text-slate-400 font-black">Restringido</span>
                  </div>

                </div>

                {/* Screen Footer */}
                <div className="bg-slate-100 border-t border-slate-200 py-2.5 px-4 text-center text-[9px] text-slate-400 font-bold">
                  Agencia de Software & Automatización Local
                </div>

              </div>

              {/* Tablet Home Button / Camera dot */}
              <div className="absolute left-2 w-1.5 h-1.5 rounded-full bg-slate-800" />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
