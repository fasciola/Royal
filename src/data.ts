// 📦 Import images at the top (Vite will process these)
import casablancaImg from './assets/images/casablanca_perfume_1779729961655.png';
import roseKashanImg from './assets/images/rose_kashan_perfume_1779729946168.png';
import blackDiamondImg from './assets/images/black_diamond_perfume_1779729913471.png';
import imperialImg from './assets/images/imperial.png';
import no5AvenueGoldImg from './assets/images/no5_avenue_gold_perfume_1779729877047.png';
import blackCrystalImg from './assets/images/black_crystal_perfume_1779729893080.png';
import kilimanjaroImg from './assets/images/kilimanjaro_blue_perfume_1779729861855.png';
import royalSilverImg from './assets/images/royal_silver_perfume_1779729846295.png';
import goldenOudImg from './assets/images/golden_oud_perfume_1779729828940.png';
import decisionImg from './assets/images/decision_perfume_1779729931290.png';
import hamsahShougImg from './assets/images/vetiver_precieux_perfume_1779729989073.png';
import royalMuskImg from './assets/images/Royal_Musk.png';
import bandarFleurImg from './assets/images/BANDAR.png';
import sandalImg from './assets/images/SANDAL.png';

export interface Product {
  id: number;
  name: string;
  nameAr: string;
  category: string;
  categoryAr: string;
  badge: string;
  badgeAr: string;
  price: number;
  description: string;
  descriptionAr: string;
  src: string;
  notes: string[];
  notesAr: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Casablanca",
    nameAr: "كازابلانكا",
    category: "Signature",
    categoryAr: "التوقيع الخاص",
    badge: "Bestseller",
    badgeAr: "الأكثر مبيعاً",
    price: 90,
    description: "An exotic essence inspired by timeless romantic landscapes.",
    descriptionAr: "جوهر غريب مستوحى من المناظر الطبيعية الرومانسية الخالدة.",
    src: casablancaImg, // ✅ Use imported variable
    notes: [],
    notesAr: []
  },
  {
    id: 2,
    name: "Rose Kashan",
    nameAr: "روز كاشان",
    category: "Signature",
    categoryAr: "التوقيع الخاص",
    badge: "Highly Rated",
    badgeAr: "مقيّم بدرجة عالية",
    price: 90,
    description: "A delicate tribute to the historic fields of Rose Kashan.",
    descriptionAr: "تحية رقيقة لحقول ورد كاشان التاريخية العريقة.",
    src: roseKashanImg,
    notes: [],
    notesAr: []
  },
  {
    id: 3,
    name: "Black Diamond",
    nameAr: "بلاك دايموند",
    category: "Absolute",
    categoryAr: "المشرق المطلق",
    badge: "Premium",
    badgeAr: "بريميوم فاخر",
    price: 90,
    description: "Bold, rich, and dark, symbolizing unyielding luxury.",
    descriptionAr: "جريء وغني وداكن، يرمز إلى الفخامة والوقار المطلق.",
    src: blackDiamondImg,
    notes: [],
    notesAr: []
  },
  {
    id: 4,
    name: "IMPERIAL",
    nameAr: "إمبيريال",
    category: "Absolute",
    categoryAr: "المشرق المطلق",
    badge: "Royal Choice",
    badgeAr: "الخيار الملكي",
    price: 90,
    description: "A prestigious formulation reserved for the modern connoisseur.",
    descriptionAr: "تركيبة مرموقة محفوظة لخبراء الرقي والفخامة المعاصرة.",
    src: imperialImg,
    notes: [],
    notesAr: []
  },
  {
    id: 5,
    name: "No5 Avenue Gold",
    nameAr: "رقم 5 أفينيو جولد",
    category: "Signature",
    categoryAr: "التوقيع الخاص",
    badge: "Popular",
    badgeAr: "شائع ومحبوب",
    price: 90,
    description: "A glittering presentation of pure golden luxury and elegance.",
    descriptionAr: "عرض متلألئ من الفخامة الذهبية الخالصة والأناقة الساحرة.",
    src: no5AvenueGoldImg,
    notes: [],
    notesAr: []
  },
  {
    id: 6,
    name: "Black Crystal",
    nameAr: "بلاك كريستال",
    category: "Absolute",
    categoryAr: "المشرق المطلق",
    badge: "Exclusive",
    badgeAr: "حصري وخاص",
    price: 90,
    description: "Deep, pristine, and beautifully multifaceted charm.",
    descriptionAr: "عميق، نقي، وسحر يفيض بالجاذبية متعددة الأبعاد.",
    src: blackCrystalImg,
    notes: [],
    notesAr: []
  },
  {
    id: 7,
    name: "kilimanjaro",
    nameAr: "كليمنجارو",
    category: "Private Drop",
    categoryAr: "الإصدارات الخاصة",
    badge: "Adventurous",
    badgeAr: "مغامر وآسر",
    price: 90,
    description: "Inspired by the high, refreshing peaks of Kilimanjaro.",
    descriptionAr: "مستوحى من القمم العالية والمنعشة لجبل كليمنجارو الساحر.",
    src: kilimanjaroImg,
    notes: [],
    notesAr: []
  },
  {
    id: 8,
    name: "Royal Selver",
    nameAr: "رويال سيلفر",
    category: "Signature",
    categoryAr: "التوقيع الخاص",
    badge: "Elegant",
    badgeAr: "أنيق عريق",
    price: 90,
    description: "Refined and bright metallic luster that commands presence.",
    descriptionAr: "بريق معدني مشرق ومصقول يفرض طابع الحضور والجمال.",
    src: royalSilverImg,
    notes: [],
    notesAr: []
  },
  {
    id: 9,
    name: "Golden Oud",
    nameAr: "جولدن عود",
    category: "Absolute",
    categoryAr: "المشرق المطلق",
    badge: "Classic",
    badgeAr: "كلاسيك ملهم",
    price: 90,
    description: "The timeless warm golden glow of premium luxury oud.",
    descriptionAr: "التوهج الذهبي الدافئ والخالد لدهن العود الفاخر والعتيق.",
    src: goldenOudImg,
    notes: [],
    notesAr: []
  },
  {
    id: 10,
    name: "Decision",
    nameAr: "ديسيجن",
    category: "Private Drop",
    categoryAr: "الإصدارات الخاصة",
    badge: "Bold Choice",
    badgeAr: "الخيار الجريء",
    price: 90,
    description: "A decisive, powerful statement fragrance for ambitious minds.",
    descriptionAr: "عطر حاسم وقوي يمثل الهيبة والوقار للشخصيات الطموحة.",
    src: decisionImg,
    notes: [],
    notesAr: []
  },
  {
    id: 11,
    name: "HAMSAH SHOUG",
    nameAr: "همسة شوق",
    category: "Private Drop",
    categoryAr: "الإصدارات الخاصة",
    badge: "Emotional",
    badgeAr: "شوق آسر",
    price: 100,
    description: "A tender whisper of affection translated into an olfactory embrace.",
    descriptionAr: "همسة رقيقة من المودة والجاذبية تترجم في رداء عطري دافئ.",
    src: hamsahShougImg,
    notes: [],
    notesAr: []
  },
  {
    id: 12,
    name: "Royal Musk",
    nameAr: "رويال مسك",
    category: "Signature",
    categoryAr: "التوقيع الخاص",
    badge: "Rare Selection",
    badgeAr: "مختارات نادرة",
    price: 100,
    description: "Pristine white musk fit for royalty and noble presences.",
    descriptionAr: "المسك الأبيض الصافي والنقي المصمم لأصحاب الوقار والهيبة الملكية.",
    src: royalMuskImg,
    notes: [],
    notesAr: []
  },
  {
    id: 13,
    name: "Bandar Fleur",
    nameAr: "بندر فلور",
    category: "Private Drop",
    categoryAr: "الإصدارات الخاصة",
    badge: "New Release",
    badgeAr: "إصدار جديد",
    price: 50,
    description: "A fresh floral bouquet of unmatched modern grace.",
    descriptionAr: "باقة زهور طبيعية منعشة تعبر عن النعومة والأناقة العصرية.",
    src: bandarFleurImg,
    notes: [],
    notesAr: []
  },
  {
    id: 14,
    name: "Sandal",
    nameAr: "صندل",
    category: "Signature",
    categoryAr: "التوقيع الخاص",
    badge: "Pure Sandalwood",
    badgeAr: "خشب الصندل النقي",
    price: 60,
    description: "Deep, warm, and creamy sandalwood of legendary distinction.",
    descriptionAr: "خشب صندل عتيد، عميق، دافئ وكريمي بمستوى تميز وتفرد أسطوري.",
    src: sandalImg,
    notes: [],
    notesAr: []
  }
];