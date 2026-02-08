import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutEvent } from "@/components/about-event";
import { DogsGrid } from "@/components/dogs-grid";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutEvent />
        <DogsGrid />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
