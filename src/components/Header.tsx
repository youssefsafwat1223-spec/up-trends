import React, { useState, useEffect } from "react";
import { Menu, X, Globe, PhoneCall } from "lucide-react";
import logoDark from "../assets/logo_dark_bg.png";
import type { TranslationModel } from "../data/content";

interface HeaderProps {
  t: TranslationModel;
  lang: "en" | "ar";
  setLang: (lang: "en" | "ar") => void;
}

export const Header: React.FC<HeaderProps> = ({ t, lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll height to apply sticky background styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.navHome, href: "#home" },
    { name: t.navServices, href: "#services" },
    { name: t.navWork, href: "#work" },
    { name: t.navProcess, href: "#process" },
    { name: t.navPackages, href: "#packages" },
    { name: t.navFAQ, href: "#faq" },
    { name: t.navContact, href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const toggleLanguage = () => {
    const nextLang = lang === "en" ? "ar" : "en";
    setLang(nextLang);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-bg/85 backdrop-blur-md border-b border-brand-blue/15 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <a href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="flex items-center gap-3">
          <img
            src={logoDark}
            alt="UP TREND Logo"
            className="h-10 w-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-brand-muted hover:text-brand-cyan transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Controls */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-brand-blue/20 hover:border-brand-cyan/40 bg-brand-surface/40 hover:bg-brand-surface text-sm font-medium transition-all duration-300 cursor-pointer"
            aria-label="Switch Language"
          >
            <Globe className="w-4 h-4 text-brand-cyan" />
            <span className={lang === "ar" ? "font-sans" : "font-arabic"}>
              {lang === "en" ? "عربي" : "English"}
            </span>
          </button>

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="relative inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-sm font-bold rounded-lg shadow-[0_4px_14px_0_rgba(11,123,255,0.4)] hover:shadow-[0_6px_20px_rgba(37,217,255,0.6)] transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50"
          >
            {t.navCTA}
          </a>
        </div>

        {/* Mobile controls & hamburger menu */}
        <div className="flex items-center gap-4 lg:hidden">
          {/* Language Switcher Mobile */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-brand-blue/20 bg-brand-surface/40 text-xs font-semibold cursor-pointer"
            aria-label="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-brand-cyan" />
            <span>{lang === "en" ? "عربي" : "EN"}</span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-brand-muted hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-brand-bg/95 backdrop-blur-lg z-40 border-t border-brand-blue/10 animate-fade-in">
          <div className="flex flex-col h-[calc(100vh-73px)] p-6 justify-between overflow-y-auto">
            <nav className="flex flex-col gap-5 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-lg font-semibold text-brand-muted hover:text-brand-cyan border-b border-brand-surface/60 pb-3 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pb-10 flex flex-col gap-4">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-base font-bold rounded-lg shadow-lg hover:shadow-cyan-500/20 text-center"
              >
                <PhoneCall className="w-4 h-4" />
                {t.navCTA}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
