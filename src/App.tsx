import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Process } from "./components/Process";
import { Packages } from "./components/Packages";
import { Industries } from "./components/Industries";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppCTA } from "./components/WhatsAppCTA";
import { contentData } from "./data/content";

function App() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const t = contentData[lang];

  // Set document direction and language code based on current language
  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className={`min-h-screen bg-brand-bg text-white overflow-hidden transition-all duration-300 ${
      lang === "ar" ? "font-arabic" : "font-sans"
    }`}>
      {/* Navigation Header */}
      <Header t={t} lang={lang} setLang={setLang} />

      {/* Main Content Layout */}
      <main>
        {/* Hero Banner Section */}
        <Hero t={t} lang={lang} />

        {/* Built for Iraq (Trust) + Why Choose Us (6 reasons) */}
        <WhyChooseUs t={t} lang={lang} />

        {/* 10 Premium Marketing Services */}
        <Services t={t} lang={lang} />

        {/* Portfolio / Elegantly labelled case study placeholders */}
        <Portfolio t={t} lang={lang} />

        {/* Growth Process Roadmap (Discover, Plan, Create, Launch, Report) */}
        <Process t={t} lang={lang} />

        {/* Packaging Options (Starter, Growth, Partner) */}
        <Packages t={t} lang={lang} />

        {/* Target Industries Grid */}
        <Industries t={t} lang={lang} />

        {/* Testimonials Placeholder warning box */}
        <Testimonials t={t} lang={lang} />

        {/* FAQ Collapsible Accordions */}
        <FAQ t={t} lang={lang} />

        {/* Call to Action Contact Form (with direct WhatsApp redirect compiler) */}
        <Contact t={t} lang={lang} />
      </main>

      {/* Footer copyright, nav redirects, & external socials */}
      <Footer t={t} lang={lang} />

      {/* Floating CTA WhatsApp Pulse Trigger */}
      <WhatsAppCTA lang={lang} />
    </div>
  );
}

export default App;
