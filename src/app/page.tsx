import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import NicheSolutions from "@/components/NicheSolutions";
import BannerAnimado from "@/components/BannerAnimado";
import Demos from "@/components/Demos";
import TurnkeyKit from "@/components/TurnkeyKit";
import NosotrosSection from "@/components/NosotrosSection";
import QuoteForm from "@/components/QuoteForm";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <BannerAnimado />
        <Hero />
        <Services />
        <NicheSolutions />
        <Demos />
        <TurnkeyKit />
        <NosotrosSection />
        <QuoteForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
