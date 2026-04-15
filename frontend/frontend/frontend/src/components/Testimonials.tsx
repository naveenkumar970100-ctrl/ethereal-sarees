import { Star } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    text: "The Banarasi silk saree I purchased was absolutely stunning. The zari work is exquisite and the fabric quality is unmatched. Narsingh Sarees has a customer for life!",
    rating: 5,
  },
  {
    name: "Ananya Reddy",
    location: "Hyderabad",
    text: "My bridal saree from Narsingh was the highlight of my wedding. Everyone couldn't stop complimenting the intricate work. Thank you for making my day special!",
    rating: 5,
  },
  {
    name: "Meera Patel",
    location: "Ahmedabad",
    text: "I've been buying sarees from Narsingh for years. Their collection is always fresh, authentic, and the customer service is exceptional. Highly recommended!",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-cream-dark">
      <div className="container mx-auto px-4 text-center">
        <span className="font-body text-sm tracking-[0.3em] uppercase text-gold-dark animate-fade-in-up inline-block">Testimonials</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-12 animate-slide-up">
          What Our Customers Say
        </h2>

        <div className="max-w-2xl mx-auto relative min-h-[200px]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-700 ${
                i === current ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95 pointer-events-none"
              }`}
            >
              <div className="bg-background p-8 rounded-lg shadow-lg border border-gold/20 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={18} className="fill-gold text-gold animate-pulse" style={{ animationDelay: `${j * 0.1}s` }} />
                  ))}
                </div>
                <p className="font-body text-lg text-muted-foreground italic leading-relaxed mb-6 animate-fade-in-up">
                  "{t.text}"
                </p>
                <p className="font-heading text-lg font-semibold text-foreground animate-bounce-in">{t.name}</p>
                <p className="font-body text-sm text-muted-foreground">{t.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-150 ${
                i === current ? "bg-gold scale-125 animate-pulse" : "bg-border hover:bg-gold/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
