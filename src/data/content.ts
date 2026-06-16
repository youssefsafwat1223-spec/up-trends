export interface TranslationModel {
  navHome: string;
  navServices: string;
  navWork: string;
  navProcess: string;
  navPackages: string;
  navFAQ: string;
  navContact: string;
  navCTA: string;
  
  heroHeadline: string;
  heroSubheadline: string;
  heroCTAPrimary: string;
  heroCTASecondary: string;
  heroFloatingTags: string[];

  trustTitle: string;
  trustCopy: string;
  trustCards: Array<{
    title: string;
    description: string;
  }>;

  servicesTitle: string;
  servicesSubtitle: string;
  servicesList: Array<{
    id: string;
    title: string;
    description: string;
  }>;

  workTitle: string;
  workSubtitle: string;
  workCards: Array<{
    title: string;
    description: string;
    metricLabel: string;
    metricValue: string;
    placeholderNote: string;
  }>;

  processTitle: string;
  processSubtitle: string;
  processSteps: Array<{
    number: string;
    title: string;
    description: string;
  }>;

  packagesTitle: string;
  packagesSubtitle: string;
  packagesList: Array<{
    title: string;
    subtitle: string;
    pricingNote: string;
    ctaText: string;
    features: string[];
  }>;

  whyTitle: string;
  whySubtitle: string;
  whyList: Array<{
    title: string;
    description: string;
  }>;

  industriesTitle: string;
  industriesSubtitle: string;
  industriesList: string[];

  testimonialsTitle: string;
  testimonialsSubtitle: string;
  testimonialsPlaceholder: string;
  testimonialsNote: string;

  faqTitle: string;
  faqSubtitle: string;
  faqList: Array<{
    question: string;
    answer: string;
  }>;

  finalCtaTitle: string;
  finalCtaSubtitle: string;
  finalCtaWhatsApp: string;
  finalCtaConsult: string;

  contactTitle: string;
  contactSubtitle: string;
  contactNameLabel: string;
  contactNamePlaceholder: string;
  contactPhoneLabel: string;
  contactPhonePlaceholder: string;
  contactTypeLabel: string;
  contactTypePlaceholder: string;
  contactTypeOptions: string[];
  contactServiceLabel: string;
  contactServicePlaceholder: string;
  contactServiceOptions: string[];
  contactBudgetLabel: string;
  contactBudgetPlaceholder: string;
  contactBudgetOptions: string[];
  contactMessageLabel: string;
  contactMessagePlaceholder: string;
  contactSubmit: string;
  contactSuccess: string;
  contactDetailsTitle: string;
  contactPhoneVal: string;
  contactEmailVal: string;
  contactLocationVal: string;

  footerDesc: string;
  footerLinksTitle: string;
  footerServicesTitle: string;
  footerContactTitle: string;
  footerCopyright: string;
}

export const contentData: Record<'en' | 'ar', TranslationModel> = {
  en: {
    navHome: "Home",
    navServices: "Services",
    navWork: "Work",
    navProcess: "Process",
    navPackages: "Packages",
    navFAQ: "FAQ",
    navContact: "Contact",
    navCTA: "Get Free Consultation",

    heroHeadline: "Grow Your Brand in Iraq with Strategy, Creativity & Performance",
    heroSubheadline: "UP TREND helps Iraqi businesses build stronger brands, create scroll-stopping content, run smarter campaigns, and turn attention into real growth.",
    heroCTAPrimary: "Start Your Growth Plan",
    heroCTASecondary: "Explore Services",
    heroFloatingTags: ["Social Media", "Paid Ads", "Branding", "Content", "Websites", "Analytics"],

    trustTitle: "Built for the Iraqi Market",
    trustCopy: "We understand how people discover, compare, and trust brands in Iraq. From social media content to paid campaigns and conversion-focused websites, we create marketing systems that help businesses grow with clarity.",
    trustCards: [
      {
        title: "Local Market Understanding",
        description: "We tailor campaigns to local buyer behavior in Baghdad, Erbil, Basra, Najaf, and beyond."
      },
      {
        title: "Creative Content That Converts",
        description: "Scroll-stopping visuals and copywriting that speaks directly to Iraqi consumers in their language."
      },
      {
        title: "Clear Reporting & Growth Tracking",
        description: "No guesswork. Clean reports showing your return on ad spend and real performance metrics."
      }
    ],

    servicesTitle: "Our Premium Services",
    servicesSubtitle: "Comprehensive marketing solutions tailored to scale businesses across Iraq's unique market landscape.",
    servicesList: [
      {
        id: "smm",
        title: "Social Media Management",
        description: "We plan, design, publish, and optimize content that builds trust and keeps your audience engaged."
      },
      {
        id: "ads",
        title: "Paid Ads Campaigns",
        description: "Performance campaigns across Meta, TikTok, Google, and other platforms focused on leads, sales, and measurable growth."
      },
      {
        id: "brand",
        title: "Branding & Visual Identity",
        description: "From logo systems to visual direction, we create identities that look professional and stay memorable."
      },
      {
        id: "content",
        title: "Content Creation",
        description: "High-impact graphics, custom copy, and engaging assets customized for your specific brand personality."
      },
      {
        id: "video",
        title: "Video Production & Reels",
        description: "High-quality vertical videos and ads built for the modern attention span in Iraq."
      },
      {
        id: "web",
        title: "Website Design & Development",
        description: "High-performance, mobile-responsive websites designed to convert visitors into clients."
      },
      {
        id: "seo",
        title: "SEO & Google Presence",
        description: "Get discovered on Google when Iraqi clients search for your products or services."
      },
      {
        id: "strategy",
        title: "Marketing Strategy",
        description: "Custom roadmaps based on market research, target persona analysis, and clear business goals."
      },
      {
        id: "influencer",
        title: "Influencer Campaigns",
        description: "Partner with trusted Iraqi content creators to expand your reach and build brand authority."
      },
      {
        id: "analytics",
        title: "Analytics & Monthly Reports",
        description: "Data-driven insights and transparent performance metrics tracking your marketing ROI."
      }
    ],

    workTitle: "Our Featured Work",
    workSubtitle: "A glance at strategic campaigns designed to capture market share and drive business outcomes.",
    workCards: [
      {
        title: "Restaurant Growth Campaign",
        description: "Comprehensive rebranding and localized social media strategy to boost foot traffic and delivery orders.",
        metricLabel: "Example metric / Replace with real data",
        metricValue: "+150% Dine-in & Delivery Orders",
        placeholderNote: "Replace with real client case study"
      },
      {
        title: "Real Estate Lead Generation",
        description: "High-performance targeted lead gen funnels for luxury residential project sales in Baghdad.",
        metricLabel: "Example metric / Replace with real data",
        metricValue: "450+ High-Quality Leads / Month",
        placeholderNote: "Replace with real client case study"
      },
      {
        title: "Clinic Social Media Presence",
        description: "Educational reels content and appointment booking automation for Erbil-based specialty clinic.",
        metricLabel: "Example metric / Replace with real data",
        metricValue: "300+ New Patient Bookings",
        placeholderNote: "Replace with real client case study"
      },
      {
        title: "E-commerce Product Launch",
        description: "Full-funnel digital launch campaign for fashion retail startup using TikTok and Instagram ads.",
        metricLabel: "Example metric / Replace with real data",
        metricValue: "12x Return on Ad Spend (ROAS)",
        placeholderNote: "Replace with real client case study"
      }
    ],

    processTitle: "Our Growth Process",
    processSubtitle: "A structured, 5-step methodology that turns marketing budgets into scalable business growth.",
    processSteps: [
      {
        number: "01",
        title: "Discover",
        description: "We understand your business, audience, competitors, and growth objectives."
      },
      {
        number: "02",
        title: "Plan",
        description: "We build a strategy with clear channels, content direction, and campaign priorities."
      },
      {
        number: "03",
        title: "Create",
        description: "We design content, visuals, high-converting video reels, landing pages, and campaign assets."
      },
      {
        number: "04",
        title: "Launch",
        description: "We publish content, run targeted advertising, continuously test variations, and optimize performance."
      },
      {
        number: "05",
        title: "Report",
        description: "We track performance and show you what is working, what needs improvement, and what comes next."
      }
    ],

    packagesTitle: "Growth Packages",
    packagesSubtitle: "Select the engagement level that fits your stage of growth. No fixed fees—tailored to your exact scope.",
    packagesList: [
      {
        title: "Starter Presence",
        subtitle: "For new businesses that need professional social presence.",
        pricingNote: "Custom pricing based on scope",
        ctaText: "Request Custom Quote",
        features: [
          "Social Media Setup & Optimization",
          "12 High-Quality Posts per Month",
          "Basic Content Copywriting (Iraqi Arabic & EN)",
          "Monthly Growth Analytics Review",
          "WhatsApp Communication Channel"
        ]
      },
      {
        title: "Growth Campaign",
        subtitle: "For businesses ready to run ads and generate leads.",
        pricingNote: "Custom pricing based on scope",
        ctaText: "Request Custom Quote",
        features: [
          "Complete Social Media Management",
          "Meta & TikTok Ad Campaign Setup",
          "Lead Generation Funnels & Landing Pages",
          "High-Converting Ad Creatives (Design/Copy)",
          "Weekly Optimization & A/B Audits",
          "Detailed Monthly Performance Reports"
        ]
      },
      {
        title: "Full Marketing Partner",
        subtitle: "For brands that want strategy, content, ads, website, and reporting.",
        pricingNote: "Custom pricing based on scope",
        ctaText: "Request Custom Quote",
        features: [
          "Full-Scale Brand Marketing Strategy",
          "Premium Video Production (Reels & TikToks)",
          "Multi-Channel Ad Management (Meta, TikTok, Google)",
          "Conversion-Focused Custom Landing Page or Website",
          "SEO Setup & Google Search Optimization",
          "Dedicated Account Manager & Weekly Strategy Sessions"
        ]
      }
    ],

    whyTitle: "Why UP TREND?",
    whySubtitle: "We combine local insights with international standards to build marketing systems that deliver ROI.",
    whyList: [
      {
        title: "Iraq-Focused Marketing",
        description: "We tailor campaigns to local buyer behavior in Baghdad, Erbil, Basra, and Najaf."
      },
      {
        title: "Strategy Before Design",
        description: "Every post and pixel has a business goal, ensuring your budget drives actual sales."
      },
      {
        title: "Creative Content with Goals",
        description: "We craft content that stands out, speaks local Iraqi Arabic, and builds trust."
      },
      {
        title: "Paid Ads Built for Performance",
        description: "We optimize for leads and conversions, not just superficial likes and comments."
      },
      {
        title: "Monthly Reports, No Guesswork",
        description: "Transparent data showing exactly where your money went and what results it achieved."
      },
      {
        title: "Fast WhatsApp Communication",
        description: "A dedicated responsive team that keeps you updated and handles requests immediately."
      }
    ],

    industriesTitle: "Industries We Scale",
    industriesSubtitle: "We build specialized marketing systems customized to the demands of various business sectors in Iraq.",
    industriesList: [
      "Restaurants & Cafes",
      "Clinics & Medical Centers",
      "Real Estate",
      "E-commerce",
      "Education & Training",
      "Beauty & Fashion",
      "Technology & Startups",
      "Local Services"
    ],

    testimonialsTitle: "What Our Clients Say",
    testimonialsSubtitle: "Trust is built on transparency. Here is how we support growth.",
    testimonialsPlaceholder: "Client testimonial coming soon",
    testimonialsNote: "Real testimonials will be added after final approval.",

    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Clear answers to common questions about working with UP TREND in Iraq.",
    faqList: [
      {
        question: "What does UP TREND do?",
        answer: "We are a full-service marketing agency in Iraq. We help brands grow by creating marketing strategies, managing social media, running paid ads, producing video reels, designing visual identities, and developing high-performance websites."
      },
      {
        question: "Do you manage social media pages?",
        answer: "Yes. We handle page setup, content calendars, graphic design, copywriting in Iraqi Arabic, publishing, and community engagement to keep your brand active and professional."
      },
      {
        question: "Can you run ads in Iraq?",
        answer: "Absolutely. We build targeted performance campaigns on Meta (Facebook & Instagram), TikTok, and Google Ads, optimized specifically for the Iraqi audience to get you leads and sales."
      },
      {
        question: "Do you design websites?",
        answer: "Yes. We design and build modern, mobile-responsive, and fast-loading websites and landing pages optimized for conversion and integrated with your analytics."
      },
      {
        question: "Do you create videos and reels?",
        answer: "Yes. Video is key to modern social media. We write scripts, direct, shoot, and edit reels and TikToks that grab attention and drive conversions."
      },
      {
        question: "How do we start?",
        answer: "Simple! You can contact us via WhatsApp or submit the contact form on our website. We will schedule a free consultation session to discuss your business goals and recommend the best roadmap."
      },
      {
        question: "Do you work with small businesses?",
        answer: "Yes, we work with both established brands and ambitious small-to-medium businesses (SMBs) in Iraq. We have packages designed to scale as your business grows."
      },
      {
        question: "Do you provide monthly reports?",
        answer: "Yes. Transparency is one of our core values. Every month we deliver a clear report detailing campaign spend, lead generation numbers, engagement metrics, and suggestions for the next month."
      }
    ],

    finalCtaTitle: "Ready to move your brand upward?",
    finalCtaSubtitle: "Tell us about your business and we’ll help you choose the right marketing direction.",
    finalCtaWhatsApp: "WhatsApp Us",
    finalCtaConsult: "Request Free Consultation",

    contactTitle: "Get in Touch",
    contactSubtitle: "Start your journey to predictable growth today. Let's discuss your marketing strategy.",
    contactNameLabel: "Full Name",
    contactNamePlaceholder: "e.g., Ali Ahmed",
    contactPhoneLabel: "Phone / WhatsApp",
    contactPhonePlaceholder: "e.g., +964 770 123 4567",
    contactTypeLabel: "Business Type",
    contactTypePlaceholder: "Select your industry...",
    contactTypeOptions: [
      "Restaurant / Cafe",
      "Clinic / Medical Center",
      "Real Estate / Development",
      "E-commerce / Retail",
      "Education / Training",
      "Beauty / Fashion",
      "Technology / Startup",
      "Other Service"
    ],
    contactServiceLabel: "Service You Are Interested In",
    contactServicePlaceholder: "Select a service...",
    contactServiceOptions: [
      "Full Marketing Partner (Strategy, Content, Ads, Web)",
      "Social Media Management",
      "Paid Ads Campaigns",
      "Branding & Visual Identity",
      "Video Production & Reels",
      "Website Design & Development",
      "SEO & Google Presence",
      "Marketing Strategy Consultation"
    ],
    contactBudgetLabel: "Monthly Marketing Budget",
    contactBudgetPlaceholder: "Select your budget range...",
    contactBudgetOptions: [
      "Under $500",
      "$500 - $1,500",
      "$1,500 - $3,000",
      "$3,000+",
      "To be discussed"
    ],
    contactMessageLabel: "Message / Tell us about your goals",
    contactMessagePlaceholder: "Briefly explain what you'd like to achieve...",
    contactSubmit: "Submit & Message on WhatsApp",
    contactSuccess: "Thanks! Your request has been logged. Let's chat on WhatsApp.",
    contactDetailsTitle: "Contact Details",
    contactPhoneVal: "+964 770 000 0000",
    contactEmailVal: "hello@uptrend.iq",
    contactLocationVal: "Baghdad, Iraq (Serving all Iraqi businesses)",

    footerDesc: "UP TREND is Iraq's premium growth-focused marketing agency. We build strategy, content, paid campaigns, and digital products that turn attention into revenue.",
    footerLinksTitle: "Quick Links",
    footerServicesTitle: "Our Services",
    footerContactTitle: "Contact Us",
    footerCopyright: "© 2026 UP TREND. All rights reserved."
  },
  ar: {
    navHome: "الرئيسية",
    navServices: "خدماتنا",
    navWork: "أعمالنا",
    navProcess: "آلية العمل",
    navPackages: "الباقات",
    navFAQ: "الأسئلة الشائعة",
    navContact: "تواصل معنا",
    navCTA: "احصل على استشارة مجانية",

    heroHeadline: "خلّي براندك يصعد بالسوق العراقي",
    heroSubheadline: "UP TREND وكالة تسويق تساعد الشركات بالعراق تكبر بخطة واضحة، محتوى قوي، إعلانات مدفوعة، هوية بصرية، ومواقع احترافية.",
    heroCTAPrimary: "ابدأ خطة النمو",
    heroCTASecondary: "شوف خدماتنا",
    heroFloatingTags: ["سوشيال ميديا", "إعلانات ممولة", "هوية بصرية", "صناعة محتوى", "مواقع إلكترونية", "تحليلات وأرقام"],

    trustTitle: "مصمم خصيصاً للسوق العراقي",
    trustCopy: "نفهم السوق العراقي وطريقة تفاعل الناس مع البراندات. من المحتوى والإعلانات إلى المواقع والتحليلات، نبني نظام تسويق يساعدك تكبر بثقة ووضوح.",
    trustCards: [
      {
        title: "فهم عميق للسوق المحلي",
        description: "نصمم حملات مخصصة تناسب سلوك واهتمامات المشتري المحلي في بغداد، أربيل، البصرة، النجف وكل العراق."
      },
      {
        title: "محتوى إبداعي يجذب ويقنع",
        description: "تصاميم ونصوص تسويقية مميزة تحاكي المستهلك العراقي وتجذبه مباشرة لتصفح حساباتك."
      },
      {
        title: "تقارير واضحة وتتبع حقيقي للنمو",
        description: "بدون تخمين. نوفر لك لوحة بيانات وتقارير شهرية توضح أداء الإعلانات وحجم العائد بدقة."
      }
    ],

    servicesTitle: "خدماتنا الاحترافية",
    servicesSubtitle: "حلول تسويقية متكاملة مصممة خصيصاً لمساعدة الشركات على النمو في السوق العراقي المتسارع.",
    servicesList: [
      {
        id: "smm",
        title: "إدارة السوشيال ميديا",
        description: "نخطط ونصمم وننشر محتوى يخلي جمهورك يتفاعل ويثق ببراندك ويضمن بقاء مشروعك نشطاً."
      },
      {
        id: "ads",
        title: "الحملات الإعلانية المدفوعة",
        description: "حملات إعلانية مدروسة على منصات مثل فيسبوك، إنستغرام، تيك توك وجوجل بهدف نتائج واضحة وزيادة المبيعات."
      },
      {
        id: "brand",
        title: "الهوية البصرية والبراندينغ",
        description: "نبني شكل احترافي للبراند من الألوان والشعار والخطوط إلى أسلوب التصميم الكامل والراسخ بالذاكرة."
      },
      {
        id: "content",
        title: "صناعة المحتوى الإبداعي",
        description: "تصاميم جذابة ونصوص تسويقية مكتوبة باللهجة العراقية القريبة ومخصصة لبراندك وبأعلى جودة."
      },
      {
        id: "video",
        title: "إنتاج الفيديو والريلز",
        description: "تصوير وإنتاج ريلز وفيديوهات إعلانية مميزة تناسب سرعة التصفح وتجذب انتباه المشاهدين وتدفعه للشراء."
      },
      {
        id: "web",
        title: "تصميم وتطوير المواقع",
        description: "مواقع إلكترونية سريعة، متوافقة تماماً مع الموبايل ومصممة خصيصاً لتحويل الزوار إلى عملاء حقيقيين."
      },
      {
        id: "seo",
        title: "تحسين محركات البحث SEO",
        description: "خلّي مشروعك يظهر بالصفحة الأولى على جوجل لما يبحث العملاء العراقيين عن خدماتك أو منتجاتك."
      },
      {
        id: "strategy",
        title: "الاستراتيجية التسويقية",
        description: "خطة عمل متكاملة مبنية على دراسة شاملة للسوق العراقي، تحديد الجمهور، ووضع خارطة طريق واضحة."
      },
      {
        id: "influencer",
        title: "حملات المؤثرين",
        description: "حملات تسويقية بالتعاون مع صناع المحتوى والمؤثرين العراقيين لزيادة الوصول وبناء مصداقية سريعة."
      },
      {
        id: "analytics",
        title: "التحليلات والتقارير الشهرية",
        description: "تقارير دقيقة ومستمرة نوضح بيها العائد على الاستثمار الإعلاني وأداء الصفحات بكل شفافية."
      }
    ],

    workTitle: "أبرز أعمالنا",
    workSubtitle: "نظرة على بعض الحملات الاستراتيجية المصممة للسيطرة على السوق وتحقيق أهداف عملائنا.",
    workCards: [
      {
        title: "حملة نمو وتطوير مطعم",
        description: "تطوير الهوية البصرية واستراتيجية محتوى محلية لزيادة المبيعات المباشرة وطلبات التوصيل.",
        metricLabel: "مثال لقياس الأداء / يتم استبداله ببيانات حقيقية",
        metricValue: "زيادة بنسبة 150٪ في طلبات الصالة والتوصيل",
        placeholderNote: "يتم استبدالها بدراسة حالة حقيقية لعميل"
      },
      {
        title: "توليد عملاء لشركة عقارية",
        description: "بناء مسار مبيعات وحملة إعلانات مستهدفة لبيع وحدات سكنية فاخرة في بغداد.",
        metricLabel: "مثال لقياس الأداء / يتم استبداله ببيانات حقيقية",
        metricValue: "توليد أكثر من 450 عميل مهتم شهرياً",
        placeholderNote: "يتم استبدالها بدراسة حالة حقيقية لعميل"
      },
      {
        title: "التواجد الرقمي لعيادة طبية",
        description: "إنتاج محتوى ريلز تثقيفي لعيادة تخصصية في أربيل مع أتمتة نظام الحجوزات.",
        metricLabel: "مثال لقياس الأداء / يتم استبداله ببيانات حقيقية",
        metricValue: "أكثر من 300 حجز مريض جديد شهرياً",
        placeholderNote: "يتم استبدالها بدراسة حالة حقيقية لعميل"
      },
      {
        title: "إطلاق منتج لمتجر إلكتروني",
        description: "حملة إطلاق شاملة لمتجر أزياء باستخدام إعلانات تيك توك وإنستغرام الممولة.",
        metricLabel: "مثال لقياس الأداء / يتم استبداله ببيانات حقيقية",
        metricValue: "عائد على الإنفاق الإعلاني بمقدار 12 ضعف (ROAS)",
        placeholderNote: "يتم استبدالها بدراسة حالة حقيقية لعميل"
      }
    ],

    processTitle: "آلية العمل والنمو",
    processSubtitle: "منهجية عمل واضحة من 5 مراحل تحول ميزانيتك التسويقية إلى نمو مستدام ومحسوس.",
    processSteps: [
      {
        number: "01",
        title: "نفهم",
        description: "ندرس طبيعة عملك، جمهورك المستهدف، المنافسين وأهدافك التسويقية بوضوح."
      },
      {
        number: "02",
        title: "نخطط",
        description: "نبني استراتيجية عمل متكاملة تحدد القنوات التسويقية الأفضل، توجه المحتوى وأولويات الحملات."
      },
      {
        number: "03",
        title: "نصمم",
        description: "نصمم الهوية البصرية، نكتب المحتوى التسويقي، ننتج فيديوهات الريلز الإعلانية ونبني صفحات الهبوط."
      },
      {
        number: "04",
        title: "نطلق",
        description: "ننشر المحتوى، نطلق الحملات الإعلانية المدفوعة، نختبر استراتيجيات مختلفة ونحسن الأداء باستمرار."
      },
      {
        number: "05",
        title: "نحلل",
        description: "نتابع النتائج ونقدم لك تقارير دورية توضح نقاط القوة، حجم العائد، والخطوات القادمة للتوسع."
      }
    ],

    packagesTitle: "باقات تسويقية مرنة",
    packagesSubtitle: "اختر مستوى التعاون الذي يناسب حجم أعمالك. لا توجد أسعار ثابتة—تسعيرنا مخصص حسب حجم العمل بالكامل.",
    packagesList: [
      {
        title: "التواجد الأساسي",
        subtitle: "للمشاريع الجديدة التي تبحث عن تواجد احترافي وفعال على منصات التواصل الاجتماعي.",
        pricingNote: "تسعير مخصص حسب حجم العمل",
        ctaText: "اطلب عرض سعر",
        features: [
          "تهيئة حسابات التواصل الاجتماعي وتحسينها",
          "إنتاج ونشر 12 منشوراً عالي الجودة شهرياً",
          "كتابة نصوص تسويقية بالهجة العراقية والإنجليزية",
          "تقرير أداء وتحليلات نمو شهري مبسط",
          "قناة تواصل وتنسيق مباشرة عبر الواتساب"
        ]
      },
      {
        title: "حملة النمو",
        subtitle: "للشركات الجاهزة لإطلاق الإعلانات الممولة وتوليد المبيعات والعملاء المحتملين.",
        pricingNote: "تسعير مخصص حسب حجم العمل",
        ctaText: "اطلب عرض سعر",
        features: [
          "إدارة كاملة لحسابات السوشيال ميديا",
          "إعداد وإدارة حملات ممولة على فيسبوك وتيك توك",
          "بناء مسارات توليد عملاء وصفحات هبوط",
          "تصميم وإنتاج المواد الإعلانية (صور ونصوص)",
          "تحسين يومي واختبارات دورية للحملات",
          "تقارير أداء شهرية مفصلة بالأرقام والنتائج"
        ]
      },
      {
        title: "الشريك التسويقي الكامل",
        subtitle: "للبراندات التي تريد خطة تسويق متكاملة، محتوى فيديو، إعلانات، وموقع إلكتروني.",
        pricingNote: "تسعير مخصص حسب حجم العمل",
        ctaText: "اطلب عرض سعر",
        features: [
          "استراتيجية تسويقية شاملة للبراند وتحديد الموقع",
          "إنتاج فيديو احترافي شهرياً (ريلز وتيك توك)",
          "إدارة إعلانات متعددة المنصات (ميتا، تيك توك، جوجل)",
          "تصميم وتطوير موقع إلكتروني أو صفحة هبوط مخصصة",
          "تهيئة محركات البحث (SEO) وتحسين التواجد الرقمي",
          "مدير حساب مخصص وتنسيق مستمر مع اجتماعات دورية"
        ]
      }
    ],

    whyTitle: "ليش UP TREND؟",
    whySubtitle: "نجمع بين الفهم العميق للسوق العراقي والمعايير التسويقية العالمية لنحقق لك أعلى عائد على الاستثمار.",
    whyList: [
      {
        title: "تسويق يركز على العراق",
        description: "حملاتنا مصممة لتناسب اهتمامات وسلوك المستهلك الفعلي في بغداد، أربيل، البصرة، النجف وكل المحافظات."
      },
      {
        title: "الاستراتيجية قبل التصميم",
        description: "كل تصميم وكل منشور ينطلق بهدف واضح يخدم مبيعاتك ونمو براندك، مو مجرد منشورات عشوائية."
      },
      {
        title: "محتوى إبداعي بلهجة عراقية",
        description: "نصنع محتوى بلهجة عراقية قريبة وذكية تلامس اهتمامات المستهلك وتحوله لزبون وفي."
      },
      {
        title: "إعلانات مبنية للأداء الفعلي",
        description: "نركز على زيادة المبيعات وتوليد العملاء المحتملين الحقيقيين، مو بس جمع اللايكات والمشاهدات."
      },
      {
        title: "تقارير شهرية بدون تخمين",
        description: "شفافية مطلقة وأرقام واضحة تبين وين راحت ميزانيتك التسويقية وشنو النتائج اللي جابتها."
      },
      {
        title: "تواصل سريع عبر الواتساب",
        description: "فريق مخصص ومتجاوب يسهل عليك التواصل ومتابعة مجريات العمل يومياً وبدون تأخير."
      }
    ],

    industriesTitle: "القطاعات التي نخدمها",
    industriesSubtitle: "نبني أنظمة تسويقية مصممة خصيصاً لتناسب متطلبات مختلف القطاعات التجارية في العراق.",
    industriesList: [
      "المطاعم والكافيهات",
      "العيادات والمراكز الطبية",
      "المشاريع السكنية والعقارات",
      "التجارة الإلكترونية ومتاجر التجزئة",
      "المؤسسات التعليمية والتدريب",
      "الجمال والأزياء",
      "التكنولوجيا والشركات الناشئة",
      "الخدمات والمهن المحلية"
    ],

    testimonialsTitle: "ماذا يقول عملائنا؟",
    testimonialsSubtitle: "الثقة تبنى على الأرقام والنتائج. هكذا نساعد شركائنا في الصعود.",
    testimonialsPlaceholder: "آراء العملاء تضاف قريباً",
    testimonialsNote: "سيتم إضافة آراء حقيقية بعد الموافقة والاعتماد النهائي.",

    faqTitle: "الأسئلة الشائعة",
    faqSubtitle: "إجابات واضحة ومباشرة عن طبيعة العمل والخدمات مع UP TREND في العراق.",
    faqList: [
      {
        question: "شنو تسوي وكالة UP TREND؟",
        answer: "احنا وكالة تسويق متكاملة بالعراق. نساعد الشركات تكبر عن طريق كتابة الاستراتيجيات، إدارة السوشيال ميديا، إطلاق الإعلانات الممولة، إنتاج الفيديوهات والريلز، تصميم الهويات البصرية، وبناء المواقع الإلكترونية السريعة."
      },
      {
        question: "هل تديرون صفحات التواصل الاجتماعي؟",
        answer: "نعم، نتولى إدارة الصفحات بالكامل من التخطيط، كتابة النصوص باللهجة العراقية، التصميم، النشر، والتفاعل مع المتابعين لضمان ظهور براندك بأفضل صورة."
      },
      {
        question: "هل تكدرون تطلقون إعلانات ممولة بالعراق؟",
        answer: "أكيد. نطلق حملات إعلانية مستهدفة على فيسبوك، إنستغرام، تيك توك وجوجل، مصممة خصيصاً للجمهور العراقي لزيادة المبيعات والعملاء."
      },
      {
        question: "هل تصممون وتطورون مواقع إلكترونية؟",
        answer: "نعم. نصمم ونطور مواقع إلكترونية وصفحات هبوط حديثة، سريعة، ومتوافقة تماماً مع الموبايل ومصممة لتحويل الزوار إلى زبائن."
      },
      {
        question: "هل تنتجون فيديوهات وريلز؟",
        answer: "نعم. الفيديو هو أساس التفاعل حالياً. نكتب السيناريو، نصور، ونعدل فيديوهات الريلز والتيك توك الإعلانية اللي تلفت الانتباه وتجيب نتائج."
      },
      {
        question: "شلون نبدأ نشتغل سوية؟",
        answer: "ببساطة! تكدر تتواصل ويانا على الواتساب أو تملي استمارة التواصل بالموقع. راح نحدد موعد جلسة استشارة مجانية ندرس بيها أهدافك ونقترح عليك أفضل خطة."
      },
      {
        question: "هل تشتغلون مع المشاريع الصغيرة؟",
        answer: "نعم، نشتغل مع الشركات الكبيرة وأيضاً المشاريع الصغيرة والمتوسطة الطموحة بالعراق. عندنا باقات تسويق مرنة تكبر ويا كبر مشروعك."
      },
      {
        question: "هل تقدمون تقارير شهرية؟",
        answer: "نعم، الشفافية من قيمنا الأساسية. نهاية كل شهر نقدم تقرير مفصل يوضح الميزانية المصروفة، أعداد العملاء، مستوى التفاعل، وتوصياتنا للشهر القادم."
      }
    ],

    finalCtaTitle: "جاهز تصعّد براندك؟",
    finalCtaSubtitle: "احچيلنا عن مشروعك ونساعدك تختار الاتجاه التسويقي الصح.",
    finalCtaWhatsApp: "راسلنا على الواتساب",
    finalCtaConsult: "اطلب استشارة مجانية",

    contactTitle: "تواصل معنا",
    contactSubtitle: "ابدأ رحلتك نحو نمو واضح ومدروس اليوم. دعنا نناقش استراتيجية تسويق مشروعك.",
    contactNameLabel: "الاسم الكامل",
    contactNamePlaceholder: "مثال: علي أحمد",
    contactPhoneLabel: "رقم الهاتف / الواتساب",
    contactPhonePlaceholder: "مثال: 0770 123 4567",
    contactTypeLabel: "نوع النشاط التجاري",
    contactTypePlaceholder: "اختر قطاع عملك...",
    contactTypeOptions: [
      "مطعم / كافيه",
      "عيادة / مركز طبي",
      "عقارات / مشاريع سكنية",
      "تجارة إلكترونية / بيع بالتجزئة",
      "تعليم / تدريب",
      "جمال وأزياء",
      "تكنولوجيا / شركة ناشئة",
      "خدمات أخرى"
    ],
    contactServiceLabel: "الخدمة المطلوبة",
    contactServicePlaceholder: "ما هي الخدمة التي تحتاجها؟",
    contactServiceOptions: [
      "شريك تسويقي كامل (استراتيجية، محتوى، إعلانات، ويب)",
      "إدارة حسابات السوشيال ميديا",
      "حملات إعلانية ممولة",
      "هوية بصرية وبراندينغ",
      "إنتاج فيديو وصناعة ريلز",
      "تصميم وتطوير مواقع إلكترونية",
      "تحسين محركات البحث SEO وجوجل",
      "جلسة استشارة تسويقية"
    ],
    contactBudgetLabel: "الميزانية التسويقية الشهرية",
    contactBudgetPlaceholder: "اختر حدود ميزانيتك المتوقعة...",
    contactBudgetOptions: [
      "أقل من 500 دولار",
      "500 - 1,500 دولار",
      "1,500 - 3,000 دولار",
      "أكثر من 3,000 دولار",
      "تحدد بعد الاستشارة"
    ],
    contactMessageLabel: "تفاصيل إضافية عن أهدافك ومشروعك",
    contactMessagePlaceholder: "اكتب باختصار ما الذي ترغب في تحقيقه...",
    contactSubmit: "إرسال وتواصل عبر الواتساب",
    contactSuccess: "شكراً لك! تم تسجيل معلوماتك، لندردش الآن على الواتساب لمتابعة التفاصيل.",
    contactDetailsTitle: "معلومات الاتصال",
    contactPhoneVal: "+964 770 000 0000",
    contactEmailVal: "hello@uptrend.iq",
    contactLocationVal: "بغداد، العراق (نخدم كافة المحافظات العراقية)",

    footerDesc: "أب تريند (UP TREND) هي الوكالة التسويقية الأبرز في العراق للنمو وتطوير العلامات التجارية. نصنع الاستراتيجيات، المحتوى، الحملات الممولة، والمنتجات الرقمية التي تحول الانتباه إلى عوائد حقيقية.",
    footerLinksTitle: "روابط سريعة",
    footerServicesTitle: "خدماتنا",
    footerContactTitle: "اتصل بنا",
    footerCopyright: "© 2026 أب تريند. جميع الحقوق محفوظة."
  }
};
