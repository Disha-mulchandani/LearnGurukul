import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Subjects from "@/components/Subjects";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Subjects />
      <Benefits />
      <Testimonials />
      <FAQ />
      <CTA />
      <WhatsappButton />
    </>
  );
}
