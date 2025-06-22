import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Activities from "@/components/Activities";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Activities />
      <About />
      <Contact />
    </main>
  );
}
