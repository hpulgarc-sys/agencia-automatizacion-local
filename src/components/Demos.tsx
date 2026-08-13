"use client";

import { useState, useEffect } from "react";
import { ShoppingBag, ChefHat, CheckCircle2, RotateCcw, AlertCircle, Plus, Minus } from "lucide-react";
import BarberBookingDemo from "./BarberBookingDemo";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  id: string;
  orderNum: number;
  items: CartItem[];
  total: number;
  status: "Preparando" | "Listo";
  timestamp: Date;
}

const MENU_ITEMS = [
  { id: "salmon", name: "Bowl Salmón Premium", price: 8990, desc: "Base de arroz sushi, salmón fresco, palta, pepino, sésamo y aderezo ponzu." },
  { id: "crispy", name: "Bowl Pollo Crispy", price: 6990, desc: "Pollo crispy crujiente, choclo, zanahoria rallada, cebollín y salsa teriyaki." },
  { id: "veggie", name: "Bowl Vegano Zen", price: 6590, desc: "Tofu marinado, edamame, col morada, mango y aderezo cremosa de maní." },
];

export default function Demos() {
  const [demoTab, setDemoTab] = useState<"restaurante" | "barberia">("restaurante");
  const [cart, setCart] = useState<CartItem[]>([]);
  
  // Use a pure fixed date initialization or lazy state initializer
  const [orders, setOrders] = useState<Order[]>(() => {
    const initialDate = new Date();
    initialDate.setMinutes(initialDate.getMinutes() - 4);
    return [
      {
        id: "order-1",
        orderNum: 1039,
        items: [
          { id: "salmon", name: "Bowl Salmón Premium", price: 8990, quantity: 1 },
          { id: "veggie", name: "Bowl Vegano Zen", price: 6590, quantity: 1 },
        ],
        total: 15580,
        status: "Preparando",
        timestamp: initialDate,
      },
    ];
  });
  const [orderNumCounter, setOrderNumCounter] = useState(1040);
  const [viewMode, setViewMode] = useState<"client" | "kitchen">("client");
  const [orderSuccessMsg, setOrderSuccessMsg] = useState(false);

  // Sound notification using Web Audio API
  const playNotificationSound = () => {
    try {
      const WebkitAudio = typeof window !== 'undefined' && 'webkitAudioContext' in window 
        ? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext 
        : null;
      const AudioCtxClass = window.AudioContext || WebkitAudio;
      if (!AudioCtxClass) return;
      
      const audioCtx = new AudioCtxClass();
      
      // Chime note 1
      const osc1 = audioCtx.createOscillator();
      const gain1 = audioCtx.createGain();
      osc1.connect(gain1);
      gain1.connect(audioCtx.destination);
      osc1.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
      gain1.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
      osc1.start(audioCtx.currentTime);
      osc1.stop(audioCtx.currentTime + 0.15);

      // Chime note 2 (slightly delayed)
      const osc2 = audioCtx.createOscillator();
      const gain2 = audioCtx.createGain();
      osc2.connect(gain2);
      gain2.connect(audioCtx.destination);
      osc2.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.12); // E5
      gain2.gain.setValueAtTime(0.08, audioCtx.currentTime + 0.12);
      gain2.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.32);
      osc2.start(audioCtx.currentTime + 0.12);
      osc2.stop(audioCtx.currentTime + 0.32);
      
    } catch (e) {
      console.log("Audio API blocked or not supported", e);
    }
  };

  // Add to cart
  const addToCart = (item: typeof MENU_ITEMS[0]) => {
    setCart((prevCart) => {
      const existing = prevCart.find((ci) => ci.id === item.id);
      if (existing) {
        return prevCart.map((ci) =>
          ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prevCart, { id: item.id, name: item.name, price: item.price, quantity: 1 }];
    });
  };

  // Adjust cart item quantity
  const updateQuantity = (itemId: string, delta: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((ci) => {
          if (ci.id === itemId) {
            const nextQty = ci.quantity + delta;
            return { ...ci, quantity: nextQty };
          }
          return ci;
        })
        .filter((ci) => ci.quantity > 0);
    });
  };

  // Place order
  const handlePlaceOrder = () => {
    if (cart.length === 0) return;

    const newOrder: Order = {
      id: `order-${Date.now()}`,
      orderNum: orderNumCounter,
      items: [...cart],
      total: cart.reduce((acc, ci) => acc + ci.price * ci.quantity, 0),
      status: "Preparando",
      timestamp: new Date(),
    };

    setOrders((prevOrders) => [...prevOrders, newOrder]);
    setOrderNumCounter((prev) => prev + 1);
    setCart([]); // Clear cart
    setOrderSuccessMsg(true);
    playNotificationSound();

    // Reset success message after 4s
    setTimeout(() => {
      setOrderSuccessMsg(false);
    }, 4000);
  };

  // Complete order on KDS
  const handleCompleteOrder = (orderId: string) => {
    setOrders((prevOrders) =>
      prevOrders.map((o) => (o.id === orderId ? { ...o, status: "Listo" } : o))
    );
  };

  // Remove order from list (despacho)
  const handleDismissOrder = (orderId: string) => {
    setOrders((prevOrders) => prevOrders.filter((o) => o.id !== orderId));
  };

  // Reset simulator to initial state
  const handleResetSimulator = () => {
    setCart([]);
    setOrders([
      {
        id: "order-initial",
        orderNum: 1039,
        items: [
          { id: "salmon", name: "Bowl Salmón Premium", price: 8990, quantity: 1 },
          { id: "veggie", name: "Bowl Vegano Zen", price: 6590, quantity: 1 },
        ],
        total: 15580,
        status: "Preparando",
        timestamp: new Date(Date.now() - 5 * 60000),
      },
    ]);
    setOrderNumCounter(1040);
    setOrderSuccessMsg(false);
  };

  // Calculate elapsed time strings for orders
  const [elapsedTimes, setElapsedTimes] = useState<Record<string, string>>({});

  useEffect(() => {
    const updateTimes = () => {
      const times: Record<string, string> = {};
      orders.forEach((o) => {
        const diffMs = Date.now() - o.timestamp.getTime();
        const diffSecs = Math.floor(diffMs / 1000);
        const diffMins = Math.floor(diffSecs / 60);

        if (diffMins < 1) {
          times[o.id] = "Hace segundos";
        } else {
          times[o.id] = `Hace ${diffMins} min`;
        }
      });
      setElapsedTimes(times);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 15000); // Update every 15s
    return () => clearInterval(interval);
  }, [orders]);

  const cartTotal = cart.reduce((acc, ci) => acc + ci.price * ci.quantity, 0);
 
  return (
    <section id="demos" className="py-20 bg-slate-cold border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Demos en Vivo
          </h2>
          <p className="text-3xl font-extrabold text-primary tracking-tight sm:text-4xl">
            Prueba el Sistema en Tiempo Real
          </p>
          
          {demoTab === "restaurante" ? (
            <>
              <p className="text-base text-slate-650 max-w-2xl mx-auto">
                Haz un pedido simulado en la demo de la izquierda (Menú de Bowls) y observa cómo entra instantáneamente en el Monitor de Cocina (KDS) de la derecha.
              </p>
              <button
                onClick={handleResetSimulator}
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-primary border border-slate-200 hover:border-primary bg-white px-3 py-1.5 rounded-lg shadow-sm transition-all cursor-pointer"
              >
                <RotateCcw className="h-3 w-3" />
                <span>Reiniciar Simulador</span>
              </button>
            </>
          ) : (
            <p className="text-base text-slate-650 max-w-2xl mx-auto">
              Prueba el agendamiento digital interactivo. Selecciona un servicio, elige día y hora, y confirma la cita para ver el flujo en vivo.
            </p>
          )}
        </div>
 
        {/* Switch Selector */}
        <div className="flex items-center justify-center space-x-4 mb-12 select-none">
          <span className={`text-[11px] font-black tracking-wider uppercase transition-colors duration-300 ${
            demoTab === "restaurante" ? "text-primary" : "text-slate-400"
          }`}>
            🍔 Gastronomía & KDS
          </span>
          
          <button
            onClick={() => setDemoTab(demoTab === "restaurante" ? "barberia" : "restaurante")}
            className="w-14 h-8 bg-slate-200 border border-slate-350/30 rounded-full p-1 transition-colors duration-300 relative focus:outline-none cursor-pointer"
            aria-label="Alternar Demostración"
          >
            <div
              className={`w-6 h-6 rounded-full shadow transition-all duration-300 flex items-center justify-center ${
                demoTab === "barberia" 
                  ? "translate-x-6 bg-primary" 
                  : "translate-x-0 bg-accent"
              }`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            </div>
          </button>
 
          <span className={`text-[11px] font-black tracking-wider uppercase transition-colors duration-300 ${
            demoTab === "barberia" ? "text-primary" : "text-slate-400"
          }`}>
            ✂️ Barbería Premium
          </span>
        </div>
 
        {demoTab === "restaurante" ? (
          <>
            {/* Tab Toggle buttons for Mobile Layout */}
            <div className="flex md:hidden justify-center space-x-2 mb-8 bg-slate-200/60 p-1.5 rounded-xl max-w-sm mx-auto">
              <button
                onClick={() => setViewMode("client")}
                className={`flex-1 flex items-center justify-center space-x-1.5 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === "client"
                    ? "bg-primary text-white shadow-sm"
                    : "text-slate-600 hover:text-primary"
                }`}
              >
                <ShoppingBag className="h-3.5 w-3.5" />
                <span>1. Menú Bowls (Cliente)</span>
              </button>
              <button
                onClick={() => setViewMode("kitchen")}
                className={`flex-1 flex items-center justify-center space-x-1.5 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === "kitchen"
                    ? "bg-primary text-white shadow-sm"
                    : "text-slate-600 hover:text-primary"
                }`}
              >
                <ChefHat className="h-3.5 w-3.5" />
                <span>2. Monitor KDS (Cocina)</span>
                {orders.filter((o) => o.status === "Preparando").length > 0 && (
                  <span className="bg-accent text-primary text-[9px] px-1.5 py-0.5 rounded-full shrink-0 font-black animate-pulse">
                    {orders.filter((o) => o.status === "Preparando").length}
                  </span>
                )}
              </button>
            </div>
 
            {/* Main Simulator Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Lado A: Client Mobile View */}
              <div className={`md:col-span-5 ${viewMode === "client" ? "block" : "hidden md:block"}`}>
                <h3 className="text-center font-bold text-primary text-sm mb-3 uppercase tracking-wider hidden md:block">
                  📱 Vista de Cliente (Menú Digital)
                </h3>
                
                {/* Phone Mockup Frame */}
                <div className="relative mx-auto max-w-[340px] border-[10px] border-primary rounded-[36px] bg-white shadow-2xl overflow-hidden aspect-[9/18] flex flex-col">
                  
                  {/* Phone Header / Status Bar */}
                  <div className="bg-primary text-white h-7 flex items-center justify-between px-6 text-[10px] select-none font-medium shrink-0">
                    <span>12:30</span>
                    <div className="w-16 h-4 bg-slate-950 rounded-full flex items-center justify-center border border-slate-800 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-slate-700" />
                    </div>
                    <span>100% 🔋</span>
                  </div>
 
                  {/* In-App Brand Header */}
                  <div className="bg-slate-cold border-b border-slate-150 px-4 py-3 shrink-0 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-primary uppercase tracking-tight">BOWLS HEALTHY LOCAL</h4>
                      <span className="text-[9px] text-slate-400 font-medium">Región de O&apos;Higgins</span>
                    </div>
                    <span className="bg-accent/15 border border-accent/25 text-primary text-[8px] font-black px-1.5 py-0.5 rounded">
                      QR ACTIVO
                    </span>
                  </div>
 
                  {/* Phone Body (Menu list) */}
                  <div className="flex-grow overflow-y-auto p-4 space-y-4">
                    
                    {orderSuccessMsg && (
                      <div className="bg-primary text-white p-3 rounded-xl shadow-md border border-primary-light/50 flex items-start space-x-2 animate-bounce">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[10px] font-bold">¡Pedido enviado a Cocina!</p>
                          <p className="text-[9px] text-slate-300">Revisa el monitor KDS al costado.</p>
                        </div>
                      </div>
                    )}
 
                    <div className="space-y-3">
                      <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Carta Digital</h5>
                      
                      {MENU_ITEMS.map((item) => (
                        <div key={item.id} className="p-3 bg-slate-cold border border-slate-200/80 rounded-xl flex flex-col justify-between space-y-2.5">
                          <div>
                            <div className="flex justify-between items-start">
                              <h6 className="text-[11px] font-bold text-primary">{item.name}</h6>
                              <span className="text-[11px] font-bold text-primary">${item.price.toLocaleString("es-CL")}</span>
                            </div>
                            <p className="text-[9px] text-slate-550 leading-tight mt-1">{item.desc}</p>
                          </div>
                          
                          <div className="flex justify-between items-center pt-1">
                            {/* If in cart, show counter. Otherwise, show add button */}
                            {cart.find((ci) => ci.id === item.id) ? (
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => updateQuantity(item.id, -1)}
                                  className="w-5 h-5 rounded-full bg-white border border-slate-200 hover:border-accent flex items-center justify-center text-primary hover:bg-slate-50 font-bold text-xs cursor-pointer"
                                >
                                  <Minus className="h-2.5 w-2.5" />
                                </button>
                                <span className="text-[10px] font-bold w-4 text-center">
                                  {cart.find((ci) => ci.id === item.id)?.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.id, 1)}
                                  className="w-5 h-5 rounded-full bg-white border border-slate-200 hover:border-accent flex items-center justify-center text-primary hover:bg-slate-50 font-bold text-xs cursor-pointer"
                                >
                                  <Plus className="h-2.5 w-2.5" />
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() => addToCart(item)}
                                className="bg-primary hover:bg-navy-light text-white hover:text-accent text-[9px] font-bold px-3 py-1.5 rounded-lg border border-transparent transition-colors ml-auto cursor-pointer"
                              >
                                Agregar al Bowl
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
 
                  </div>
 
                  {/* Phone Footer (Cart Summary & Order button) */}
                  <div className="bg-slate-cold border-t border-slate-200 p-4 shrink-0 space-y-3">
                    <div className="flex justify-between items-center text-xs font-bold text-primary">
                      <span>Total Pedido:</span>
                      <span>${cartTotal.toLocaleString("es-CL")}</span>
                    </div>
 
                    <button
                      disabled={cart.length === 0}
                      onClick={handlePlaceOrder}
                      className={`w-full py-3 rounded-xl text-center text-[11px] font-extrabold tracking-wide uppercase transition-all flex items-center justify-center space-x-1.5 border ${
                        cart.length > 0
                          ? "bg-accent text-primary border-transparent hover:bg-emerald-400 cursor-pointer shadow-sm"
                          : "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed"
                      }`}
                    >
                      <ShoppingBag className="h-3.5 w-3.5" />
                      <span>Enviar Pedido a Cocina</span>
                    </button>
                  </div>
 
                </div>
              </div>
 
              {/* Lado B: Kitchen KDS Monitor View */}
              <div className={`md:col-span-7 ${viewMode === "kitchen" ? "block" : "hidden md:block"}`}>
                <h3 className="text-center font-bold text-primary text-sm mb-3 uppercase tracking-wider hidden md:block">
                  🖥️ Vista de Cocina (Monitor KDS)
                </h3>
                
                {/* Tablet Mockup Frame */}
                <div className="w-full bg-slate-950 rounded-[24px] p-3 sm:p-4 shadow-2xl border-4 border-primary aspect-[4/3] sm:aspect-[1.5] flex flex-col overflow-hidden min-h-[360px]">
                  
                  {/* KDS Header */}
                  <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-4 shrink-0">
                    <div className="flex items-center space-x-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-accent animate-ping" />
                      <span className="h-2.5 w-2.5 absolute rounded-full bg-accent" />
                      <h4 className="text-xs font-black text-white uppercase tracking-wider pl-4">
                        Monitor de Cocina KDS
                      </h4>
                    </div>
                    <div className="flex items-center space-x-2 text-[10px] text-slate-400">
                      <span className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800 font-bold">
                        Región de O&apos;Higgins
                      </span>
                      <span>|</span>
                      <span className="font-semibold text-accent">Online</span>
                    </div>
                  </div>
 
                  {/* KDS Active Tickets Grid */}
                  <div className="flex-grow overflow-x-auto pb-2 flex gap-4 items-start select-none">
                    {orders.length === 0 ? (
                      <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 space-y-3 py-12">
                        <AlertCircle className="h-8 w-8 text-slate-600 animate-pulse" />
                        <p className="text-xs font-semibold">No hay comandas activas en la cocina.</p>
                        <p className="text-[10px] text-slate-600">Envía un pedido desde la demo de Bowls en el celular.</p>
                      </div>
                    ) : (
                      orders.map((order) => (
                        <div
                          key={order.id}
                          className={`w-[190px] sm:w-[210px] shrink-0 rounded-xl border flex flex-col justify-between shadow-md transition-all duration-300 animate-fade-in ${
                            order.status === "Listo"
                              ? "bg-slate-900/60 border-slate-800 opacity-60"
                              : "bg-white border-slate-350 shadow-md text-slate-800"
                          }`}
                        >
                          {/* Ticket Header */}
                          <div
                            className={`p-3 rounded-t-xl flex justify-between items-center border-b ${
                              order.status === "Listo"
                                ? "bg-slate-900/40 border-slate-800 text-slate-400"
                                : "bg-slate-cold border-slate-200 text-primary"
                            }`}
                          >
                            <div>
                              <span className="text-[11px] font-black">#ORDEN {order.orderNum}</span>
                              <span className="text-[9px] block font-semibold text-slate-400">
                                {elapsedTimes[order.id] || "Hace instantes"}
                              </span>
                            </div>
                            <span
                              className={`text-[9px] font-black uppercase px-2 py-0.5 rounded ${
                                order.status === "Listo"
                                  ? "bg-slate-800 text-slate-500"
                                  : "bg-gold/15 text-gold border border-gold/25"
                              }`}
                            >
                              {order.status}
                            </span>
                          </div>
 
                          {/* Ticket Items */}
                          <div className="p-3.5 flex-grow space-y-2 max-h-[140px] overflow-y-auto">
                            {order.items.map((item, idx) => (
                              <div key={idx} className="flex justify-between items-start text-[10.5px]">
                                <span className={`font-semibold ${order.status === "Listo" ? "text-slate-500" : "text-slate-700"}`}>
                                  <span className="font-black text-primary bg-slate-cold border border-slate-250 px-1 rounded mr-1">
                                    {item.quantity}x
                                  </span>
                                  {item.name}
                                </span>
                              </div>
                            ))}
                          </div>
 
                          {/* Ticket Footer / Action */}
                          <div className="p-3 border-t border-slate-100 bg-slate-cold rounded-b-xl flex flex-col space-y-2">
                            <div className="flex justify-between items-center text-[10px] font-bold text-slate-500">
                              <span>Total Pago:</span>
                              <span className="text-primary font-black">${order.total.toLocaleString("es-CL")}</span>
                            </div>
                            
                            {order.status === "Listo" ? (
                              <button
                                onClick={() => handleDismissOrder(order.id)}
                                className="w-full py-1.5 bg-slate-200 border border-slate-300 hover:bg-slate-300 text-slate-700 rounded-lg text-[9px] font-bold tracking-wider uppercase transition-colors cursor-pointer"
                              >
                                Despachar Ticket
                              </button>
                            ) : (
                              <button
                                onClick={() => handleCompleteOrder(order.id)}
                                className="w-full py-2 bg-accent hover:bg-emerald-400 text-primary border border-transparent rounded-lg text-[9px] font-bold tracking-wider uppercase transition-colors flex items-center justify-center space-x-1 cursor-pointer"
                              >
                                <CheckCircle2 className="h-3 w-3 text-primary" />
                                <span>Marcar como Listo</span>
                              </button>
                            )}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
 
                </div>
              </div>
 
            </div>
          </>
        ) : (
          /* Lado C: Premium Barber Booking Widget */
          <div className="flex flex-col items-center justify-center space-y-6 animate-fade-in">
            <div className="text-center max-w-lg mb-2 space-y-2">
              <span className="inline-flex bg-accent/15 border border-accent/25 text-primary text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                Widget 100% Autónomo e Integrable
              </span>
              <p className="text-xs text-slate-500">
                Simula el flujo completo de agendamiento online. Haz clic en el botón <strong className="text-amber-500">&apos;Obtener Código HTML&apos;</strong> en el widget para copiar la solución lista para tu WordPress o web a medida.
              </p>
            </div>
 
            {/* Phone Mockup Frame containing Barber booking widget */}
            <div className="relative w-full max-w-[340px] border-[10px] border-primary rounded-[36px] bg-white shadow-2xl overflow-hidden flex flex-col min-h-[520px]">
              
              {/* Phone Header / Status Bar */}
              <div className="bg-primary text-white h-7 flex items-center justify-between px-6 text-[10px] select-none font-medium shrink-0">
                <span>14:45</span>
                <div className="w-16 h-4 bg-slate-950 rounded-full flex items-center justify-center border border-slate-800 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
                </div>
                <span>100% 🔋</span>
              </div>
 
              <div className="flex-grow overflow-y-auto bg-white flex flex-col justify-start">
                <BarberBookingDemo />
              </div>
            </div>
          </div>
        )}
 
      </div>
    </section>
  );
}
