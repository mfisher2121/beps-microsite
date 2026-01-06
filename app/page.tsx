import Hero from "../components/Hero";
import Pathways from "../components/Pathways";
import Pricing from "../components/Pricing";
import Qualification from "../components/Qualification";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      <Hero />
      <Pathways />
      <Pricing />
      <Qualification />
      <Footer />
    </main>
  );
}

