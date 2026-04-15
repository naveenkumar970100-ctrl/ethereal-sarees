import { Truck, Shield, RotateCcw, Headphones } from "lucide-react";

const features = [
  { icon: Truck, title: "Free Shipping", desc: "On orders above ₹5,000" },
  { icon: Shield, title: "Authentic Silk", desc: "100% genuine handwoven" },
  { icon: RotateCcw, title: "Easy Returns", desc: "15-day return policy" },
  { icon: Headphones, title: "24/7 Support", desc: "Dedicated customer care" },
];

const Features = () => (
  <section className="py-16 bg-background border-t border-b border-gold/10">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {features.map(({ icon: Icon, title, desc }, index) => (
          <div 
            key={title} 
            className="text-center group animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 animate-pulse-slow">
              <Icon size={28} className="text-gold-dark group-hover:scale-125 transition-transform duration-300 animate-spin-slow" />
            </div>
            <h3 className="font-heading text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors group-hover:scale-105 transform duration-300">{title}</h3>
            <p className="font-body text-sm text-muted-foreground group-hover:translate-y-1 transition-transform duration-300">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
