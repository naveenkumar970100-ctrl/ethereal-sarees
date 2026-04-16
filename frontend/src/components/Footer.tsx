import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="bg-foreground text-cream pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <h3 className="font-heading text-2xl font-bold text-gold mb-4">MYSORE SAREES</h3>
          <p className="font-body text-sm text-cream/70 leading-relaxed mb-6">
            Crafting timeless sarees since 1985. We bring you the finest handwoven silk sarees from the looms of India's most celebrated weavers.
          </p>
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-gold hover:border-gold text-cream/60 hover:text-accent-foreground transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
          {["About Us", "Collections", "Bridal Sarees", "Silk Sarees", "New Arrivals", "Sale"].map((l) => (
            <a key={l} href="#" className="block font-body text-sm text-cream/60 hover:text-gold py-1.5 transition-colors">
              {l}
            </a>
          ))}
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Customer Care</h4>
          {["Track Order", "Shipping Policy", "Returns & Exchange", "FAQs", "Size Guide", "Care Instructions"].map((l) => (
            <a key={l} href="#" className="block font-body text-sm text-cream/60 hover:text-gold py-1.5 transition-colors">
              {l}
            </a>
          ))}
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
              <p className="font-body text-sm text-cream/60">123, Silk Market, Varanasi, Uttar Pradesh, India - 221001</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-gold flex-shrink-0" />
              <p className="font-body text-sm text-cream/60">+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-gold flex-shrink-0" />
              <p className="font-body text-sm text-cream/60">info@mysoresarees.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider mb-8" />
      <p className="font-body text-center text-sm text-cream/40">
        © 2025 MysoreSarees. All rights reserved. Handcrafted with ❤️ in India.
      </p>
    </div>
  </footer>
);

export default Footer;
