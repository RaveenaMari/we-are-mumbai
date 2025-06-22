import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Activities from "@/components/Activities";
import About from "@/components/About";
import Contact from "@/components/Contact";
import QuoteForm from "@/components/QuoteForm";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Activities />
      <About />
      <QuoteForm />
      <Contact />
    </main>
  );
}
