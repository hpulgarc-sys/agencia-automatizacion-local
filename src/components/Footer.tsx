import { Cpu, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = "https://wa.me/56997913248?text=Hola,%20me%20interesa%20digitalizar%20mi%20negocio.";

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-200">
          
          {/* Column 1: Info and Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-sm flex items-center justify-center">
                <Cpu className="h-5 w-5 text-slate-700" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-wider uppercase text-slate-800 leading-tight">
                  Agencia de Software
                </span>
                <span className="text-xs font-semibold text-slate-500 tracking-wide">
                  & Automatización Local
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-600 max-w-sm">
              Especialistas en digitalizar pymes locales. Eliminamos el papel, aumentamos tus ventas y automatizamos tus flujos de trabajo.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-4">
              Navegación
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a href="#servicios" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                  Servicios Principales
                </a>
              </li>
              <li>
                <a href="#demos" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                  Demos en Vivo Interactiva
                </a>
              </li>
              <li>
                <a href="#cotizar" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                  Cotización Rápida
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Location */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-4">
              Contacto Local
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-slate-600">
                <MapPin className="h-5 w-5 text-slate-400 shrink-0" />
                <span>Región de O&apos;Higgins, Chile</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-600">
                <Phone className="h-5 w-5 text-slate-400 shrink-0" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 hover:underline transition-colors"
                >
                  +56 9 9791 3248
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-600">
                <Mail className="h-5 w-5 text-slate-400 shrink-0" />
                <span>contacto@softwarelocal.cl</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {currentYear} Agencia de Software & Automatización Local. Todos los derechos reservados.</p>
          <p className="mt-2 sm:mt-0">
            Desarrollado en la Región de O&apos;Higgins • Soluciones Mobile-First
          </p>
        </div>
      </div>
    </footer>
  );
}
