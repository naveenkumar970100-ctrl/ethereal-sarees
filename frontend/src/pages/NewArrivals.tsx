import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoppingBag, Heart, Sparkles, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import sareePink from "@/assets/saree-pink.jpg";
import sareeGreen from "@/assets/saree-green.jpg";
import sareeBlue from "@/assets/saree-blue.jpg";
import sareeOrange from "@/assets/saree-orange.jpg";
import sareePurple from "@/assets/saree-purple.jpg";
import sareeYellow from "@/assets/saree-yellow.jpg";
import sareeMaroon from "@/assets/saree-maroon.jpg";

const NewArrivals = () => {
  const newArrivals = [
    { 
      id: 1, 
      name: "Celestial Silk", 
      price: 14999, 
      originalPrice: 18999,
      image: sareePink, 
      tag: "Just In",
      days: 2
    },
    { 
      id: 2, 
      name: "Emerald Dreams", 
      price: 11999, 
      originalPrice: 14999,
      image: sareeGreen, 
      tag: "New",
      days: 5
    },
    { 
      id: 3, 
      name: "Royal Indigo", 
      price: 13499, 
      originalPrice: 16999,
      image: sareeBlue, 
      tag: "Just In",
      days: 1
    },
    { 
      id: 4, 
      name: "Sunset Glow", 
      price: 9999, 
      originalPrice: 12999,
      image: sareeOrange, 
      tag: "New",
      days: 7
    },
    { 
      id: 5, 
      name: "Lavender Luxe", 
      price: 15999, 
      originalPrice: 19999,
      image: sareePurple, 
      tag: "Just In",
      days: 3
    },
    { 
      id: 6, 
      name: "Golden Hour", 
      price: 12499, 
      originalPrice: 15499,
      image: sareeYellow, 
      tag: "New",
      days: 4
    },
    { 
      id: 7, 
      name: "Crimson Elegance", 
      price: 16999, 
      originalPrice: 20999,
      image: sareeMaroon, 
      tag: "Just In",
      days: 1
    },
    { 
      id: 8, 
      name: "Midnight Silk", 
      price: 13999, 
      originalPrice: 17499,
      image: sareeBlue, 
      tag: "New",
      days: 6
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-gradient-to-br from-primary/20 via-gold/10 to-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-primary" size={28} />
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary">
              New Arrivals
            </h1>
            <Sparkles className="text-primary" size={28} />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our latest collection of exquisite sarees, freshly arrived and ready to make you shine
          </p>
        </div>
      </div>

      {/* Featured Banner */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-primary to-gold rounded-xl p-8 text-white mb-12 flex items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Spring Collection 2026</h2>
            <p className="text-white/90">Get 20% off on all new arrivals this week only!</p>
          </div>
          <Clock size={64} className="hidden md:block opacity-50" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <div key={product.id} className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Tags */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <Badge className="bg-primary text-primary-foreground">
                    {product.tag}
                  </Badge>
                  {product.days <= 3 && (
                    <Badge className="bg-red-500 text-white">
                      Hot
                    </Badge>
                  )}
                </div>

                {/* Discount Badge */}
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </div>

                {/* Quick Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <Heart size={20} />
                  </Button>
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <ShoppingBag size={20} />
                  </Button>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-heading text-lg font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-primary font-bold text-xl">₹{product.price.toLocaleString()}</span>
                  <span className="text-muted-foreground line-through text-sm">₹{product.originalPrice.toLocaleString()}</span>
                </div>
                <p className="text-xs text-muted-foreground">Arrived {product.days} {product.days === 1 ? 'day' : 'days'} ago</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            Load More Arrivals
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewArrivals;
