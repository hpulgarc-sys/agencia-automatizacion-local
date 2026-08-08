import { Globe, CalendarClock, Webhook, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "pwa",
      icon: Globe,
      title: "Desarrollo Web & PWA de Alto Rendimiento",
      subtitle: "Instalables sin App Store",
      description:
        "Sitios web corporativos y Aplicaciones Web Progresivas (PWA) de alto rendimiento construidas con Next.js. Carga ultrarrápida e instalables en el celular de tus clientes directamente desde el navegador, sin descargas complejas.",
      features: [
        "Instalación directa en pantalla de inicio",
        "Velocidad de carga de nivel mundial (Next.js)",
        "Optimización SEO para posicionamiento local",
        "Diseño Mobile-First adaptivo e intuitivo",
      ],
      ctaText: "Ver Soluciones por Nicho",
      ctaHref: "#nichos",
    },
    {
      id: "agendamiento",
      icon: CalendarClock,
      title: "Motor de Agendamiento Online Inteligente",
      subtitle: "Reservas sin fricción 24/7",
      description:
        "Permite a tus clientes agendar citas, servicios o turnos a cualquier hora del día. Configura horarios, asigna profesionales y reduce el ausentismo cobrando señas o abonos online antes de confirmar la reserva.",
      features: [
        "Reservas automáticas sin intervención manual",
        "Abonos online anti-inasistencias",
        "Gestión de turnos de múltiples colaboradores",
        "Recordatorios automatizados de reservas",
      ],
      ctaText: "Cotizar Agendamiento",
      ctaHref: "#cotizar",
    },
    {
      id: "automatizacion",
      icon: Webhook,
      title: "Automatización de Procesos & Notificaciones",
      subtitle: "Integración con WhatsApp y PDF",
      description:
        "Elimina las tareas manuales repetitivas. Conecta tus formularios con envío de notificaciones automáticas por WhatsApp, generación instantánea de fichas de trabajo en PDF, alertas de estado y reportes al final del día.",
      features: [
        "Alertas y notificaciones automáticas por WhatsApp",
        "Generación automática de PDFs (comprobantes/fichas)",
        "Eliminación del papeleo y talonarios físicos",
        "Sincronización fluida entre sistemas y planillas",
      ],
      ctaText: "Cotizar Automatización",
      ctaHref: "#cotizar",
    },
  ];
 
  return (
    <section id="servicios" className="py-20 bg-slate-cold border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Servicios Transversales
          </h2>
          <p className="text-3xl font-extrabold text-primary tracking-tight sm:text-4xl">
            Tecnología Modular para Potenciar tu Negocio
          </p>
          <p className="text-lg text-slate-650">
            Desarrollamos soluciones de software a medida que optimizan la captación de clientes, facilitan reservas y automatizan tus flujos operativos.
          </p>
        </div>
 
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isDarkCard = index === 1;
            const IconComponent = service.icon;
            
            // Grid icon color intercalation
            // Card 0 (light) -> accent (neon green), Card 1 (dark) -> gold (gold detail), Card 2 (light) -> accent (neon green)
            const mainIconColor = isDarkCard 
              ? "text-gold" 
              : "text-accent";
            
            return (
              <div
                key={index}
                className={`rounded-2xl p-8 flex flex-col justify-between hover:shadow-2xl hover:translate-y-[-4px] transition-all duration-300 group border ${
                  isDarkCard
                    ? "bg-primary text-white border-primary-light shadow-xl"
                    : "bg-white text-slate-800 border-slate-200 shadow-sm"
                }`}
              >
                <div className="space-y-6">
                  
                  {/* Icon Wrapper */}
                  <div className={`inline-flex items-center justify-center p-3 rounded-xl border shadow-sm group-hover:scale-105 transition-transform duration-300 ${
                    isDarkCard
                      ? "bg-primary-light/35 border-primary-light/60"
                      : "bg-slate-cold border-slate-200"
                  }`}>
                    <IconComponent className={`h-6 w-6 ${mainIconColor}`} />
                  </div>
 
                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className={`text-xl font-bold transition-colors ${
                      isDarkCard ? "text-white" : "text-primary"
                    }`}>
                      {service.title}
                    </h3>
                    <span className={`text-xs font-bold uppercase tracking-wider block ${
                      isDarkCard ? "text-slate-300" : "text-slate-400"
                    }`}>
                      {service.subtitle}
                    </span>
                    <p className={`text-sm leading-relaxed pt-2 ${
                      isDarkCard ? "text-slate-200" : "text-slate-600"
                    }`}>
                      {service.description}
                    </p>
                  </div>
 
                  {/* Features List */}
                  <ul className={`space-y-2.5 pt-2 border-t ${
                    isDarkCard ? "border-slate-800" : "border-slate-100"
                  }`}>
                    {service.features.map((feature, fIdx) => {
                      // Alternate checkmark colors inside the card list
                      // Icono 1: Verde Neón, Icono 2: Azul Marino (for light card) or Blanco/Dorado (for dark card), and so on
                      const bulletColor = fIdx % 2 === 0 
                        ? "text-accent" 
                        : (isDarkCard ? "text-gold" : "text-primary");
                      
                      return (
                        <li key={fIdx} className={`flex items-start space-x-2.5 text-xs ${
                          isDarkCard ? "text-slate-200" : "text-slate-600"
                        }`}>
                          <Check className={`h-4 w-4 shrink-0 mt-0.5 ${bulletColor}`} />
                          <span>{feature}</span>
                        </li>
                      );
                    })}
                  </ul>
 
                </div>
 
                {/* Action Button */}
                <div className="pt-8">
                  <a
                    href={service.ctaHref}
                    className={`w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold shadow-sm transition-all duration-200 ${
                      isDarkCard
                        ? "bg-accent text-primary hover:bg-emerald-400 border border-transparent"
                        : "bg-white text-primary hover:text-accent border border-slate-200 hover:border-accent"
                    }`}
                  >
                    {service.ctaText}
                  </a>
                </div>
 
              </div>
            );
          })}
        </div>
 
      </div>
    </section>
  );
}
