import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Activities from "@/components/Activities";
import About from "@/components/About";
import Contact from "@/components/Contact";
import MarqueeBanner from "@/components/MarqueeBanner";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Navbar /> 
      <MarqueeBanner />
      <Activities />
      <About />
      <Contact />
    </main>
  );
}
