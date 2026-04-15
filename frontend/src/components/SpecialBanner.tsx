import heroBridal from "@/assets/hero-bridal.jpg";

const SpecialBanner = () => {
  return (
    <section id="bridal" className="relative py-0 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        <div className="relative overflow-hidden group">
          <img
            src={heroBridal}
            alt="Bridal Collection"
            loading="lazy"
            width={1920}
            height={1080}
            className="w-full h-full object-cover min-h-[400px] transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-foreground/10" />
          {/* Floating elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-gold/20 rounded-full animate-float" />
          <div className="absolute bottom-20 right-20 w-16 h-16 bg-gold/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        </div>
        <div className="flex items-center justify-center bg-burgundy p-12 lg:p-20 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-32 h-32 border-2 border-gold rounded-full animate-pulse-slow" />
            <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-gold rotate-45 animate-spin-slow" />
          </div>
          
          <div className="max-w-md text-center lg:text-left relative z-10">
            <span className="font-body text-sm tracking-[0.3em] uppercase text-gold-light animate-fade-in-up inline-block">
              Exclusive Collection
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-cream mt-4 mb-6 leading-tight animate-slide-up">
              Bridal Grandeur
            </h2>
            <p className="font-body text-cream/80 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Celebrate your special moments with our handcrafted bridal sarees.
              Each piece is a masterwork of tradition, woven with love, gold zari,
              and timeless artistry passed down through generations.
            </p>
            <button className="px-8 py-4 bg-gold text-accent-foreground font-body font-semibold tracking-wide rounded-sm hover:bg-gold-dark transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-2 animate-bounce-in">
              Shop Bridal Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialBanner;
