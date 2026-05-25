import { useState } from "react";
import { Product } from "../data";
import PerfumeSilhouette from "./PerfumeSilhouette";

interface ProductCardProps {
  key?: any;
  product: Product;
  displayFallback: boolean;
  onAddToCart: (product: Product) => void;
  onImageError: (productId: number) => void;
  locale: "en" | "ar";
}

export default function ProductCard({
  product,
  displayFallback,
  onAddToCart,
  onImageError,
  locale = "en",
}: ProductCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const isAr = locale === "ar";
  const displayName = isAr ? product.nameAr : product.name;
  const displayCategory = isAr ? product.categoryAr : product.category;
  const displayBadge = isAr ? product.badgeAr : product.badge;
  const displayDescription = isAr ? product.descriptionAr : product.description;
  const displayNotes = isAr ? product.notesAr : product.notes;

  const customInitials = displayName
    .split(" ")
    .map((w) => w[0])
    .join("");

  const handleAddToTrunk = () => {
    // Add to cart drawer state so it displays in trunk
    onAddToCart(product);
    
    // Direct link to WhatsApp
    const messageText = isAr 
      ? `مرحباً، هل هذا متوفر؟ ${product.nameAr}`
      : `Hi, is this available ? ${product.name}`;
    const waUrl = `https://wa.me/971562240144?text=${encodeURIComponent(messageText)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <article
      className="glass-card rounded-2xl overflow-hidden group flex flex-col justify-between relative"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Image wrap container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-burgundy-dark/60 border-b border-gold/10">
        
        {/* Badge */}
        <span className={`absolute top-4 ${isAr ? "right-4" : "left-4"} z-20 px-3 py-1 bg-burgundy-dark/80 backdrop-blur-md text-gold text-[9px] font-medium tracking-[0.2em] uppercase rounded border border-gold/20`}>
          {displayBadge}
        </span>

        {/* True elegant fallback silhouette representation */}
        {displayFallback ? (
          <PerfumeSilhouette initials={customInitials} />
        ) : (
          <>
            {/* Loading pulse tracker */}
            {!isLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-burgundy-deep via-burgundy-light to-burgundy-deep animate-pulse" />
            )}
            <img
              src={product.src}
              alt={displayName}
              loading="lazy"
              referrerPolicy="no-referrer"
              onLoad={() => setIsLoaded(true)}
              onError={() => {
                onImageError(product.id);
              }}
              className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </>
        )}

        {/* Quick fragrance preview overlay link */}
        <div className="absolute inset-0 bg-burgundy-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
          <p className="text-[10px] tracking-widest text-gold uppercase mb-2">
            {isAr ? "الملف العطري للمنتج" : "Olfactory Profile"}
          </p>
          <div className="flex flex-col gap-1 select-text">
            {displayNotes.map((note, nIdx) => (
              <span key={nIdx} className="text-xs text-white/90 font-light font-garamond italic">
                · {note}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Details Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <header className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-gold tracking-widest uppercase font-light">
              {displayCategory}
            </span>
            <span className="font-serif text-sm text-gold-light select-text">
              {isAr ? `${product.price} د.إ` : `AED ${product.price}`}
            </span>
          </header>

          <h3 className="font-serif text-lg tracking-wider text-white select-text mb-2 group-hover:text-gold transition-colors duration-300">
            {displayName}
          </h3>

          <p className="text-xs text-white/60 font-light leading-relaxed mb-6 line-clamp-2 select-text">
            {displayDescription}
          </p>
        </div>

        <button
          onClick={handleAddToTrunk}
          className="w-full py-3 border border-gold/30 hover:border-gold hover:bg-gold text-white hover:text-burgundy-dark text-[10px] tracking-[0.2em] rounded-lg uppercase transition-all duration-300 font-light cursor-pointer"
        >
          {isAr ? "أضف إلى الصندوق" : "Add to Trunk"}
        </button>
      </div>
    </article>
  );
}
