"use client";

import { useState } from "react";
import { Utensils, Scissors, Car, Truck, GraduationCap, CheckCircle2, MessageSquare } from "lucide-react";

interface NicheInfo {
  id: string;
  icon: React.ReactNode;
  label: string;
  badge: string;
  title: string;
  desc: string;
  features: string[];
  mockupTitle: string;
  mockupItems: { label: string; value: string; status?: string }[];
  ctaText: string;
  ctaHref: string;
}

export default function NicheSolutions() {
  const [activeTab, setActiveTab] = useState("gastronomia");

  const niches: NicheInfo[] = [
    {
      id: "gastronomia",
      icon: <Utensils className="h-5 w-5" />,
      label: "Gastronomía & Restaurantes",
      badge: "Restaurantes, Cafés, Pubs",
      title: "Optimiza tu salón y cocina en tiempo real",
      desc: "Lleva el control de pedidos sin comisiones ni fricciones. Menú web QR interactivo para tus clientes, pantalla de cocina (KDS) para despachar rápido y visualización del estado del local en vivo.",
      features: [
        "Menú Web Interactivo con fotos y descripciones",
        "Monitor KDS (Kitchen Display System) auto-actualizable",
        "Control de mesas y estado de platos en tiempo real",
        "Sin comisiones por ventas o transacciones",
      ],
      mockupTitle: "Panel KDS & Mesas Activas",
      mockupItems: [
        { label: "Mesa 4 - Prep. Bowls", value: "Preparando", status: "warning" },
        { label: "Mesa 12 - Despacho", value: "Listo", status: "success" },
        { label: "Mesa 9 - Solicitud Cuenta", value: "Esperando", status: "info" },
      ],
      ctaText: "Probar Demo de Bowls & Cocina",
      ctaHref: "#demos",
    },
    {
      id: "estetica",
      icon: <Scissors className="h-5 w-5" />,
      label: "Estética, Barberías & Tatuajes",
      badge: "Salones, Barberías, Spas",
      title: "Control total de tu agenda con abonos integrados",
      desc: "Termina con las horas perdidas y las inasistencias de último minuto. Agenda online 24/7 de múltiples profesionales y cobro de abonos y señas integrados para validar reservas.",
      features: [
        "Agenda Online Multirrubro con horas automáticas",
        "Confirmación de citas con abono de seña anti-inasistencias",
        "Ficha técnica digital y consentimiento digital firmado en pantalla",
        "Recordatorio automático de visitas vía WhatsApp",
      ],
      mockupTitle: "Reservas de Hoy (Estética)",
      mockupItems: [
        { label: "14:00 - Corte & Barba (Felipe R.)", value: "Abonado ($5.000)", status: "success" },
        { label: "15:30 - Tinte & Peinado (María J.)", value: "Confirmado", status: "info" },
        { label: "17:00 - Tatuaje Brazo (Andrés V.)", value: "Seña Pendiente", status: "warning" },
      ],
      ctaText: "Solicitar Demo de Agenda",
      ctaHref: "#cotizar",
    },
    {
      id: "automotriz",
      icon: <Car className="h-5 w-5" />,
      label: "Sector Automotriz (Lubricentros)",
      badge: "Talleres, Lubricentros, Serv. Técnicos",
      title: "Fichas digitales de vehículos e historiales",
      desc: "Elimina los talonarios y hojas sueltas. Registra patentes, asocia fichas técnicas de trabajo y genera informes automáticos en formato PDF que tus clientes reciben por WhatsApp.",
      features: [
        "Ficha digital de vehículo por Patente / VIN",
        "Generación automática de presupuestos e informes PDF",
        "Envío de link directo con el informe por WhatsApp",
        "Alertas automáticas de mantención recurrente (ej. cambio de aceite)",
      ],
      mockupTitle: "Historial de Vehículo (Patente: AB-CD-12)",
      mockupItems: [
        { label: "Cambio Aceite Sintético 5W30", value: "Hace 15 días", status: "success" },
        { label: "Revisión Filtros & Pastillas", value: "Listo", status: "success" },
        { label: "Próxima Mantención (Alerta)", value: "En 5.000 km", status: "info" },
      ],
      ctaText: "Solicitar Demo de Lubricentro",
      ctaHref: "#cotizar",
    },
    {
      id: "transporte",
      icon: <Truck className="h-5 w-5" />,
      label: "Transporte & Logística",
      badge: "Flotas, Courier, Logística",
      title: "Control digital de flotas y hojas de despacho",
      desc: "Monitorea la operación diaria. Checklist digital pre-uso de vehículos, guías de despacho digitales con firma de recepción (POD) y control estricto de carga de combustible.",
      features: [
        "Checklist móvil de inspección pre-viaje de camiones",
        "Prueba de entrega digital (POD) con foto y firma del cliente",
        "Registro de cargas de combustible y kilometraje en tiempo real",
        "Reportes consolidados de rendimiento de flota",
      ],
      mockupTitle: "Despachos en Ruta (Patente: XY-99-88)",
      mockupItems: [
        { label: "Entrega #4023 - O&apos;Higgins", value: "Entregado (Firma)", status: "success" },
        { label: "Carga Combustible (Copec)", value: "55 Litros (OK)", status: "success" },
        { label: "Checklist Pre-uso (Inspección)", value: "Aprobado (0 Fallas)", status: "info" },
      ],
      ctaText: "Solicitar Demo de Logística",
      ctaHref: "#cotizar",
    },
    {
      id: "educacion",
      icon: <GraduationCap className="h-5 w-5" />,
      label: "Instituciones & Colegios",
      badge: "Colegios, Institutos, Jardines",
      title: "Comunicación directa y control de inspectoría",
      desc: "Sustituye la libreta de comunicaciones tradicional. Envía circulares directamente al WhatsApp de los apoderados y gestiona atrasos, justificaciones y salidas de forma digital.",
      features: [
        "Cuaderno de comunicaciones digital vía WhatsApp masivo",
        "Registro express de atrasos en inspectoría con código QR",
        "Justificaciones de inasistencia online del apoderado",
        "Autorizaciones de salida digitales y seguras",
      ],
      mockupTitle: "Inspectoría Digital (Control de Hoy)",
      mockupItems: [
        { label: "Atraso 1° Medio (Lucas M.)", value: "Notificado al WhatsApp", status: "success" },
        { label: "Circular Reunión Apoderados", value: "Enviado a 320 apoderados", status: "success" },
        { label: "Justificación Inasistencia 4° Básico", value: "Aprobada online", status: "info" },
      ],
      ctaText: "Solicitar Demo Educativa",
      ctaHref: "#cotizar",
    },
  ];

  const currentNiche = niches.find((n) => n.id === activeTab) || niches[0];

  return (
    <section id="nichos" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Soluciones Especializadas
          </h2>
          <p className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Software a Medida para tu Industria
          </p>
          <p className="text-lg text-slate-600">
            Entendemos los desafíos únicos de cada sector. Diseñamos módulos que resuelven los problemas reales de tu rubro comercial.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Panel: Tabs List */}
          <div className="lg:col-span-4 space-y-2.5">
            {niches.map((niche) => {
              const isActive = niche.id === activeTab;
              return (
                <button
                  key={niche.id}
                  onClick={() => setActiveTab(niche.id)}
                  className={`w-full text-left p-4.5 rounded-2xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? "bg-white border-slate-300 shadow-md translate-x-1"
                      : "bg-slate-50/50 border-slate-200 hover:bg-white hover:border-slate-300 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div className={`p-2.5 rounded-xl border flex items-center justify-center transition-colors ${
                      isActive ? "bg-slate-900 text-white border-slate-800" : "bg-white text-slate-500 border-slate-250 group-hover:text-slate-900"
                    }`}>
                      {niche.icon}
                    </div>
                    <div>
                      <span className="text-sm font-extrabold block text-slate-800 leading-tight">
                        {niche.label}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium block mt-0.5">
                        {niche.badge}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Panel: Tab Content Display */}
          <div className="lg:col-span-8 silver-metallic-card rounded-3xl p-6 sm:p-10 shadow-lg border-slate-200 flex flex-col md:flex-row gap-8 min-h-[420px] animate-fade-in">
            
            {/* Left side: Information */}
            <div className="flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="bg-slate-100 border border-slate-250 text-slate-700 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded">
                  Solución {currentNiche.label.split(" ")[0]}
                </span>
                
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                  {currentNiche.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  {currentNiche.desc}
                </p>

                <ul className="space-y-2.5 pt-2">
                  {currentNiche.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-2.5 text-xs text-slate-600">
                      <CheckCircle2 className="h-4.5 w-4.5 text-slate-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a
                  href={currentNiche.ctaHref}
                  className="inline-flex items-center space-x-2 bg-slate-950 text-white hover:bg-slate-900 px-6 py-3.5 rounded-xl text-sm font-bold border border-slate-800 hover:border-slate-750 shadow-sm transition-all group duration-250"
                >
                  <MessageSquare className="h-4.5 w-4.5 text-green-400" />
                  <span>{currentNiche.ctaText}</span>
                </a>
              </div>
            </div>

            {/* Right side: Mockup Display */}
            <div className="w-full md:w-[260px] bg-slate-900 border border-slate-950 rounded-2xl p-4 flex flex-col justify-between shrink-0 shadow-inner select-none font-sans">
              
              {/* Mockup Header */}
              <div className="flex justify-between items-center pb-2.5 border-b border-slate-800">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-700" />
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                    {currentNiche.mockupTitle}
                  </span>
                </div>
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              </div>

              {/* Mockup Items */}
              <div className="py-6 space-y-3.5 flex-grow flex flex-col justify-center">
                {currentNiche.mockupItems.map((item, idx) => (
                  <div key={idx} className="bg-slate-850 p-2.5 rounded-lg border border-slate-800 flex justify-between items-center">
                    <span className="text-[10px] text-slate-300 font-semibold truncate max-w-[140px]">
                      {item.label}
                    </span>
                    <span className={`text-[8.5px] font-bold uppercase px-2 py-0.5 rounded ${
                      item.status === "success"
                        ? "bg-green-950/80 text-green-400 border border-green-900/50"
                        : item.status === "warning"
                        ? "bg-amber-950/80 text-amber-400 border border-amber-900/50"
                        : "bg-slate-800 text-slate-300"
                    }`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mockup Footer */}
              <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-[8px] text-slate-500">
                <span>Último Sync: hace 2s</span>
                <span className="font-bold text-slate-400">100% cloud</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
