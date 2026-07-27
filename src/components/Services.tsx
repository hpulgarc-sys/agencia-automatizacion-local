import { ChefHat, FileSpreadsheet, LineChart, Check, Globe } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "kds",
      icon: <ChefHat className="h-6 w-6 text-slate-700" />,
      title: "Menú Digital Interactivo & Monitor de Cocina",
      subtitle: "KDS sin comisiones",
      description:
        "Tus clientes piden escaneando un código QR. Las órdenes llegan al instante a una pantalla en la cocina (KDS). Adiós a las comandas de papel perdidas, demoras y pago de altas comisiones a apps externas.",
      features: [
        "Menú QR editable en tiempo real",
        "Monitor KDS para cocineros (tablet/PC)",
        "Notificaciones audibles de nuevos pedidos",
        "Sin cobros de comisiones por venta",
      ],
      ctaText: "Ver Demo de Menú y Cocina",
      ctaHref: "#demos",
    },
    {
      id: "talonarios",
      icon: <FileSpreadsheet className="h-6 w-6 text-slate-700" />,
      title: "Digitalización de Talonarios y Fichas de Trabajo",
      subtitle: "Taller, Recepción, PDF automático",
      description:
        "Reemplaza los talonarios impresos y blocks de notas por formularios digitales optimizados para celular. Ideal para talleres mecánicos, servicios técnicos y recepciones. Al completar una ficha, se genera y envía un PDF automático al cliente.",
      features: [
        "Formularios móviles rápidos y sencillos",
        "Generación automática de reportes PDF",
        "Búsqueda instantánea de historiales de clientes",
        "Firma digital directo en pantalla",
      ],
      ctaText: "Cotizar Digitalización",
      ctaHref: "#cotizar",
    },
    {
      id: "reportes",
      icon: <LineChart className="h-6 w-6 text-slate-700" />,
      title: "Reportes Automatizados y Control de Stock/Ventas",
      subtitle: "Dashboard simple e inteligente",
      description:
        "Mantén el control total de tu negocio local. Registra ventas, gestiona inventarios y visualiza reportes automáticos al final del día. Todo desde una interfaz simple diseñada para pymes, sin complicaciones técnicas.",
      features: [
        "Control de stock con alertas de mínimo",
        "Resumen de ventas diario por WhatsApp o Email",
        "Dashboard con gráficos fáciles de entender",
        "Exportación a Excel en un clic",
      ],
      ctaText: "Cotizar Control de Ventas",
      ctaHref: "#cotizar",
    },
    {
      id: "diseno-web",
      icon: <Globe className="h-6 w-6 text-slate-700" />,
      title: "Diseño Web & Landing Pages de Alta Conversión",
      subtitle: "Presencia online moderna y veloz",
      description:
        "Sitios web corporativos y páginas de aterrizaje (Landing Pages) modernas, rápidas y optimizadas para móviles. Diseñadas para convertir visitantes en clientes directos a tu WhatsApp.",
      features: [
        "Desarrollo Mobile-First ultra veloz",
        "Optimización SEO para posicionamiento local",
        "Integración directa de chat y formularios",
        "Dominio personalizado y hosting incluido",
      ],
      ctaText: "Cotizar Sitio Web",
      ctaHref: "#cotizar",
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Nuestras Soluciones
          </h2>
          <p className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Herramientas Modernas para Negocios Locales
          </p>
          <p className="text-lg text-slate-600">
            Diseñamos e implementamos sistemas a medida que aceleran tus operaciones y eliminan el desorden manual.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
