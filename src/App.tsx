import ButtonGradient from "./assets/svg/ButtonGradient.js";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
// import { Section } from "./components/Section.tsx";
import Benefits from "./components/Benefits.tsx";
import Features from "./components/Features.tsx";
import Pricing from "./components/Pricing.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Features />
        <Benefits />
        <Pricing />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
}

export default App;
