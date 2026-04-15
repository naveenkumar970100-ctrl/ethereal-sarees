import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroSaree from "@/assets/hero-saree.jpg";
import heroBridal from "@/assets/hero-bridal.jpg";
import heroCollection from "@/assets/hero-collection.jpg";

const slides = [
  {
    image: heroSaree,
    subtitle: "Handcrafted Excellence",
    title: "Timeless Silk Sarees",
    description: "Discover our exquisite collection of handwoven Banarasi silk sarees, crafted with centuries-old traditions.",
    cta: "Shop Collection",
  },
  {
    image: heroBridal,
    subtitle: "Bridal Collection 2025",
    title: "Your Dream Wedding Saree",
    description: "Make your special day unforgettable with our stunning bridal collection featuring intricate zari work.",
    cta: "Explore Bridal",
  },
  {
    image: heroCollection,
    subtitle: "New Arrivals",
    title: "Colors of India",
    description: "Vibrant hues and luxurious fabrics — explore our latest collection of premium silk sarees.",
    cta: "View New Arrivals",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 800);
    },
    [isAnimating]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            i === current ? "opacity-100 scale-100" : "opacity-0 scale-110"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full object-cover transition-transform duration-[2000ms] ${
              i === current ? "scale-100" : "scale-110"
            }`}
            width={1920}
            height={1080}
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <span
              key={`sub-${current}`}
              className="inline-block text-gold font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-slide-down"
            >
              {slides[current].subtitle}
            </span>
            <h1
              key={`title-${current}`}
              className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 leading-tight animate-slide-up"
            >
              {slides[current].title}
            </h1>
            <p
              key={`desc-${current}`}
              className="font-body text-cream/80 text-base md:text-lg mb-8 max-w-lg animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              {slides[current].description}
            </p>
            <button
              key={`cta-${current}`}
              className="group relative overflow-hidden px-8 py-4 bg-gold text-accent-foreground font-body font-semibold tracking-wide rounded-sm transition-all duration-500 hover:shadow-2xl hover:shadow-gold/30 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="relative z-10">{slides[current].cta}</span>
              <div className="absolute inset-0 bg-gold-dark transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-cream hover:bg-gold/50 hover:scale-110 hover:rotate-12 transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-cream hover:bg-gold/50 hover:scale-110 hover:-rotate-12 transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current ? "w-12 bg-gold animate-pulse" : "w-6 bg-cream/40 hover:bg-cream/60 hover:scale-125"
            }`}
          />
        ))}
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gold/30 rounded-full animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
