import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Demos from "@/components/Demos";
import QuoteForm from "@/components/QuoteForm";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Demos />
        <QuoteForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
