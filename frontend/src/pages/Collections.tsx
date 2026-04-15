import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoppingBag, Heart, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import sareeMaroon from "@/assets/saree-maroon.jpg";
import sareeBlue from "@/assets/saree-blue.jpg";
import sareeGreen from "@/assets/saree-green.jpg";
import sareePink from "@/assets/saree-pink.jpg";
import sareePurple from "@/assets/saree-purple.jpg";
import sareeOrange from "@/assets/saree-orange.jpg";
import sareeYellow from "@/assets/saree-yellow.jpg";

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const categories = [
    { id: "all", name: "All Collections" },
    { id: "silk", name: "Silk Sarees" },
    { id: "cotton", name: "Cotton Sarees" },
    { id: "designer", name: "Designer Wear" },
    { id: "traditional", name: "Traditional" },
    { id: "party", name: "Party Wear" },
  ];

  const products = [
    { id: 1, name: "Royal Banarasi Silk", category: "silk", price: 12999, image: sareeMaroon, badge: "Bestseller" },
    { id: 2, name: "Kanjivaram Gold", category: "silk", price: 15999, image: sareeBlue, badge: "Premium" },
    { id: 3, name: "Cotton Elegance", category: "cotton", price: 3999, image: sareeGreen, badge: "New" },
    { id: 4, name: "Designer Embroidered", category: "designer", price: 8999, image: sareePink, badge: "" },
    { id: 5, name: "Traditional Patola", category: "traditional", price: 11999, image: sareePurple, badge: "Limited" },
    { id: 6, name: "Party Glamour", category: "party", price: 7999, image: sareeOrange, badge: "" },
    { id: 7, name: "Silk Heritage", category: "silk", price: 13999, image: sareeYellow, badge: "Classic" },
    { id: 8, name: "Cotton Comfort", category: "cotton", price: 2999, image: sareeBlue, badge: "" },
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-gradient-to-r from-primary/10 to-gold/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Collections
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our exquisite range of handcrafted sarees, each telling a unique story of tradition and elegance
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <Filter size={20} className="text-primary" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold rounded-full">
                    {product.badge}
                  </span>
                )}
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
                <p className="text-primary font-bold text-xl">₹{product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Collections;
