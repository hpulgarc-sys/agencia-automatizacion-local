import { Globe, CalendarClock, Webhook, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "pwa",
      icon: <Globe className="h-6 w-6 text-slate-700" />,
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
      icon: <CalendarClock className="h-6 w-6 text-slate-700" />,
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
      icon: <Webhook className="h-6 w-6 text-slate-700" />,
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
    <section id="servicios" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Servicios Transversales
          </h2>
          <p className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Tecnología Modular para Potenciar tu Negocio
          </p>
          <p className="text-lg text-slate-600">
            Desarrollamos soluciones de software a medida que optimizan la captación de clientes, facilitan reservas y automatizan tus flujos operativos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="silver-metallic-card rounded-2xl p-8 flex flex-col justify-between hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 group"
            >
              <div className="space-y-6">
                
                {/* Icon Wrapper */}
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-white border border-slate-200 shadow-sm group-hover:scale-105 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-950 transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    {service.subtitle}
                  </span>
                  <p className="text-sm text-slate-600 leading-relaxed pt-2">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 pt-2 border-t border-slate-100">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-2.5 text-xs text-slate-600">
                      <Check className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Action Button */}
              <div className="pt-8">
                <a
                  href={service.ctaHref}
                  className="w-full inline-flex items-center justify-center bg-white text-slate-800 hover:bg-slate-50 border border-slate-200 hover:border-slate-300 px-4 py-2.5 rounded-xl text-sm font-semibold shadow-sm transition-all duration-200"
                >
                  {service.ctaText}
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
