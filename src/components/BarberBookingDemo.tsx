"use client";
 
import { useState } from "react";
import { Scissors, Sparkles, ChevronLeft, Check, CheckCircle2, Clock } from "lucide-react";
 
interface Service {
  id: string;
  name: string;
  price: number;
  duration: number; // in minutes
  description: string;
}
 
const SERVICES: Service[] = [
  {
    id: "corte",
    name: "Corte Clásico Premium",
    price: 15000,
    duration: 30,
    description: "Asesoría de imagen, lavado, corte con tijera/máquina y peinado con cera premium."
  },
  {
    id: "barba",
    name: "Arreglo de Barba & Ritual",
    price: 10000,
    duration: 25,
    description: "Diseño y afeitado tradicional con toalla caliente, navaja libre y aceites hidratantes."
  },
  {
    id: "manicura",
    name: "Manicura Spa Express",
    price: 12000,
    duration: 40,
    description: "Cuidado de uñas y cutículas, exfoliación, hidratación profunda y masaje relajante."
  }
];
 
const HOURS = ["10:00", "11:30", "15:00", "17:00"];
 
export default function BarberBookingDemo() {
  const [screen, setScreen] = useState<1 | 2 | 3>(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedHour, setSelectedHour] = useState<string | null>(null);
 
  // Dynamic Calendar generation for current month
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const monthName = today.toLocaleDateString("es-CL", { month: "long" });
  const capitalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);
 
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay(); // Sunday=0
  const adjustedStartDay = firstDayIndex === 0 ? 6 : firstDayIndex - 1; // Align Mon-Sun
 
  const daysArray: (number | null)[] = [];
  for (let i = 0; i < adjustedStartDay; i++) {
    daysArray.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    daysArray.push(d);
  }
 
  const handleSelectService = (service: Service) => {
    setSelectedService(service);
    setScreen(2);
  };
 
  const handleReset = () => {
    setSelectedService(null);
    setSelectedDay(null);
    setSelectedHour(null);
    setScreen(1);
  };
 
  return (
    <div className="demo-booking-widget flex flex-col w-full h-full bg-white select-none">
      {/* Screen 1: Services */}
      {screen === 1 && (
        <div className="p-5 space-y-4 animate-fade-in flex flex-col justify-between flex-grow">
          <div className="space-y-4">
            <div className="text-center space-y-1">
              <h4 className="text-lg font-extrabold text-neutral-900 tracking-tight">Reserva tu cita</h4>
              <p className="text-xs text-slate-500">Selecciona uno de nuestros servicios premium.</p>
            </div>
 
            <div className="space-y-3">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  onClick={() => handleSelectService(service)}
                  className="bg-slate-50 border border-slate-200 hover:border-amber-500 rounded-xl p-4 flex justify-between items-center cursor-pointer transition-all duration-200 hover:bg-white hover:shadow-md active:scale-[0.98] group text-left"
                >
                  <div className="space-y-1 max-w-[70%]">
                    <span className="text-xs font-black text-neutral-900 flex items-center gap-1.5">
                      {service.id === "corte" && <Scissors className="h-3.5 w-3.5 text-amber-500" />}
                      {service.id === "barba" && <Scissors className="h-3.5 w-3.5 text-neutral-900 rotate-90" />}
                      {service.id === "manicura" && <Sparkles className="h-3.5 w-3.5 text-amber-500 animate-pulse" />}
                      {service.name}
                    </span>
                    <p className="text-[10px] text-slate-550 leading-snug">{service.description}</p>
                    <div className="flex gap-3 text-[11px] font-bold mt-1">
                      <span className="text-neutral-900">${service.price.toLocaleString("es-CL")}</span>
                      <span className="text-slate-400 font-medium">{service.duration} min</span>
                    </div>
                  </div>
                  <button className="bg-neutral-900 group-hover:bg-amber-500 text-white text-[10px] font-black px-3 py-2 rounded-lg transition-colors duration-200 cursor-pointer active:scale-95 shrink-0">
                    Seleccionar
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
 
      {/* Screen 2: Date & Time */}
      {screen === 2 && selectedService && (
        <div className="p-5 space-y-4 animate-fade-in flex flex-col justify-between flex-grow">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 border-b border-slate-100 pb-3">
              <button
                onClick={() => {
                  setSelectedDay(null);
                  setSelectedHour(null);
                  setScreen(1);
                }}
                className="flex items-center text-xs font-bold text-slate-500 hover:text-neutral-900 transition-colors cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Volver</span>
              </button>
              <h4 className="text-xs font-black text-neutral-950 uppercase tracking-widest">Fecha y Hora</h4>
            </div>
 
            {/* Calendar Widget */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3">
              <h5 className="text-xs font-extrabold text-neutral-900 uppercase tracking-wider text-center mb-3">
                {capitalizedMonth} {year}
              </h5>
              
              <div className="grid grid-cols-7 text-center text-[9px] font-black uppercase text-slate-400 mb-2">
                <span>Lu</span><span>Ma</span><span>Mi</span><span>Ju</span><span>Vi</span><span>Sá</span><span>Do</span>
              </div>
 
              <div className="grid grid-cols-7 gap-1">
                {daysArray.map((day, idx) => {
                  if (day === null) {
                    return <div key={`empty-${idx}`} />;
                  }
 
                  const isPast = day < today.getDate();
                  const isSelected = selectedDay === day;
 
                  return (
                    <button
                      key={`day-${day}`}
                      disabled={isPast}
                      onClick={() => {
                        setSelectedDay(day);
                        setSelectedHour(null);
                      }}
                      className={`h-7 w-7 text-[11px] font-bold rounded-lg flex items-center justify-center transition-all ${
                        isSelected
                          ? "bg-neutral-950 text-white font-black"
                          : isPast
                          ? "text-slate-300 cursor-not-allowed"
                          : "hover:bg-slate-200 text-neutral-900 cursor-pointer"
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>
 
            {/* Hours list */}
            {selectedDay !== null && (
              <div className="space-y-2 animate-fade-in">
                <h5 className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <Clock className="h-3 w-3 text-amber-500" />
                  <span>Horas Disponibles</span>
                </h5>
                <div className="grid grid-cols-4 gap-1.5">
                  {HOURS.map((hour) => {
                    const isSelected = selectedHour === hour;
                    return (
                      <button
                        key={hour}
                        onClick={() => setSelectedHour(hour)}
                        className={`py-2 text-[10px] font-bold rounded-lg border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-amber-500 text-white border-transparent shadow-sm font-black"
                            : "bg-slate-50 border-slate-200 hover:border-amber-500 text-neutral-900"
                        }`}
                      >
                        {hour}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
 
          {/* Floating Confirm button */}
          {selectedDay !== null && selectedHour !== null && (
            <div className="pt-2 animate-fade-in">
              <button
                onClick={() => setScreen(3)}
                className="w-full bg-neutral-950 hover:bg-amber-500 text-white py-3 rounded-xl text-xs font-black tracking-wide uppercase shadow-md active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Check className="h-4 w-4" />
                <span>Confirmar Reserva</span>
              </button>
            </div>
          )}
        </div>
      )}
 
      {/* Screen 3: Confirmation / Success */}
      {screen === 3 && selectedService && selectedDay && selectedHour && (
        <div className="p-6 text-center space-y-6 animate-fade-in flex flex-col justify-center flex-grow">
          <div className="flex flex-col items-center space-y-2">
            <div className="p-3 bg-emerald-50 rounded-full border border-emerald-100 shadow-sm animate-pulse">
              <CheckCircle2 className="h-10 w-10 text-emerald-500" />
            </div>
            <h4 className="text-base font-extrabold text-emerald-600 tracking-tight">¡Reserva Confirmada con éxito!</h4>
          </div>
 
          {/* Appointment Details Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 space-y-2 text-left shadow-inner">
            <div className="flex justify-between border-b border-slate-100 pb-1.5">
              <span className="font-semibold text-slate-400">Servicio:</span>
              <span className="font-extrabold text-neutral-900 text-right">{selectedService.name}</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-1.5">
              <span className="font-semibold text-slate-400">Fecha:</span>
              <span className="font-extrabold text-neutral-900">{selectedDay} de {capitalizedMonth}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-slate-400">Hora:</span>
              <span className="font-extrabold text-neutral-900">{selectedHour} hrs</span>
            </div>
          </div>
 
          <button
            onClick={handleReset}
            className="bg-white hover:bg-slate-50 border border-slate-300 hover:border-neutral-900 text-slate-600 hover:text-neutral-900 text-[11px] font-black px-5 py-2.5 rounded-lg transition-colors cursor-pointer active:scale-95 mx-auto"
          >
            Volver al inicio
          </button>
        </div>
      )}
    </div>
  );
}
