import React, { useState, useEffect } from "react";
import RainOnGlass from "./components/RainOnGlass";
import { 
  ShoppingBag, 
  Menu, 
  X, 
  ChevronRight, 
  Sparkles, 
  Shield, 
  Plus, 
  Minus, 
  Trash2, 
  Clock, 
  MapPin, 
  Phone, 
  Layers, 
  Flame, 
  Diamond, 
  Check, 
  Compass, 
  Heart, 
  Lock, 
  Globe 
} from "lucide-react";

import { PRODUCTS, type Product } from "./data";

// Import the shop logo (place your logo file at src/assets/images/logo.png)
import logo from "./assets/images/logo.png";

// Type definitions
interface CartItem {
  product: Product;
  quantity: number;
}

interface ToastState {
  show: boolean;
  msg: string;
}

// Inline luxury fallback artwork component
const PerfumeSilhouette: React.FC<{ initials: string }> = ({ initials }) => {
  return (
    <div className="w-full h-full relative flex items-center justify-center bg-burgundy-deep/90 select-none overflow-hidden group">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_40%,_rgba(0,0,0,0.8)_100%] z-0" />
      
      {/* Intricate royal framing */}
      <div className="absolute inset-2 border border-gold/10 rounded-sm pointer-events-none z-10" />
      <div className="absolute inset-3 border border-gold/5 rounded-sm pointer-events-none z-10" />
      
      {/* Glass bottle outline representation */}
      <div className="relative w-12 h-20 flex flex-col items-center justify-center z-20 transform group-hover:scale-105 transition-transform duration-700">
        {/* Spray Cap */}
        <div className="w-3 h-2 bg-gradient-to-r from-gold via-gold-light to-gold-dark rounded-t-sm border-b border-burgundy-dark/40" />
        {/* Collar */}
        <div className="w-5 h-1.5 bg-gold/80 border-b border-gold-dark/20" />
        {/* Bottle Shoulders */}
        <div className="w-10 h-3 bg-gradient-to-b from-gold/30 to-gold/20 rounded-t-lg border-t border-x border-gold/30" />
        {/* Bottle Body */}
        <div className="w-10 h-10 bg-gradient-to-b from-gold/15 to-gold/5 border-b border-x border-gold/25 relative flex items-center justify-center">
          {/* Glass internal fluid shader */}
          <div className="absolute bottom-1 inset-x-1 top-3 bg-gold/10 rounded-b-sm animate-pulse" />
          {/* Scent crest initials */}
          <span className="font-serif text-[10px] text-gold font-light tracking-widest relative z-30 drop-shadow">
            {initials}
          </span>
        </div>
        {/* Solid Glass base */}
        <div className="w-10 h-1.5 bg-gradient-to-r from-gold/40 via-gold-light/60 to-gold/40 rounded-b-sm border-t border-gold/20" />
      </div>

      {/* Floating dust particle aesthetic */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c9a96e_1px,transparent_1px)] [background-size:12px_12px] mix-blend-color-dodge" />
    </div>
  );
};

// Central bilingual translation dictionary
const TRANSLATIONS = {
  en: {
    languageName: "العربية",
    subtitle: "ESTABLISHED IN AJMAN, UAE · EST. 2025",
    shippingBanner: "PREMIUM CONCIERGE DELIVERIES ACROSS UAE · COMPLIMENTARY REGISTERED DISPATCH",
    navHome: "Home",
    navTrunk: "Fragrances",
    navStory: "Heritage",
    navBespoke: "Atelier",
    navContact: "Boutique",
    titleMain: "ROYAL DAN",
    tagline: "HAUTE PARFUMERIE",
    taglineSubtitle: "Invisible garments of presence, crafted inside Royal Dan. Refined in Ajman, UAE.",
    philosophyTitle: "The Scent Philosophy",
    philosophyQuote: "A masterwork fragrance is not worn to be noticed—it is whispered to be remembered.",
    collectionTitle: "The Signature Scent Trunk",
    collectionSubtitle: "Browse our permanent, organic collections composed with premium French raw essences.",
    filterAll: "Complete Register",
    filterSignature: "Signature",
    filterAbsolute: "Absolute",
    filterPrivate: "Private Dropped",
    bespokeTitle: "Bespoke Scent Atelier",
    bespokeDesc: "Commission a fully custom formula recorded into Royal Dan ledger vault, blended exclusively for your body chemistry.",
    exclusiveRightsTitle: "Private Formula Ledger",
    exclusiveRightsDesc: "Your master custom scent formula is locked and forever exclusive to your identity alone.",
    rareElementsTitle: "Ultra-Rare Botanical Extracts",
    rareElementsDesc: "Every bottle is formulated using aged oud oils, harvested botanicals, and high-purity absolutes.",
    inquireBtn: "Inquire Booking",
    royalVaultTitle: "The Royal Vault",
    royalVaultQuote: "One custom formula can hold over 100 exquisite botanical layers, forever binding your presence into an invisible, royal thread.",
    secureVaultLabel: "Secure Formula Vault",
    newsletterLabel: "Newsletter",
    newsletterTitle: "Join the Kingdom Circlet",
    newsletterDesc: "Receive private invitations to seasonal private drops, limited editions, and invitations to our exclusive private atelier dinners.",
    newsletterSubscribedLabel: "Formally Sealed",
    newsletterSuccessDesc: "Thank you. Your address has been entered into the Royal Dan ledger. A digital concierge token has been dispatched.",
    emailPlaceholder: "Enter your email address...",
    subscribeBtn: "Subscribe",
    visitLabel: "Our Boutique",
    visitTitle: "Visit Royal Dan",
    visitDesc: "Experience the olfactory masterpieces in person. Visit our signature showroom located in Ajman, UAE, and enjoy personalized scent consultation sessions.",
    addressTitle: "ADDRESS",
    addressVal: "Royal Dan Perfumes, Ajman, United Arab Emirates",
    hoursTitle: "BOUTIQUE HOURS",
    hoursVal: "Everyday: 10:00 AM — 10:00 PM",
    contactTitle: "CONTACT",
    footerText: "Royal Dan is premium haute parfum blending organic, hand-harvested ingredients to compose invisible garments for the modern connoisseur of fine elegance.",
    footerOrigin: "AJMAN · UNITED ARAB EMIRATES · EST. 2025",
    quickLinks: "Quick Links",
    customerCare: "Customer Care",
    linkHome: "Return to Home",
    linkCollection: "Our Fragrance Trunk",
    linkHeritage: "Brand Heritage",
    linkLocator: "Store Locator",
    linkBespoke: "Bespoke Atelier Booking",
    linkShipping: "Exclusive Shipping Policy",
    linkRefund: "Refund & Return Protocol",
    linkStockists: "Stockists Directory",
    linkConcierge: "Contact Concierge",
    linkPrivacy: "Privacy Rights & Terms",
    copyright: "© 2026 Royal Dan Parfumerie Royale. Designed under full production standard.",
    madeInLabel: "ESTABLISHED IN AJMAN, UAE",
    myScentTrunk: "My Scent Trunk",
    trunkEmptyTitle: "The Trunk is Empty",
    trunkEmptyDesc: "Compose your dynamic presence by selecting one of our bestselling French fragrance formulations.",
    browseShopBtn: "Browse Creation Shop",
    premiumShippingLabel: "Premium Shipping",
    gratisVal: "Gratis",
    grandTotal: "Grand Total",
    assembleBoxBtn: "Assemble Signature Box",
    protectionLabel: "Formula protection guaranteed, luxury box wrap",
    addedToTrunk: "Added to Scent Trunk",
    removedFromTrunk: "Removed from Scent Trunk",
    quantityUpdated: "Quantity updated",
    bookingInquirySent: "Atelier booking inquiry dispatched via WhatsApp concierge",
    vipBookingToast: "Connecting to royal atelier concierge ledger..."
  },
  ar: {
    languageName: "English",
    subtitle: "تأسست في عجمان، الإمارات العربية المتحدة · تأسست عام ٢٠٢٥",
    shippingBanner: "توصيل  فاخر في جميع أنحاء الإمارات · شحن ملكي ",
    navHome: "الرئيسية",
    navTrunk: "العطور",
    navStory: "تراثنا",
    navBespoke: "الورشة",
    navContact: "البوتيك",
    titleMain: "رويال دان",
    tagline: "العطور الفاخرة",
    taglineSubtitle: "ليس عطراً فقط… بل جوهرٌ يُولد في الحضور، ويُصقل في رويال دان، عجمان، الإمارات العربية المتحدة..",
    philosophyTitle: "فلسفة العطر الفاخر",
    philosophyQuote: "العطور الاستثنائية لا تُبتكر لتُلفت الأنظار، بل تُهمس في الوجدان لتبقى خالدة في الذاكرة.",
    collectionTitle: "خزانة العطور الملكية",
    collectionSubtitle: "تصفح مجموعاتنا العضوية المستدامة الممزوجة بأفخر الخلاصات والمستخلصات الفرنسية النادرة.",
    filterAll: "السجل الكامل",
    filterSignature: "التوقيع الخاص",
    filterAbsolute: "المشرق المطلق",
    filterPrivate: "الإصدارات الخاصة",
    bespokeTitle: "ورشة العطور الخاص",
    bespokeDesc: "صمم عطراً فريداً ومخصصاً بالكامل يُسجل في دفاتر رويال دان السرية ليتناغم تماماً مع طبيعة كيمياء جسدك ونبضك.",
    exclusiveRightsTitle: "سجل صياغة العطور الخاص",
    exclusiveRightsDesc: "صيغة عطر مخصصة بالكامل باسمك، تُكتب وتُحفظ في خزائننا ولا يُعاد استخدامها للغير نهائياً.",
    rareElementsTitle: "مستخلصات نباتية فائقة الندرة",
    rareElementsDesc: "كل زجاجة مركبة من دهن العود العتيق المعتق، والزهور الطبيعية الفاخرة المقطوفة باليد، والزيوت الطيارة النقية.",
    inquireBtn: "طلب حجز جلسة خاصة",
    royalVaultTitle: "القبو الملكي للمكونات",
    royalVaultQuote: "تركيبة عطرية مخصصة واحدة يمكن أن تحتوي على أكثر من ١٠٠ طبقة زهرية عتيقة، مغلفةً حضورك بخيوط من الهيبة الملكية غير المرئية.",
    secureVaultLabel: "خزينة صياغة العطور السرية",
    newsletterLabel: "النشرة الإخبارية",
    newsletterTitle: "انضم للمجوعة الملكية",
    newsletterDesc: "احصل على دعوات حصرية لأحدث الإصدارات الموسمية والإنتاجات المحدودة وتذاكر مآدب العشاء المغلقة في المتجر الخاص بنا.",
    newsletterSubscribedLabel: "خُتم بالبصمة الذهبية",
    newsletterSuccessDesc: "شكراً لك. تم إدخال عنوانك البريدي في سجل رويال دان وسيتم إرسال بروشور الإصدارات الحديثة قريباً.",
    emailPlaceholder: "أدخل عنوان بريدك الإلكتروني الموقر...",
    subscribeBtn: "اشتراك الكبار",
    visitLabel: "معرضنا البوتيك",
    visitTitle: "تفضل بزيارة رويال دان",
    visitDesc: "عش تجربة التحف العطرية النادرة بنفسك. تفضل بزيارة صالة عرضنا المميزة في عجمان، الإمارات، للاستمتاع بجلسة استشارية عطرية خاصة مذهلة.",
    addressTitle: "العنوان الرئيسي",
    addressVal: "رويال دان للعطور، عجمان، الإمارات العربية المتحدة",
    hoursTitle: "أوقات البوتيك الرسمية",
    hoursVal: "يومياً: ١٠:٠٠ صباحاً — ١٠:٠٠ مساءً",
    contactTitle: "التواصل المباشر",
    footerText: "شركة رويال دان هي ماركة عطور فاخرة تدمج المكونات العضوية المحصودة يدوياً لنسج رداء مخملي غير مرئي لخبراء الفخامة الساحرة والوقار الحديث.",
    footerOrigin: "عجمان · الإمارات العربية المتحدة · تأسست ٢٠٢٥",
    quickLinks: "روابط وصول سريعة",
    customerCare: "العناية بالعملاء والخصوصية",
    linkHome: "العودة للرئيسية",
    linkCollection: "خزانة العطور الكاملة",
    linkHeritage: "إرث وتراث الدار",
    linkLocator: "موقع البوتيك الفعلي",
    linkBespoke: "حجز جلسات الأتيليه",
    linkShipping: "سياسة الشحن الحصرية",
    linkRefund: "بروتوكول الاسترجاع والتبديل",
    linkStockists: "دليل الموزعين المعتمدين",
    linkConcierge: "الاتصال بالكونسيرج الفاخر",
    linkPrivacy: "حقوق الخصوصية والشروط العامة",
    copyright: "© ٢٠٢٦ رويال دان للعطور الفاخرة والبارفوم الملكي. صمم وفقاً لأرفع المقاييس.",
    madeInLabel: "تأسست وصُنعت في عجمان، الإمارات",
    myScentTrunk: "صندق عطور الموقر",
    trunkEmptyTitle: "الصندوق فارغ حالياً",
    trunkEmptyDesc: "ابدأ بتركيب طابع حضورك الآسر من خلال إضافة أحد أفخر تركيبات العطور الفرنسية المستوحاة من الجمال الخالد.",
    browseShopBtn: "تصفح صالة العطور الفاخرة",
    premiumShippingLabel: "الشحن الفاخر السريع",
    gratisVal: "مجاني بالكامل",
    grandTotal: "المجموع الكلي",
    assembleBoxBtn: "تحضير وشحن الصندوق الملكي",
    protectionLabel: "مكفولة الضمان الكامل بلفائف وصناديق قطيفة فاخرة بدون تغليف هدايا تجاري",
    addedToTrunk: "تمت الإضافة لخزانة عطورك",
    removedFromTrunk: "تمت إزالة العطر من الخزانة",
    quantityUpdated: "تم تحديث كمية المنتج",
    bookingInquirySent: "تم إرسال طلب حجز الأتيليه لعلاقات العملاء عبر الواتساب",
    vipBookingToast: "يرجى الانتظار، جاري توصيلك بسجل كونسيرج البلاط الملكي..."
  }
};

import ProductCard from "./components/ProductCard";

export default function App() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const isAr = lang === "ar";
  const t = TRANSLATIONS[lang];

  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [newsletterSubscribed, setNewsletterSubscribed] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [toast, setToast] = useState<ToastState>({ show: false, msg: "" });
  const [failedImageIds, setFailedImageIds] = useState<number[]>([]);

  // Update HTML tag direction dynamically for RTL support
  useEffect(() => {
    document.documentElement.dir = isAr ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  // Handle custom toasts with quick autohide
  const triggerToast = (msg: string) => {
    setToast({ show: true, msg });
    setTimeout(() => {
      setToast({ show: false, msg: "" });
    }, 3500);
  };

  // Add Item to perfume trunk with beautiful responsive UI trigger
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        triggerToast(`${t.quantityUpdated}: ${isAr ? product.nameAr : product.name}`);
        return prevCart.map((item) => 
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      triggerToast(`${t.addedToTrunk}: ${isAr ? product.nameAr : product.name}`);
      return [...prevCart, { product, quantity: 1 }];
    });
  };

  // Edit item volumes inside drawer
  const updateQuantity = (productId: number, increment: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + increment;
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  // Remove completely from cart list
  const removeFromCart = (productId: number) => {
    const item = cart.find((i) => i.product.id === productId);
    if (item) {
      triggerToast(`${t.removedFromTrunk}: ${isAr ? item.product.nameAr : item.product.name}`);
    }
    setCart((prevCart) => prevCart.filter((i) => i.product.id !== productId));
  };

  // Total Scent quantity selected
  const totalItemsCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  // Sum calculations
  const totalCartPrice = cart.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0);

  // Directly handle individual "Add to Trunk" clicking action via WhatsApp API
  const handleDirectProductWA = (product: Product) => {
    // Standard direct checkout message matching the user requirements:
    // "Hi, is this available ?" with the name of the perfume not the cart
    const prodName = isAr && product.nameAr ? product.nameAr : product.name;
    const prodText = `Hi, is this available ? Name: ${prodName} (AED ${product.price})`;
    const encoded = encodeURIComponent(prodText);
    const whatsappUrl = `https://wa.me/971562240144?text=${encoded}`;
    window.open(whatsappUrl, "_blank");
  };

  // Assemble full cart order directly to WhatsApp
  const handleCartCheckout = () => {
    if (cart.length === 0) return;
    
    let messageText = isAr 
      ? `مرحباً رويال دان، أود إرسال طلب شراء خزانة عطور تفصيلية:\n\n`
      : `Hi Royal Dan, I would like to submit my signature scent trunk order:\n\n`;

    cart.forEach((item, index) => {
      const pName = isAr && item.product.nameAr ? item.product.nameAr : item.product.name;
      const pCat = isAr && item.product.categoryAr ? item.product.categoryAr : item.product.category;
      
      messageText += `${index + 1}. [${pCat}] ${pName}\n`;
      messageText += `   ${isAr ? "الكمية" : "Qty"}: ${item.quantity} | ${isAr ? "السعر" : "Price"}: AED ${item.product.price}\n\n`;
    });

    messageText += `-----------------------\n`;
    messageText += `${isAr ? "المجموع الإجمالي" : "GRAND TOTAL"}: AED ${totalCartPrice}\n`;
    messageText += `${isAr ? "الشحن الفاخر كونسيرج" : "Premium Shipping"}: ${isAr ? "مجاني بالكامل" : "Gratis"}\n`;
    messageText += `${isAr ? "طلب من عجمان، الإمارات" : "Dispatched from Ajman, UAE"}\n\n`;
    messageText += isAr ? "يرجى تأكيد وتجهيز تركيبة صندوق رويال دان الفاخر الخاص بي لتوصيل الكونسيرج." : "Please verify and assemble my luxury Royal Dan scent box wrap.";

    const encoded = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/971562240144?text=${encoded}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans antialiased overflow-x-hidden selection:bg-gold selection:text-burgundy-dark relative">
      
      {/* Absolute Aesthetic Glow Background Highlights */}
      <div className="absolute top-0 inset-x-0 h-[800px] bg-gradient-to-b from-burgundy-dark/25 via-gold/5 to-transparent pointer-events-none z-0" />
      <div className="absolute top-[1200px] right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-[800px] left-0 w-[450px] h-[450px] rounded-full bg-burgundy-dark/10 blur-3xl pointer-events-none z-0" />

      {/* 2. Top Banner Alert Header */}
      <div className="w-full bg-gold/15 border-b border-gold/20 py-2.5 px-4 text-center z-50 relative select-none">
        <p className="text-[10px] tracking-widest text-gold font-light">
          {t.shippingBanner}
        </p>
      </div>

      <RainOnGlass />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 3. Luxury Navigation Bar */}
        <header className="border-b border-white/5 py-6 flex items-center justify-between relative z-40">
          
          {/* Menu Trigger */}
          <div className="block md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 text-white/70 hover:text-gold transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links Left */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] text-white/65 font-light">
            <a href="#" className="hover:text-gold transition-colors">{t.navHome}</a>
            <a href="#products" className="hover:text-gold transition-colors">{t.navTrunk}</a>
            <a href="#story" className="hover:text-gold transition-colors">{t.navStory}</a>
            <a href="#bespoke" className="hover:text-gold transition-colors">{t.navBespoke}</a>
          </nav>

          {/* Central Royal Brand Logo */}
          <div className="text-center flex flex-col items-center">
            {/* Decorative diamond accent */}
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block animate-pulse" />
              <Diamond className="w-4 h-4 text-gold stroke-[1]" />
              <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block animate-pulse" />
            </div>
            {/* Logo image instead of text title */}
            <a href="#" className="inline-block mt-1">
              <img
                src={logo}
                alt={t.titleMain}
                className="h-12 md:h-14 w-auto object-contain"
              />
            </a>
            <span className="text-[8px] tracking-[0.45em] text-gold-light uppercase font-light block mt-0.5">
              {t.tagline}
            </span>
          </div>

          {/* Right Scent Basket & Language Toggles */}
          <div className="flex items-center gap-4">
            
            {/* Language Selection Quick Switcher */}
            <button 
              onClick={() => {
                const targetLang = lang === "en" ? "ar" : "en";
                setLang(targetLang);
                triggerToast(targetLang === "ar" ? "تم التحويل إلى اللغة العربية" : "Switched to English Language");
              }}
              className="group flex items-center gap-1.5 border border-white/10 hover:border-gold/30 bg-white/5 hover:bg-gold/5 px-2.5 py-1.5 rounded text-[10px] tracking-wider text-white/80 transition-all font-light"
            >
              <Globe className="w-3.5 h-3.5 text-gold/80 group-hover:rotate-12 transition-transform" />
              {t.languageName}
            </button>

            {/* Shopping Trunk Basket Button */}
            <button 
              onClick={() => setCartOpen(true)}
              className="relative p-2 text-white/80 hover:text-gold transition-colors border border-white/5 hover:border-gold/20 rounded-full bg-white/5 flex items-center justify-center"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-4.5 h-4.5" />
              {totalItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gold text-[8px] font-bold text-burgundy-dark flex items-center justify-center animate-bounce">
                  {totalItemsCount}
                </span>
              )}
            </button>
          </div>
        </header>

        {/* 4. Navigation Panel for small viewports */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-burgundy-deep/98 backdrop-blur-xl z-50 p-6 flex flex-col justify-between animate-fade-in" dir={isAr ? "rtl" : "ltr"}>
            <div>
              <div className="flex items-center justify-between pb-8 border-b border-gold/15">
                <span className="font-serif text-lg tracking-[0.2em] text-white">{t.titleMain}</span>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-white/60 hover:text-gold transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-6 text-base tracking-widest text-white/80 uppercase font-light py-12 text-center">
                <a href="#" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold transition-colors">{t.navHome}</a>
                <a href="#products" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold transition-colors">{t.navTrunk}</a>
                <a href="#story" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold transition-colors">{t.navStory}</a>
                <a href="#bespoke" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold transition-colors">{t.navBespoke}</a>
                <a href="#location" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold transition-colors">{t.navContact}</a>
              </nav>
            </div>

            <div className="text-center text-[10px] text-white/30 border-t border-white/5 pt-6 font-mono font-light uppercase">
              {t.subtitle}
            </div>
          </div>
        )}

        {/* 5. Luxury Display Hero Banner Section with video background */}
        <section className="relative w-full overflow-hidden rounded-2xl my-8" style={{ minHeight: '80vh' }}>
          {/* Background video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            poster="/hero-fallback.jpg"   // optional fallback image
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep/70 via-burgundy-dark/60 to-burgundy-dark/80 z-[1]" />

          {/* Hero content – sits above the video */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-24 md:py-36 h-full">
            <span className="text-[10px] tracking-[0.35em] text-gold uppercase font-light mb-3 block animate-pulse">
              {t.subtitle}
            </span>
            <h2 className="font-serif text-5xl md:text-8xl tracking-[0.05em] text-white font-light uppercase leading-none drop-shadow-xl select-all">
              {t.titleMain}
            </h2>
            <div className="w-12 h-[1px] bg-gold/45 my-8" />
            <p className="font-garamond text-lg md:text-2xl text-white/80 tracking-wide max-w-2xl font-light italic leading-relaxed">
              {t.taglineSubtitle}
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a 
                href="#products" 
                className="px-8 py-3.5 bg-gradient-to-r from-gold via-gold-light to-gold border border-gold/40 hover:bg-gold-light text-burgundy-dark font-medium rounded text-xs tracking-[0.25em] uppercase shadow-lg shadow-gold/5 hover:shadow-gold/15 transition-all duration-300 transform hover:scale-[1.02]"
              >
                {t.navTrunk}
              </a>
              <a 
                href="#bespoke" 
                className="px-8 py-3.5 border border-white/10 hover:border-gold/40 bg-white/5 hover:bg-gold/5 text-white hover:text-gold-light rounded text-xs tracking-[0.25em] uppercase transition-all duration-300"
              >
                {t.navBespoke}
              </a>
            </div>
          </div>
        </section>

        {/* Brand Scent Wisdom Quote Banner */}
        <div className="w-full border-y border-gold/15 bg-white/5 py-12 px-4 text-center my-8 max-w-5xl mx-auto rounded-xl" dir={isAr ? "rtl" : "ltr"}>
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-light block mb-2">{t.philosophyTitle}</span>
          <p className="font-serif text-lg md:text-2xl text-white/85 max-w-3xl mx-auto italic tracking-wider leading-relaxed">
            "{t.philosophyQuote}"
          </p>
        </div>

        {/* 7. Catalog list products with category registers */}
        <section id="products" className="py-24 scroll-mt-12 relative z-20">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.35em] text-gold uppercase font-light mb-2 block font-mono">EST. 2025</span>
            <h2 className="font-serif text-3xl md:text-5xl tracking-wide text-white uppercase font-light">
              {t.collectionTitle}
            </h2>
            <p className="text-xs md:text-sm text-white/40 tracking-wider font-light max-w-md mx-auto mt-3">
              {t.collectionSubtitle}
            </p>
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16 max-w-2xl mx-auto" dir={isAr ? "rtl" : "ltr"}>
            {[
              { id: "All", label: t.filterAll },
              { id: "Signature", label: t.filterSignature },
              { id: "Absolute", label: t.filterAbsolute },
              { id: "Private Drop", label: t.filterPrivate }
            ].map((cat) => (
              <button 
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded text-[10px] tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === cat.id 
                    ? "bg-gold text-burgundy-dark font-medium border border-gold" 
                    : "border border-white/5 hover:border-gold/20 bg-white/5 text-white/70 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Dynamic Grid Listing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS
              .filter((p) => activeCategory === "All" || p.category === activeCategory)
              .map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  displayFallback={failedImageIds.includes(product.id)}
                  onAddToCart={addToCart}
                  onImageError={(id) => setFailedImageIds((prev) => [...prev, id])}
                  locale={lang}
                />
              ))}
          </div>
        </section>

        {/* 8. Bespoke Custom Scent Atelier section */}
        <section id="bespoke" className="py-24 border-t border-gold/10 scroll-mt-12 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Context details */}
            <div className="text-right md:text-left" dir={isAr ? "rtl" : "ltr"}>
              <span className="text-[10px] tracking-[0.35em] text-gold uppercase font-light mb-2 block">{t.navBespoke}</span>
              <h2 className="font-serif text-3xl md:text-5xl tracking-wide text-white font-light uppercase leading-tight mb-6">
                {t.bespokeTitle}
              </h2>
              <p className="font-garamond text-lg text-white/90 leading-relaxed mb-10 tracking-wide font-light">
                {t.bespokeDesc}
              </p>

              <div className="flex flex-col gap-6 max-w-xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/10 rounded-xl border border-gold/20 text-gold shrink-0">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm text-white font-medium tracking-wide mb-1">{t.exclusiveRightsTitle}</h4>
                    <p className="text-xs text-white/60 font-light">{t.exclusiveRightsDesc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/10 rounded-xl border border-gold/20 text-gold shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm text-white font-medium tracking-wide mb-1">{t.rareElementsTitle}</h4>
                    <p className="text-xs text-white/60 font-light font-sans">{t.rareElementsDesc}</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => {
                  triggerToast(t.vipBookingToast);
                  // Dispatches booking enquiry details directly via WhatsApp
                  const enquiry = isAr 
                    ? `مرحباً رويال دان، أود حجز موعد استشارة وتصميم عطر شخصي مخصص في الأتيليه الخاص بكم.` 
                    : `Hi Royal Dan, I would like to inquire regarding a bespoke scent session appointment in your atelier, Ajman UAE.`;
                  const encoded = encodeURIComponent(enquiry);
                  const waUrl = `https://wa.me/971562240144?text=${encoded}`;
                  setTimeout(() => {
                    window.open(waUrl, "_blank");
                  }, 800);
                }}
                className="mt-10 px-8 py-4 bg-gold hover:bg-gold-light text-burgundy-dark font-medium rounded-full text-xs tracking-widest uppercase transition-all duration-300 pointer-events-auto"
              >
                {t.inquireBtn}
              </button>
            </div>

            {/* Visual Frame - Premium Aesthetic */}
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-gold/20 bg-burgundy-dark/80 group">
              <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_40%,_rgba(7,2,4,0.95)_100%] z-10" />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center z-20" dir={isAr ? "rtl" : "ltr"}>
                <Diamond className="w-12 h-12 text-gold stroke-[0.75] mb-4 animate-spin-slow" />
                <h3 className="font-serif text-2xl text-gold-light tracking-widest uppercase mb-2">{t.royalVaultTitle}</h3>
                <p className="text-xs text-white/70 max-w-sm tracking-wider font-light italic font-garamond leading-relaxed">
                  {t.royalVaultQuote}
                </p>
                <div className="mt-6 flex items-center gap-1.5 text-[9px] tracking-widest uppercase text-gold/60 border border-gold/20 px-3 py-1 bg-burgundy-dark/50 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                  {t.secureVaultLabel}
                </div>
              </div>
              {/* Fallback pattern inside vault block */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#c9a96e_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            </div>
          </div>
        </section>

        {/* Newsletter Signup Banner */}
        <section className="py-24 px-4 bg-burgundy-dark relative border-t border-gold/10 z-20">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-light mb-2">{t.newsletterLabel}</span>
            <h3 className="font-serif text-2xl md:text-4xl text-white font-light uppercase tracking-widest mb-4">
              {t.newsletterTitle}
            </h3>
            <p className="text-xs md:text-sm text-white/60 font-light max-w-md mb-8 leading-relaxed">
              {t.newsletterDesc}
            </p>

            {newsletterSubscribed ? (
              <div className="flex flex-col items-center gap-3 p-8 border border-gold/20 bg-burgundy-deep/40 rounded-xl max-w-md w-full animate-fade-in" dir={isAr ? "rtl" : "ltr"}>
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold flex items-center justify-center text-gold">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-medium text-white tracking-widest uppercase">{t.newsletterSubscribedLabel}</h4>
                <p className="text-xs text-white/70 text-center font-light leading-relaxed">
                  {t.newsletterSuccessDesc}
                </p>
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email.trim()) {
                    setNewsletterSubscribed(true);
                  }
                }}
                className={`w-full max-w-md flex flex-col sm:flex-row gap-3 ${isAr ? "sm:flex-row-reverse" : ""}`}
              >
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  required
                  className={`flex-1 bg-burgundy-deep/45 border border-gold/20 text-white placeholder-white/30 text-xs px-5 py-3 rounded-lg focus:outline-none focus:border-gold transition-colors font-light ${isAr ? "text-right" : "text-left"}`}
                />
                <button 
                  type="submit"
                  className="px-6 py-3 bg-gold hover:bg-gold-light text-burgundy-dark font-medium tracking-[0.2em] uppercase rounded-lg text-xs transition-colors shrink-0"
                >
                  {t.subscribeBtn}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Boutique Location Section */}
        <section id="location" className="py-24 px-4 max-w-7xl mx-auto w-full relative z-20 border-t border-gold/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Details on the side */}
            <div className="lg:col-span-12 xl:col-span-5 text-right md:text-left">
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-light mb-2 block">{t.visitLabel}</span>
              <h2 className="font-serif text-3xl md:text-5xl tracking-wide text-white font-light uppercase mb-6">
                {t.visitTitle}
              </h2>
              <p className="font-garamond text-lg text-white/85 leading-relaxed mb-8">
                {t.visitDesc}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-light text-white/70">
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                  <div>
                    <strong className="text-white block font-medium tracking-wider mb-0.5">{t.addressTitle}</strong>
                    <span className="text-white/60">{t.addressVal}</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                  <div>
                    <strong className="text-white block font-medium tracking-wider mb-0.5">{t.hoursTitle}</strong>
                    <span className="text-white/60">{t.hoursVal}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                  <div>
                    <strong className="text-white block font-medium tracking-wider mb-0.5">{t.contactTitle}</strong>
                    <span className="text-white/60" dir="ltr">+971 56 224 0144</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Iframe Embedded Map Frame */}
            <div className="lg:col-span-12 xl:col-span-7 h-[450px] relative rounded-3xl overflow-hidden border border-gold/20 shadow-2xl bg-burgundy-deep w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d347.440019453595!2d55.45771681205129!3d25.38501022923742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f59003f297175%3A0x4d0e39186992d2dd!2sRoyal%20Dan%20Perfumes!5e0!3m2!1sen!2sae!4v1779735499966!5m2!1sen!2sae" 
                className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-85 hover:opacity-100 hover:filter-none transition-all duration-700"
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Royal Dan Perfumes Location Map"
              />
            </div>

          </div>
        </section>

        {/* 6. Footer section */}
        <footer className="w-full bg-burgundy-dark text-white/70 border-t border-gold/10 py-16 px-4 relative z-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16" dir={isAr ? "rtl" : "ltr"}>
            
            {/* Logo and Brief */}
            <div className="md:col-span-2 text-right md:text-left">
              <div className="flex items-center gap-2 mb-4">
                <Diamond className="w-5 h-5 text-gold" />
                <span className="font-serif text-lg tracking-[0.2em] text-white uppercase font-light">
                  {isAr ? "رويال دان" : "Royal Dan"}
                </span>
              </div>
              <p className="text-xs text-white/50 leading-relaxed font-light max-w-sm mb-6">
                {t.footerText}
              </p>
              <div className="text-xs text-gold/80 font-mono tracking-wider">
                {t.footerOrigin}
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-right md:text-left">
              <h4 className="text-[11px] tracking-[0.25em] text-white uppercase mb-4 font-medium">{t.quickLinks}</h4>
              <ul className="flex flex-col gap-2.5 text-xs font-light text-white/50">
                <li><a href="#" className="hover:text-gold transition-colors">{t.linkHome}</a></li>
                <li><a href="#products" className="hover:text-gold transition-colors">{t.linkCollection}</a></li>
                <li><a href="#story" className="hover:text-gold transition-colors">{t.linkHeritage}</a></li>
                <li><a href="#location" className="hover:text-gold transition-colors">{t.linkLocator}</a></li>
                <li><a href="#bespoke" className="hover:text-gold transition-colors">{t.linkBespoke}</a></li>
              </ul>
            </div>

            {/* Stockists & Info */}
            <div className="text-right md:text-left">
              <h4 className="text-[11px] tracking-[0.25em] text-white uppercase mb-4 font-medium">{t.customerCare}</h4>
              <ul className="flex flex-col gap-2.5 text-xs font-light text-white/50">
                <li><a href="#" className="hover:text-gold transition-colors">{t.linkShipping}</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">{t.linkRefund}</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">{t.linkStockists}</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">{t.linkConcierge}</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">{t.linkPrivacy}</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright banner */}
          <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/30 font-light gap-4" dir={isAr ? "rtl" : "ltr"}>
            <p>{t.copyright}</p>
            <p className="tracking-widest">{t.madeInLabel}</p>
          </div>
        </footer>

        {/* 11. Shopping Trunk Side Drawer / Cart Panel */}
        <div className={`fixed inset-y-0 w-full sm:max-w-md bg-burgundy-deep/95 backdrop-blur-2xl z-50 shadow-2xl transition-transform duration-500 flex flex-col justify-between border-gold/25 ${
          cartOpen ? "translate-x-0" : isAr ? "-translate-x-full" : "translate-x-full"
        } ${isAr ? "left-0 border-r" : "right-0 border-l"}`} dir={isAr ? "rtl" : "ltr"}>
          <div>
            {/* Drawer Header */}
            <div className="p-6 border-b border-gold/15 flex items-center justify-between bg-burgundy-dark/50">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-gold" />
                <span className="font-serif text-base tracking-widest text-white uppercase font-light">{t.myScentTrunk}</span>
                <span className="text-[10px] text-white/50 bg-gold/15 border border-gold/20 px-2 py-0.5 rounded-full inline-block">
                  {totalItemsCount}
                </span>
              </div>
              <button 
                onClick={() => setCartOpen(false)}
                className="p-1.5 text-white/50 hover:text-gold transition-colors rounded-full border border-white/10 hover:border-gold/30"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="p-6 overflow-y-auto max-h-[60vh] flex flex-col gap-6 scrollbar-thin">
              {cart.length === 0 ? (
                <div className="text-center py-16 flex flex-col items-center">
                  <span className="p-4 bg-gold/5 rounded-full border border-gold/10 text-gold mb-4">
                    <Sparkles className="w-6 h-6 animate-pulse" />
                  </span>
                  <h4 className="font-serif text-lg tracking-widest text-white mb-2 uppercase font-light">{t.trunkEmptyTitle}</h4>
                  <p className="text-xs text-white/40 font-light max-w-xs leading-relaxed mb-6">
                    {t.trunkEmptyDesc}
                  </p>
                  <button 
                    onClick={() => setCartOpen(false)}
                    className="px-6 py-2.5 bg-gold hover:bg-gold-light text-burgundy-dark font-medium rounded-lg text-xs tracking-widest uppercase transition-colors"
                  >
                    {t.browseShopBtn}
                  </button>
                </div>
              ) : (
                cart.map((item) => {
                  const itemTitle = isAr && item.product.nameAr ? item.product.nameAr : item.product.name;
                  const itemCat = isAr && item.product.categoryAr ? item.product.categoryAr : item.product.category;
                  return (
                    <div key={item.product.id} className="flex gap-4 border-b border-white/5 pb-4">
                      {/* Tiny representation of perfume fallback */}
                      <div className="w-16 h-20 rounded bg-burgundy-dark border border-gold/10 overflow-hidden shrink-0">
                        <PerfumeSilhouette initials={item.product.name.split(" ").map(w => w[0]).join("")} />
                      </div>

                      {/* Details in Drawer */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-1">
                            <h4 className="text-xs font-serif text-white tracking-wider select-text text-right md:text-left">{itemTitle}</h4>
                            <span className="text-xs font-serif text-gold-light shrink-0">AED {item.product.price}</span>
                          </div>
                          <p className="text-[10px] text-white/40 font-light mt-0.5 text-right md:text-left">{itemCat}</p>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                          {/* Quantity controls */}
                          <div className="flex items-center border border-gold/20 rounded" dir="ltr">
                            <button 
                              onClick={() => updateQuantity(item.product.id, -1)}
                              className="p-1 px-2 text-white/50 hover:text-gold transition-colors text-xs"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs text-white font-medium px-2">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.product.id, 1)}
                              className="p-1 px-2 text-white/50 hover:text-gold transition-colors text-xs"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          {/* Remove item button */}
                          <button 
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-white/40 hover:text-red-400 p-1 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Drawer checkout summary section */}
          {cart.length > 0 && (
            <div className="p-6 bg-burgundy-dark/90 border-t border-gold/25 flex flex-col gap-4">
              <div className="flex items-center justify-between text-xs tracking-wider">
                <span className="text-white/60 font-light uppercase">{t.premiumShippingLabel}</span>
                <span className="text-gold uppercase font-light">{t.gratisVal}</span>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <span className="font-serif text-base text-white uppercase tracking-widest font-light">{t.grandTotal}</span>
                <span className="font-serif text-lg text-gold-light select-text">AED {totalCartPrice}</span>
              </div>
              
              <button 
                onClick={handleCartCheckout}
                className="w-full py-4 bg-gold hover:bg-gold-light text-burgundy-dark font-medium tracking-widest text-xs uppercase rounded-lg shadow-xl hover:shadow-gold/10 transition-all duration-300 transform hover:scale-[1.02]"
              >
                {t.assembleBoxBtn}
              </button>
              
              <div className="flex items-center justify-center gap-1.5 text-[10px] text-white/40 font-light text-center font-sans">
                <Shield className="w-3.5 h-3.5 text-gold/60" />
                {t.protectionLabel}
              </div>
            </div>
          )}
        </div>


        {/* 13. Absolute Toast Notification Panel */}
        <div className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none transition-all duration-500 ease-in-out ${
          toast.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`} dir={isAr ? "rtl" : "ltr"}>
          <div className="bg-burgundy-dark/90 backdrop-blur-xl border border-gold/40 px-6 py-4 rounded-xl flex items-center gap-3 shadow-2xl max-w-sm">
            <div className="w-6 h-6 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold shrink-0">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <p className="text-xs text-white/90 font-light tracking-wide select-text">
              {toast.msg}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}