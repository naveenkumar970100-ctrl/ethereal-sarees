import { useEffect, useRef, useState } from "react";
import sareeBlue from "@/assets/saree-blue.jpg";
import sareeGreen from "@/assets/saree-green.jpg";
import sareeMaroon from "@/assets/saree-maroon.jpg";

const categories = [
  { image: sareeBlue, title: "Kanjivaram Silk", count: "120+ Designs" },
  { image: sareeGreen, title: "Banarasi Silk", count: "95+ Designs" },
  { image: sareeMaroon, title: "Patola Silk", count: "80+ Designs" },
];

const FeaturedCategories = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="collections" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="font-body text-sm tracking-[0.3em] uppercase text-gold-dark">Curated Collections</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">
            Shop by Category
          </h2>
          <div className="section-divider w-24 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
                visible ? "animate-fade-in-up opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-3"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-cream transform transition-all duration-500 group-hover:translate-y-[-10px]">
                <h3 className="font-heading text-2xl font-bold mb-1 group-hover:scale-105 transition-transform duration-300">{cat.title}</h3>
                <p className="font-body text-sm text-gold-light mb-2">{cat.count}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-body font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-2">
                  <span>Explore</span>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300 animate-bounce">→</span>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute top-4 right-4 bg-gold text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100 group-hover:rotate-12">
                Shop Now
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
