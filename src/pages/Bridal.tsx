import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoppingBag, Heart, Sparkles, Crown, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Bridal = () => {
  const bridalCollection = [
    { 
      id: 1, 
      name: "Royal Banarasi Bridal", 
      price: 45999, 
      originalPrice: 55999,
      image: "/src/assets/saree-maroon.jpg", 
      category: "Banarasi",
      badge: "Bestseller"
    },
    { 
      id: 2, 
      name: "Kanjivaram Grand", 
      price: 52999, 
      originalPrice: 65999,
      image: "/src/assets/saree-red.jpg", 
      category: "Kanjivaram",
      badge: "Premium"
    },
    { 
      id: 3, 
      name: "Patani Heritage", 
      price: 38999, 
      originalPrice: 48999,
      image: "/src/assets/saree-pink.jpg", 
      category: "Patani",
      badge: "Traditional"
    },
    { 
      id: 4, 
      name: "Designer Embroidered", 
      price: 42999, 
      originalPrice: 52999,
      image: "/src/assets/saree-purple.jpg", 
      category: "Designer",
      badge: "Exclusive"
    },
    { 
      id: 5, 
      name: "Silk Wedding Special", 
      price: 48999, 
      originalPrice: 59999,
      image: "/src/assets/saree-orange.jpg", 
      category: "Silk",
      badge: "New"
    },
    { 
      id: 6, 
      name: "Golden Zari Work", 
      price: 55999, 
      originalPrice: 69999,
      image: "/src/assets/saree-yellow.jpg", 
      category: "Zari",
      badge: "Luxury"
    },
  ];

  const features = [
    { icon: Crown, title: "Premium Quality", description: "Handpicked finest silk and zari" },
    { icon: Gift, title: "Bridal Packaging", description: "Luxurious gift boxes included" },
    { icon: Sparkles, title: "Custom Designs", description: "Personalize your dream saree" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-gradient-to-r from-red-50 via-pink-50 to-gold/20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Crown className="text-primary" size={36} />
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary">
              Bridal Collection
            </h1>
            <Crown className="text-primary" size={36} />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Make your special day unforgettable with our exquisite bridal sarees, crafted with love and tradition
          </p>
          <Badge className="text-sm px-4 py-2 bg-primary/10 text-primary border-primary">
            ✨ Free Bridal Consultation Available
          </Badge>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-md text-center border border-gold/20">
              <feature.icon className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="font-heading text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bridal Sarees Grid */}
        <h2 className="font-heading text-3xl font-bold text-center mb-8 text-primary">
          Our Bridal Masterpieces
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bridalCollection.map((saree) => (
            <div key={saree.id} className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={saree.image}
                  alt={saree.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {saree.badge}
                  </Badge>
                </div>

                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  -{Math.round(((saree.originalPrice - saree.price) / saree.originalPrice) * 100)}%
                </div>

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <Heart size={20} />
                  </Button>
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <ShoppingBag size={20} />
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <Badge variant="outline" className="mb-2">{saree.category}</Badge>
                <h3 className="font-heading text-xl font-semibold mb-2">{saree.name}</h3>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-primary font-bold text-2xl">₹{saree.price.toLocaleString()}</span>
                  <span className="text-muted-foreground line-through">₹{saree.originalPrice.toLocaleString()}</span>
                </div>
                <Button className="w-full" size="lg">
                  <ShoppingBag size={18} className="mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Order Section */}
        <div className="mt-16 bg-gradient-to-r from-primary to-gold rounded-xl p-8 md:p-12 text-white text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Want a Custom Bridal Saree?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Work with our master weavers to create your dream bridal saree. Choose your fabric, color, design, and embellishments.
          </p>
          <Button size="lg" variant="secondary" className="px-8">
            Book Free Consultation
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Bridal;
