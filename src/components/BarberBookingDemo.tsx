"use client";
 
import { useState } from "react";
import { Scissors, Sparkles, ChevronLeft, Check, CheckCircle2, Calendar as CalendarIcon, Clock, Copy, CheckCircle, Code } from "lucide-react";
 
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
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [copied, setCopied] = useState(false);
 
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
 
  // Single-file copy-paste HTML/CSS/JS block for user's WordPress block integration
  const rawHtmlCode = `<div class="demo-booking-widget">
  <div class="booking-widget-container">
    <!-- Pantalla 1: Servicios -->
    <div id="screen-services" class="booking-screen active">
      <h2 class="booking-title">Reserva tu cita</h2>
      <p class="booking-subtitle">Selecciona uno de nuestros servicios premium</p>
      
      <div class="services-list">
        <div class="service-card" onclick="selectService('corte', 'Corte Clásico Premium', 15000, 30)">
          <div class="service-details">
            <span class="service-name">Corte Clásico Premium</span>
            <span class="service-description">Asesoría de imagen, corte y peinado con cera.</span>
            <div class="service-meta">
              <span class="service-price">$15.000</span>
              <span class="service-duration">30 min</span>
            </div>
          </div>
          <button class="btn-select">Seleccionar</button>
        </div>
 
        <div class="service-card" onclick="selectService('barba', 'Arreglo de Barba & Ritual', 10000, 25)">
          <div class="service-details">
            <span class="service-name">Arreglo de Barba & Ritual</span>
            <span class="service-description">Afeitado tradicional con toalla caliente y navaja.</span>
            <div class="service-meta">
              <span class="service-price">$10.000</span>
              <span class="service-duration">25 min</span>
            </div>
          </div>
          <button class="btn-select">Seleccionar</button>
        </div>
 
        <div class="service-card" onclick="selectService('manicura', 'Manicura Spa Express', 12000, 40)">
          <div class="service-details">
            <span class="service-name">Manicura Spa Express</span>
            <span class="service-description">Exfoliación, hidratación y cuidado de uñas.</span>
            <div class="service-meta">
              <span class="service-price">$12.000</span>
              <span class="service-duration">40 min</span>
            </div>
          </div>
          <button class="btn-select">Seleccionar</button>
        </div>
      </div>
    </div>
 
    <!-- Pantalla 2: Fecha y Hora -->
    <div id="screen-datetime" class="booking-screen">
      <div class="screen-header">
        <button class="btn-back" onclick="showScreen(1)">← Volver</button>
        <span class="header-title">Fecha y Hora</span>
      </div>
 
      <div class="calendar-section">
        <h3 class="calendar-month-title">${capitalizedMonth} ${year}</h3>
        <div class="calendar-weekdays">
          <span>Lu</span><span>Ma</span><span>Mi</span><span>Ju</span><span>Vi</span><span>Sá</span><span>Do</span>
        </div>
        <div class="calendar-days" id="calendar-days-container">
          <!-- Generado dinámicamente por JS -->
        </div>
      </div>
 
      <div class="hours-section" id="hours-container" style="display: none;">
        <h4 class="hours-title">Horas Disponibles</h4>
        <div class="hours-grid">
          <button class="btn-hour" onclick="selectHour('10:00')">10:00</button>
          <button class="btn-hour" onclick="selectHour('11:30')">11:30</button>
          <button class="btn-hour" onclick="selectHour('15:00')">15:00</button>
          <button class="btn-hour" onclick="selectHour('17:00')">17:00</button>
        </div>
      </div>
 
      <div id="confirm-bar" class="confirm-bar" style="display: none;">
        <button class="btn-confirm" onclick="confirmBooking()">Confirmar Reserva</button>
      </div>
    </div>
 
    <!-- Pantalla 3: Éxito -->
    <div id="screen-success" class="booking-screen text-center">
      <div class="success-icon">✅</div>
      <h2 class="success-title">¡Reserva Confirmada con éxito!</h2>
      
      <div class="booking-summary-box">
        <p><strong>Servicio:</strong> <span id="summary-service">-</span></p>
        <p><strong>Fecha:</strong> <span id="summary-date">-</span></p>
        <p><strong>Hora:</strong> <span id="summary-time">-</span></p>
      </div>
 
      <button class="btn-reset" onclick="resetBooking()">Reservar otra cita</button>
    </div>
  </div>
 
  <style>
    .demo-booking-widget {
      max-width: 400px;
      margin: 10px auto;
      background: #ffffff;
      border-radius: 20px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
      border: 1px solid #e2e8f0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      overflow: hidden;
    }
    .booking-widget-container {
      padding: 24px;
    }
    .booking-screen {
      display: none;
    }
    .booking-screen.active {
      display: block;
      animation: fadeInWidget 0.3s ease-out;
    }
    @keyframes fadeInWidget {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .booking-title {
      font-size: 20px;
      font-weight: 800;
      color: #111111;
      text-align: center;
      margin: 0 0 4px 0;
    }
    .booking-subtitle {
      font-size: 13px;
      color: #64748b;
      text-align: center;
      margin: 0 0 20px 0;
    }
    .services-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .service-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .service-card:hover {
      border-color: #d4af37;
      background: #ffffff;
      box-shadow: 0 4px 12px rgba(212, 175, 55, 0.05);
    }
    .service-card:active {
      transform: scale(0.98);
    }
    .service-details {
      display: flex;
      flex-direction: column;
      gap: 4px;
      max-width: 70%;
      text-align: left;
    }
    .service-name {
      font-size: 14px;
      font-weight: 700;
      color: #111111;
    }
    .service-description {
      font-size: 11px;
      color: #64748b;
      line-height: 1.3;
    }
    .service-meta {
      display: flex;
      gap: 12px;
      font-size: 12px;
      margin-top: 4px;
    }
    .service-price {
      font-weight: 700;
      color: #111111;
    }
    .service-duration {
      color: #94a3b8;
    }
    .btn-select {
      background: #111111;
      color: #ffffff;
      border: none;
      font-size: 11px;
      font-weight: 700;
      padding: 8px 12px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .service-card:hover .btn-select {
      background: #d4af37;
    }
    .btn-select:active {
      transform: scale(0.95);
    }
    .screen-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 20px;
    }
    .btn-back {
      background: transparent;
      border: none;
      font-size: 12px;
      font-weight: 700;
      color: #64748b;
      cursor: pointer;
      padding: 4px 0;
    }
    .btn-back:hover {
      color: #111111;
    }
    .header-title {
      font-size: 15px;
      font-weight: 700;
      color: #111111;
    }
    .calendar-section {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 12px;
      margin-bottom: 16px;
    }
    .calendar-month-title {
      font-size: 13px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #111111;
      margin: 0 0 12px 0;
      text-align: center;
    }
    .calendar-weekdays {
      display: grid;
      grid-template-cols: repeat(7, 1fr);
      text-align: center;
      font-size: 10px;
      font-weight: 700;
      color: #94a3b8;
      margin-bottom: 8px;
    }
    .calendar-days {
      display: grid;
      grid-template-cols: repeat(7, 1fr);
      gap: 4px;
    }
    .cal-day {
      aspect-ratio: 1;
      background: transparent;
      border: none;
      font-size: 11px;
      font-weight: 600;
      border-radius: 6px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      color: #111111;
    }
    .cal-day:hover:not(:disabled) {
      background: #e2e8f0;
    }
    .cal-day:disabled {
      color: #cbd5e1;
      cursor: not-allowed;
    }
    .cal-day.selected {
      background: #111111;
      color: #ffffff;
    }
    .hours-section {
      animation: fadeInWidget 0.2s ease-out;
    }
    .hours-title {
      font-size: 12px;
      font-weight: 700;
      color: #64748b;
      margin: 0 0 10px 0;
      text-align: left;
    }
    .hours-grid {
      display: grid;
      grid-template-cols: repeat(4, 1fr);
      gap: 8px;
      margin-bottom: 20px;
    }
    .btn-hour {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      font-size: 11px;
      font-weight: 700;
      color: #111111;
      padding: 10px 0;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .btn-hour:hover {
      border-color: #d4af37;
    }
    .btn-hour.selected {
      background: #d4af37;
      color: #ffffff;
      border-color: transparent;
    }
    .confirm-bar {
      margin-top: 16px;
      animation: fadeInWidget 0.25s ease-out;
    }
    .btn-confirm {
      width: 100%;
      background: #111111;
      color: #ffffff;
      border: none;
      font-size: 13px;
      font-weight: 750;
      padding: 12px;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    }
    .btn-confirm:hover {
      background: #d4af37;
    }
    .btn-confirm:active {
      transform: scale(0.98);
    }
    .text-center {
      text-align: center;
    }
    .success-icon {
      font-size: 40px;
      margin-bottom: 12px;
    }
    .success-title {
      font-size: 18px;
      font-weight: 800;
      color: #10b981;
      margin: 0 0 16px 0;
    }
    .booking-summary-box {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 24px;
      font-size: 12px;
      text-align: left;
      color: #334155;
    }
    .booking-summary-box p {
      margin: 6px 0;
      display: flex;
      justify-content: space-between;
    }
    .booking-summary-box strong {
      color: #64748b;
    }
    .btn-reset {
      background: transparent;
      border: 1px solid #cbd5e1;
      color: #64748b;
      font-size: 12px;
      font-weight: 700;
      padding: 10px 20px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .btn-reset:hover {
      border-color: #111111;
      color: #111111;
    }
    .btn-reset:active {
      transform: scale(0.97);
    }
  </style>
 
  <script>
    let bookingData = {
      serviceId: '',
      serviceName: '',
      price: 0,
      duration: 0,
      day: null,
      hour: ''
    };
 
    function showScreen(screenNum) {
      document.querySelectorAll('.booking-screen').forEach(s => s.classList.remove('active'));
      if (screenNum === 1) {
        document.getElementById('screen-services').classList.add('active');
      } else if (screenNum === 2) {
        document.getElementById('screen-datetime').classList.add('active');
        renderCalendar();
      } else if (screenNum === 3) {
        document.getElementById('screen-success').classList.add('active');
      }
    }
 
    function selectService(id, name, price, duration) {
      bookingData.serviceId = id;
      bookingData.serviceName = name;
      bookingData.price = price;
      bookingData.duration = duration;
      bookingData.day = null;
      bookingData.hour = '';
      
      // Reset UI states
      document.getElementById('hours-container').style.display = 'none';
      document.getElementById('confirm-bar').style.display = 'none';
      
      showScreen(2);
    }
 
    function selectDay(dayNum) {
      bookingData.day = dayNum;
      bookingData.hour = '';
      
      // Update calendar selection
      document.querySelectorAll('.cal-day').forEach(btn => {
        btn.classList.remove('selected');
        if (parseInt(btn.innerText) === dayNum && !btn.disabled) {
          btn.classList.add('selected');
        }
      });
 
      // Reset hour button highlights
      document.querySelectorAll('.btn-hour').forEach(btn => btn.classList.remove('selected'));
      
      // Show hours
      document.getElementById('hours-container').style.display = 'block';
      document.getElementById('confirm-bar').style.display = 'none';
    }
 
    function selectHour(hourString) {
      bookingData.hour = hourString;
      
      // Highlight hour button
      document.querySelectorAll('.btn-hour').forEach(btn => {
        btn.classList.remove('selected');
        if (btn.innerText === hourString) {
          btn.classList.add('selected');
        }
      });
 
      // Show confirm bar
      document.getElementById('confirm-bar').style.display = 'block';
    }
 
    function confirmBooking() {
      // Set summary texts
      document.getElementById('summary-service').innerText = bookingData.serviceName;
      document.getElementById('summary-date').innerText = bookingData.day + ' de ${capitalizedMonth}';
      document.getElementById('summary-time').innerText = bookingData.hour + ' hrs';
      
      showScreen(3);
    }
 
    function resetBooking() {
      bookingData = { serviceId: '', serviceName: '', price: 0, duration: 0, day: null, hour: '' };
      showScreen(1);
    }
 
    function renderCalendar() {
      const container = document.getElementById('calendar-days-container');
      container.innerHTML = '';
      
      const startOffset = ${adjustedStartDay};
      const daysCount = ${daysInMonth};
      const currentDay = ${today.getDate()};
 
      // Padding offsets
      for (let i = 0; i < startOffset; i++) {
        const spacer = document.createElement('div');
        container.appendChild(spacer);
      }
 
      // Days buttons
      for (let d = 1; d <= daysCount; d++) {
        const btn = document.createElement('button');
        btn.className = 'cal-day';
        btn.innerText = d;
        
        // Disable past days
        if (d < currentDay) {
          btn.disabled = true;
        } else {
          btn.onclick = () => selectDay(d);
        }
        
        container.appendChild(btn);
      }
    }
  </script>
</div>`;
 
  const handleCopy = () => {
    navigator.clipboard.writeText(rawHtmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
 
  return (
    <div className="demo-booking-widget flex flex-col items-center w-full">
      
      {/* Top Banner showing this is a fully customizable widget */}
      <div className="w-full bg-slate-900 text-white px-4 py-2 flex justify-between items-center text-xs shrink-0 rounded-t-2xl">
        <div className="flex items-center space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="font-bold tracking-tight uppercase text-[10px] text-slate-300">Widget Prototipo Barbería</span>
        </div>
        <button
          onClick={() => setShowCodeModal(true)}
          className="flex items-center space-x-1 bg-white/10 hover:bg-white/20 px-2 py-1 rounded text-[9px] font-black uppercase tracking-wider text-amber-400 transition-colors cursor-pointer"
        >
          <Code className="h-3 w-3" />
          <span>Obtener Código HTML</span>
        </button>
      </div>
 
      {/* Widget Frame resembling a smartphone screen or encapsulated container */}
      <div className="w-full max-w-[340px] bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden flex flex-col my-4">
        
        {/* Screen 1: Services */}
        {screen === 1 && (
          <div className="p-5 space-y-4 animate-fade-in">
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
                    <p className="text-[10px] text-slate-500 leading-snug">{service.description}</p>
                    <div className="flex gap-3 text-[11px] font-bold">
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
        )}
 
        {/* Screen 2: Date & Time */}
        {screen === 2 && selectedService && (
          <div className="p-5 space-y-4 animate-fade-in">
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
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
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
                        setSelectedHour(null); // Reset hour when day changes
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
 
            {/* Hours list, shows only when day is selected */}
            {selectedDay !== null && (
              <div className="space-y-2 animate-fade-in">
                <h5 className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <Clock className="h-3 w-3 text-amber-500" />
                  <span>Horas Disponibles</span>
                </h5>
                <div className="grid grid-cols-4 gap-2">
                  {HOURS.map((hour) => {
                    const isSelected = selectedHour === hour;
                    return (
                      <button
                        key={hour}
                        onClick={() => setSelectedHour(hour)}
                        className={`py-2 text-[11px] font-bold rounded-lg border transition-all cursor-pointer ${
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
          <div className="p-6 text-center space-y-6 animate-fade-in">
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
                <span className="font-extrabold text-neutral-900">{selectedService.name}</span>
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
              className="bg-white hover:bg-slate-50 border border-slate-300 hover:border-neutral-900 text-slate-600 hover:text-neutral-900 text-[11px] font-black px-5 py-2.5 rounded-lg transition-colors cursor-pointer active:scale-95"
            >
              Volver al inicio
            </button>
          </div>
        )}
      </div>
 
      {/* Code Modal */}
      {showCodeModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
            
            <div className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center shrink-0">
              <div className="flex items-center space-x-2">
                <Code className="h-5 w-5 text-amber-400" />
                <h3 className="font-black text-sm uppercase tracking-wider">Código de Integración del Widget</h3>
              </div>
              <button
                onClick={() => setShowCodeModal(false)}
                className="text-slate-400 hover:text-white font-black text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>
 
            <div className="p-6 overflow-y-auto space-y-4 text-left">
              <p className="text-xs text-slate-600 leading-relaxed">
                Este código contiene todo el HTML, CSS estructurado y la lógica en Vanilla Javascript encapsulada bajo el namespace <code className="bg-slate-100 px-1 py-0.5 rounded text-amber-600 font-mono">.demo-booking-widget</code>. Copia este bloque de código y pégalo directamente en tu bloque HTML en WordPress, Elementor o cualquier constructor de sitios web.
              </p>
 
              <div className="relative">
                <pre className="bg-slate-950 text-slate-300 text-[10px] font-mono p-4 rounded-xl overflow-x-auto max-h-[40vh] border border-slate-800">
                  {rawHtmlCode}
                </pre>
                
                <button
                  onClick={handleCopy}
                  className="absolute top-3.5 right-3.5 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1 cursor-pointer"
                >
                  <Copy className="h-3.5 w-3.5" />
                  <span>{copied ? "¡Copiado!" : "Copiar Código"}</span>
                </button>
              </div>
            </div>
 
            <div className="bg-slate-50 px-6 py-4 flex justify-end shrink-0 border-t border-slate-200">
              <button
                onClick={() => setShowCodeModal(false)}
                className="bg-neutral-900 hover:bg-neutral-800 text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider cursor-pointer"
              >
                Listo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
