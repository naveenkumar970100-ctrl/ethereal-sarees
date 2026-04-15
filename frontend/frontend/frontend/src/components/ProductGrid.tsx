import { useState, useEffect, useRef } from "react";
import { Heart, ShoppingBag, Eye } from "lucide-react";
import sareeBlue from "@/assets/saree-blue.jpg";
import sareeGreen from "@/assets/saree-green.jpg";
import sareeMaroon from "@/assets/saree-maroon.jpg";
import sareePink from "@/assets/saree-pink.jpg";
import sareeYellow from "@/assets/saree-yellow.jpg";
import sareePurple from "@/assets/saree-purple.jpg";
import sareeOrange from "@/assets/saree-orange.jpg";
import heroSaree from "@/assets/hero-saree.jpg";

const products = [
  { id: 1, image: sareeBlue, name: "Royal Kanjivaram Silk", price: "₹12,500", originalPrice: "₹15,000", tag: "Bestseller" },
  { id: 2, image: sareeGreen, name: "Emerald Banarasi Zari", price: "₹18,900", originalPrice: "₹22,000", tag: "New" },
  { id: 3, image: sareeMaroon, name: "Maroon Patola Heritage", price: "₹14,200", originalPrice: "", tag: "" },
  { id: 4, image: sareePink, name: "Pink Chanderi Elegance", price: "₹8,500", originalPrice: "₹10,500", tag: "Sale" },
  { id: 5, image: sareeYellow, name: "Golden Tussar Tradition", price: "₹16,800", originalPrice: "", tag: "New" },
  { id: 6, image: sareePurple, name: "Purple Mysore Silk", price: "₹11,200", originalPrice: "₹13,000", tag: "" },
  { id: 7, image: sareeOrange, name: "Orange Paithani Classic", price: "₹19,500", originalPrice: "", tag: "Exclusive" },
  { id: 8, image: heroSaree, name: "Crimson Bridal Banarasi", price: "₹35,000", originalPrice: "₹42,000", tag: "Bridal" },
];

const ProductGrid = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="new-arrivals" className="py-20 bg-cream-dark" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="font-body text-sm tracking-[0.3em] uppercase text-gold-dark">Handpicked for You</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">
            Our Finest Sarees
          </h2>
          <div className="section-divider w-24 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div
              key={product.id}
              className={`group bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                visible ? "animate-fade-in-up opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
                {product.tag && (
                  <span className="absolute top-3 left-3 px-3 py-1 text-xs font-body font-semibold tracking-wide bg-primary text-primary-foreground rounded-sm animate-bounce">
                    {product.tag}
                  </span>
                )}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-500" />
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <button className="w-9 h-9 rounded-full bg-background/90 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-125 transition-all">
                    <Heart size={16} />
                  </button>
                  <button className="w-9 h-9 rounded-full bg-background/90 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-125 transition-all">
                    <Eye size={16} />
                  </button>
                  <button className="w-9 h-9 rounded-full bg-background/90 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-125 transition-all">
                    <ShoppingBag size={16} />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-heading text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="font-body font-bold text-primary text-lg animate-pulse-slow">{product.price}</span>
                  {product.originalPrice && (
                    <span className="font-body text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="group relative overflow-hidden px-10 py-4 border-2 border-primary text-primary font-body font-semibold tracking-wide rounded-sm transition-all duration-500 hover:text-primary-foreground hover:scale-105 hover:shadow-xl">
            <span className="relative z-10">View All Sarees</span>
            <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
