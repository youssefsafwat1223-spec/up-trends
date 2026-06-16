import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, TrendingUp, BarChart2, Globe, Megaphone, Palette, FileText } from "lucide-react";
import type { TranslationModel } from "../data/content";

interface HeroProps {
  t: TranslationModel;
  lang: "en" | "ar";
}

export const Hero: React.FC<HeroProps> = ({ t, lang }) => {
  // Map icons to the floating tags
  const getTagIcon = (tag: string) => {
    const lower = tag.toLowerCase();
    if (lower.includes("social") || lower.includes("سوشيال")) return <Megaphone className="w-4 h-4 text-brand-cyan" />;
    if (lower.includes("ads") || lower.includes("إعلانات")) return <TrendingUp className="w-4 h-4 text-brand-red" />;
    if (lower.includes("brand") || lower.includes("هوية")) return <Palette className="w-4 h-4 text-brand-cyan" />;
    if (lower.includes("content") || lower.includes("محتوى")) return <FileText className="w-4 h-4 text-brand-blue" />;
    if (lower.includes("web") || lower.includes("موقع") || lower.includes("مواقع")) return <Globe className="w-4 h-4 text-brand-cyan" />;
    return <BarChart2 className="w-4 h-4 text-brand-cyan" />;
  };

  // Staggered animated delays for floating cards
  const floatingCards = [
    { text: t.heroFloatingTags[0], x: "-20%", y: "-35%", delay: 0 },
    { text: t.heroFloatingTags[1], x: "30%", y: "-25%", delay: 1.5 },
    { text: t.heroFloatingTags[2], x: "-40%", y: "5%", delay: 0.8 },
    { text: t.heroFloatingTags[3], x: "40%", y: "15%", delay: 2.2 },
    { text: t.heroFloatingTags[4], x: "-15%", y: "45%", delay: 1.2 },
    { text: t.heroFloatingTags[5], x: "25%", y: "40%", delay: 1.9 },
  ];

  const scrollIntoView = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] gradient-glow-blue -z-10" />
      <div className="absolute bottom-10 right-10 w-[300px] md:w-[500px] h-[300px] md:h-[500px] gradient-glow-red opacity-60 -z-10" />

      {/* Decorative Floating Arrow Motifs */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-up text-brand-blue/10 rtl:text-brand-red/10"
            style={{
              left: `${15 + i * 14}%`,
              bottom: "0px",
              animationDelay: `${i * 2}s`,
              animationDuration: `${10 + i * 3}s`,
            }}
          >
            <svg
              className="w-8 h-8 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2l3.5 6h-3v8h-1v-8h-3l3.5-6zm0 14h1v2h-1v-2zm0 4h1v2h-1v-2z" />
            </svg>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Copy Column */}
        <div className="lg:col-span-7 flex flex-col text-center lg:text-left rtl:lg:text-right">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-blue/20 bg-brand-surface/60 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-6 mx-auto lg:mx-0 w-fit"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === "en" ? "Iraq's Premier Growth Agency" : "وكالة النمو الأولى في العراق"}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 ${
              lang === "ar" ? "font-arabic leading-[1.25]" : "font-sans"
            }`}
          >
            {lang === "en" ? (
              <>
                Grow Your Brand in Iraq with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-red">
                  Strategy, Creativity & Performance
                </span>
              </>
            ) : (
              t.heroHeadline
            )}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`text-base md:text-lg text-brand-muted mb-8 max-w-xl mx-auto lg:mx-0 ${
              lang === "ar" ? "font-arabic leading-relaxed" : "font-sans"
            }`}
          >
            {t.heroSubheadline}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button
              onClick={() => scrollIntoView("#contact")}
              className="px-8 py-3.5 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-blue bg-[size:200%_auto] hover:bg-[position:right_center] text-white text-base font-bold rounded-lg shadow-lg hover:shadow-brand-blue/30 transition-all duration-500 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>{t.heroCTAPrimary}</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => scrollIntoView("#services")}
              className="px-8 py-3.5 bg-brand-surface/60 hover:bg-brand-surface border border-brand-blue/20 hover:border-brand-cyan/40 text-white text-base font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              {t.heroCTASecondary}
            </button>
          </motion.div>
        </div>

        {/* Right Graphic Column */}
        <div className="lg:col-span-5 relative h-[380px] md:h-[480px] w-full flex items-center justify-center">
          {/* Central Animated Growth Arrow Motif (styled like UP TREND logo arrow) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center rounded-full bg-brand-surface/30 border border-brand-blue/10 shadow-[0_0_50px_rgba(11,123,255,0.1)]"
          >
            {/* Interactive Outer Rotating Ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-brand-cyan/25 animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-brand-blue/10" />

            {/* Glowing Gradient Background behind Arrow */}
            <div className="absolute w-40 h-40 rounded-full bg-brand-blue/20 filter blur-xl animate-pulse" />

            {/* UP TREND Logo Mark Abstract Graphic (U shape with right arrow) */}
            <svg
              className="w-28 h-28 md:w-36 md:h-36 drop-shadow-[0_0_20px_rgba(37,217,255,0.4)]"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Left Curve Sweep (Red Accent) */}
              <path
                d="M15,40 C15,65 30,85 50,85 C52,85 53,85 55,84.9 C40,82 25,65 25,48 C25,35 22,25 15,20 C18,25 18,35 15,40 Z"
                fill="url(#redGrad)"
              />
              <path
                d="M20,30 C20,62 38,80 50,80 C36,75 28,55 28,38 C28,28 25,23 20,20"
                stroke="#EF233C"
                strokeWidth="1.5"
                opacity="0.8"
              />
              {/* Main Arrow Sweep (Electric Blue / Cyan) */}
              <path
                d="M45,84 C62,80 75,60 75,38 L75,44 L87,44 L69,16 L51,44 L63,44 L63,38 C63,55 53,72 37,79 C40,81 42.5,83 45,84 Z"
                fill="url(#blueGrad)"
              />
              
              <defs>
                <linearGradient id="blueGrad" x1="51" y1="16" x2="69" y2="84" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#25D9FF" />
                  <stop offset="100%" stopColor="#0B7BFF" />
                </linearGradient>
                <linearGradient id="redGrad" x1="15" y1="20" x2="55" y2="85" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#EF233C" />
                  <stop offset="100%" stopColor="#8b0000" />
                </linearGradient>
              </defs>
            </svg>

            {/* Glowing Center */}
            <div className="absolute w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_15px_#25D9FF]" />
          </motion.div>

          {/* Floating tags */}
          {floatingCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: ["0px", "-10px", "0px"],
              }}
              transition={{
                delay: card.delay,
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="absolute glass-panel glow-border-blue px-3 md:px-4 py-2 rounded-xl flex items-center gap-2 text-xs md:text-sm font-semibold text-white cursor-default shadow-lg hover:border-brand-cyan/60 hover:shadow-brand-blue/15 transition-all duration-300"
              style={{
                left: `calc(50% + ${card.x})`,
                top: `calc(50% + ${card.y})`,
              }}
            >
              {getTagIcon(card.text)}
              <span className={lang === "ar" ? "font-arabic" : "font-sans"}>{card.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
