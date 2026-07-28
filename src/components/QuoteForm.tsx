"use client";

import { useState } from "react";
import { MessageSquare, Check } from "lucide-react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    businessName: "",
    city: "",
    service: "",
    details: "",
  });
  const [error, setError] = useState("");

  const citiesOfOHiggins = [
    "Rancagua",
    "Machalí",
    "San Fernando",
    "Rengo",
    "San Vicente",
    "Santa Cruz",
    "Chimbarongo",
    "Graneros",
    "Pichilemu",
    "Mostazal",
    "San Francisco de Mostazal",
    "Requínoa",
    "Peumo",
    "Las Cabras",
    "Otra comuna (Especificar en detalles)",
  ];

  const services = [
    "Desarrollo Web & PWA de Alto Rendimiento (Next.js)",
    "Motor de Agendamiento Online Inteligente (24/7 + Abonos)",
    "Automatización de Procesos & Notificaciones (WhatsApp, PDF)",
    "Nicho: Gastronomía & Restaurantes (Menú QR + KDS)",
    "Nicho: Estética, Barberías & Tatuajes (Agenda + Abonos)",
    "Nicho: Sector Automotriz (Ficha Digital + Lubricentros)",
    "Nicho: Transporte & Logística (Checklist + Combustible)",
    "Nicho: Instituciones Educativas & Colegios (Comunicaciones)",
    "Kit Llave en Mano (Software + Tablet Android en Modo Kiosco)",
    "Otros desarrollos a medida",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Simple validations
    if (!formData.businessName.trim()) {
      setError("Por favor ingresa el nombre de tu negocio.");
      return;
    }
    if (!formData.city) {
      setError("Por favor selecciona una ciudad/comuna.");
      return;
    }
    if (!formData.service) {
      setError("Por favor selecciona el servicio de interés.");
      return;
    }

    // Build WhatsApp message for Demo Presencial request
    const message = `Hola, me interesa solicitar una Demo Presencial en mi local.

*Detalles del Negocio:*
• *Negocio:* ${formData.businessName.trim()}
• *Ciudad:* ${formData.city}
• *Servicio/Solución:* ${formData.service}
• *Detalles:* ${formData.details.trim() || "Deseo coordinar fecha para la demo."}`;

    const phoneNumber = "56997913248";
    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    // Open WhatsApp URL
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="cotizar" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Agenda tu Demo
          </h2>
          <p className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Solicita una Demo Presencial en tu Local
          </p>
          <p className="text-base text-slate-600">
            Completa los datos de tu negocio y coordinemos una visita presencial en la Región de O&apos;Higgins para mostrarte el sistema funcionando en vivo.
          </p>
        </div>

        {/* Form Container */}
        <div className="silver-metallic-card rounded-2xl p-6 sm:p-10 silver-glow border-slate-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl flex items-center space-x-2">
                <span className="font-bold">Error:</span>
                <span>{error}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Business Name */}
              <div className="space-y-2">
                <label htmlFor="businessName" className="text-xs font-bold uppercase tracking-wide text-slate-600 block">
                  Nombre del Negocio *
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="Ej. Restaurant El Estribo, Taller O'Higgins"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-slate-350 focus:border-slate-350 transition-all"
                  required
                />
              </div>

              {/* City (Select O'Higgins Communes) */}
              <div className="space-y-2">
                <label htmlFor="city" className="text-xs font-bold uppercase tracking-wide text-slate-600 block">
                  Ciudad / Comuna *
                </label>
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:bg-white focus:ring-2 focus:ring-slate-350 focus:border-slate-350 transition-all appearance-none cursor-pointer"
                  required
                >
                  <option value="" disabled>Selecciona tu comuna</option>
                  {citiesOfOHiggins.map((city, idx) => (
                    <option key={idx} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Service of Interest */}
              <div className="space-y-2 sm:col-span-2">
                <label htmlFor="service" className="text-xs font-bold uppercase tracking-wide text-slate-600 block">
                  Servicio de Interés *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:bg-white focus:ring-2 focus:ring-slate-350 focus:border-slate-350 transition-all appearance-none cursor-pointer"
                  required
                >
                  <option value="" disabled>Selecciona el servicio</option>
                  {services.map((service, idx) => (
                    <option key={idx} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message / Details */}
              <div className="space-y-2 sm:col-span-2">
                <label htmlFor="details" className="text-xs font-bold uppercase tracking-wide text-slate-600 block">
                  Mensaje / Detalles Adicionales
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  value={formData.details}
                  onChange={handleInputChange}
                  placeholder="Cuéntanos un poco más sobre lo que necesitas (ej. cantidad de mesas en tu local, volumen de tickets diarios, etc.)"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-slate-350 focus:border-slate-350 transition-all resize-y"
                />
              </div>

            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-slate-950 text-white hover:bg-slate-900 px-8 py-4 rounded-xl text-base font-bold border border-slate-800 hover:border-slate-700 shadow-md hover:shadow-lg transition-all group duration-300 cursor-pointer"
              >
                <MessageSquare className="h-5 w-5 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                <span>Solicitar Demo Presencial por WhatsApp</span>
              </button>
            </div>

          </form>
        </div>

        {/* Local trust indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 text-center text-xs text-slate-500">
          <div className="flex flex-col items-center space-y-1.5">
            <div className="p-2 bg-slate-100 rounded-full border border-slate-200">
              <Check className="h-4.5 w-4.5 text-slate-600" />
            </div>
            <p className="font-bold text-slate-800">Contacto Directo</p>
            <p>Atención rápida por WhatsApp sin intermediarios.</p>
          </div>
          
          <div className="flex flex-col items-center space-y-1.5">
            <div className="p-2 bg-slate-100 rounded-full border border-slate-200">
              <Check className="h-4.5 w-4.5 text-slate-600" />
            </div>
            <p className="font-bold text-slate-800">100% Personalizado</p>
            <p>Adaptamos el software a la forma de trabajar de tu negocio.</p>
          </div>
          
          <div className="flex flex-col items-center space-y-1.5">
            <div className="p-2 bg-slate-100 rounded-full border border-slate-200">
              <Check className="h-4.5 w-4.5 text-slate-600" />
            </div>
            <p className="font-bold text-slate-800">Implementación Presencial</p>
            <p>Apoyamos a tu equipo en la Región de O&apos;Higgins.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
