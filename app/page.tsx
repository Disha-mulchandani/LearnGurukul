import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Subjects from "@/components/Subjects";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
export default function Home() {
  return (
    <main>

      <Navbar />
      <Hero />
      <Stats />
      <Subjects />
      <Benefits />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsappButton />
      
    </main>
  );
}