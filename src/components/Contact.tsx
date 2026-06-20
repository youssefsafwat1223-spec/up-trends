import React, { useState } from "react";
import { Mail, MapPin, Send, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";
import type { TranslationModel } from "../data/content";

interface ContactProps {
  t: TranslationModel;
  lang: "en" | "ar";
}

export const Contact: React.FC<ContactProps> = ({ t, lang }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessType: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Simple validation
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg(lang === "en" ? "Name and phone number are required." : "الاسم ورقم الهاتف مطلوبان.");
      return;
    }

    setIsSubmitting(true);

    // Form submission simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);

      // Reset form
      setFormData({
        name: "",
        phone: "",
        businessType: "",
        service: "",
        budget: "",
        message: "",
      });

      // Hide toast after 5 seconds
      setTimeout(() => setShowToast(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 border-t border-brand-surface/40">
      {/* Background Radial Glow */}
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] gradient-glow-red opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Success Toast */}
        {showToast && (
          <div className="fixed bottom-6 right-6 z-50 animate-bounce glass-panel glow-border-blue p-4 rounded-xl flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-green-500/30">
            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
            <div className="flex flex-col">
              <p className={`text-sm font-bold text-white ${lang === "ar" ? "font-arabic" : "font-sans"}`}>
                {lang === "en" ? "Success!" : "تم بنجاح!"}
              </p>
              <p className={`text-xs text-brand-muted ${lang === "ar" ? "font-arabic" : "font-sans"}`}>
                {t.contactSuccess}
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left rtl:text-right">
            <div>
              <div className="flex items-center gap-2 mb-4 justify-start">
                <MessageSquare className="w-5 h-5 text-brand-cyan" />
                <span className="text-brand-cyan text-sm font-bold uppercase tracking-wider">
                  {lang === "en" ? "Let's Connect" : "تواصل معنا"}
                </span>
              </div>
              
              <h2 className={`text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight ${
                lang === "ar" ? "font-arabic" : "font-sans"
              }`}>
                {t.contactTitle}
              </h2>
              
              <p className={`text-base text-brand-muted leading-relaxed mb-10 ${
                lang === "ar" ? "font-arabic" : "font-sans"
              }`}>
                {t.contactSubtitle}
              </p>
            </div>

            {/* Visual info cards */}
            <div className="flex flex-col gap-6 mb-12">

              <a
                href="mailto:uptrendmarketing@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-brand-surface/40 hover:bg-brand-surface border border-brand-blue/10 hover:border-brand-blue/20 transition-all duration-300"
              >
                <div className="p-3 bg-brand-surface rounded-xl border border-brand-blue/15 text-brand-cyan">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className={`block text-xs text-brand-muted ${lang === "ar" ? "font-arabic" : "font-sans"}`}>
                    {lang === "en" ? "Email Address" : "البريد الإلكتروني"}
                  </span>
                  <span className="text-sm font-bold text-white">{t.contactEmailVal}</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-brand-surface/40 border border-brand-blue/10">
                <div className="p-3 bg-brand-surface rounded-xl border border-brand-blue/15 text-brand-cyan">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className={`block text-xs text-brand-muted ${lang === "ar" ? "font-arabic" : "font-sans"}`}>
                    {lang === "en" ? "Headquarters" : "الموقع الرئيسي"}
                  </span>
                  <span className={`text-sm font-bold text-white ${lang === "ar" ? "font-arabic" : "font-sans"}`}>
                    {t.contactLocationVal}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 glass-panel p-8 md:p-10 rounded-3xl border border-brand-blue/10 relative overflow-hidden">


            {errorMsg && (
              <div className="p-4 bg-brand-red/10 border border-brand-red/25 rounded-xl flex items-center gap-2.5 text-sm text-brand-red mb-6">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span className={lang === "ar" ? "font-arabic" : "font-sans"}>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className={`text-xs font-semibold text-brand-muted ${lang === "ar" ? "font-arabic" : "font-sans"}`}>
                    {t.contactNameLabel} <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contactNamePlaceholder}
                    className="w-full px-4 py-3 bg-brand-surface/65 rounded-xl border border-brand-blue/15 focus:border-brand-cyan/60 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-cyan/20 transition-all duration-300"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className={`text-xs font-semibold text-brand-muted ${lang === "ar" ? "font-arabic" : "font-sans"}`}>
                    {t.contactPhoneLabel} <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.contactPhonePlaceholder}
                    className="w-full px-4 py-3 bg-brand-surface/65 rounded-xl border border-brand-blue/15 focus:border-brand-cyan/60 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-cyan/20 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Business Type & Service */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className={`text-xs font-semibold text-brand-muted ${lang === "ar" ? "font-arabic" : "font-sans"}`}>
                    {t.contactTypeLabel}
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-brand-surface/65 rounded-xl border border-brand-blue/15 focus:border-brand-cyan/60 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-cyan/20 transition-all duration-300 cursor-pointer"
                  >
                    <option value="" disabled>{t.contactTypePlaceholder}</option>
                    {t.contactTypeOptions.map((opt, idx) => (
                      <option key={idx} value={opt} className="bg-brand-surface text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className={`text-xs font-semibold text-brand-muted ${lang === "ar" ? "font-arabic" : "font-sans"}`}>
                    {t.contactServiceLabel}
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-brand-surface/65 rounded-xl border border-brand-blue/15 focus:border-brand-cyan/60 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-cyan/20 transition-all duration-300 cursor-pointer"
                  >
                    <option value="" disabled>{t.contactServicePlaceholder}</option>
                    {t.contactServiceOptions.map((opt, idx) => (
                      <option key={idx} value={opt} className="bg-brand-surface text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Budget Option */}
              <div className="flex flex-col gap-2">
                <label className={`text-xs font-semibold text-brand-muted ${lang === "ar" ? "font-arabic" : "font-sans"}`}>
                  {t.contactBudgetLabel}
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-brand-surface/65 rounded-xl border border-brand-blue/15 focus:border-brand-cyan/60 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-cyan/20 transition-all duration-300 cursor-pointer"
                >
                  <option value="" disabled>{t.contactBudgetPlaceholder}</option>
                  {t.contactBudgetOptions.map((opt, idx) => (
                    <option key={idx} value={opt} className="bg-brand-surface text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className={`text-xs font-semibold text-brand-muted ${lang === "ar" ? "font-arabic" : "font-sans"}`}>
                  {t.contactMessageLabel}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contactMessagePlaceholder}
                  rows={4}
                  className="w-full px-4 py-3 bg-brand-surface/65 rounded-xl border border-brand-blue/15 focus:border-brand-cyan/60 text-white text-sm focus:outline-none focus:ring-1 focus:ring-brand-cyan/20 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-4 px-6 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-blue bg-[size:200%_auto] hover:bg-[position:right_center] disabled:opacity-50 text-white font-bold rounded-xl shadow-lg hover:shadow-brand-blue/30 transition-all duration-500 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span className={lang === "ar" ? "font-arabic" : "font-sans"}>
                  {isSubmitting
                    ? (lang === "en" ? "Sending..." : "جاري الإرسال...")
                    : t.contactSubmit}
                </span>
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
