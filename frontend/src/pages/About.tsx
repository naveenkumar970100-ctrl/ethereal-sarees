import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Award, Users, MapPin, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const stats = [
    { icon: Calendar, value: "25+", label: "Years of Excellence" },
    { icon: Users, value: "50,000+", label: "Happy Customers" },
    { icon: Award, value: "1000+", label: "Unique Designs" },
    { icon: MapPin, value: "15+", label: "Stores Across India" },
  ];

  const values = [
    { 
      title: "Heritage & Tradition", 
      description: "We preserve ancient weaving techniques passed down through generations, ensuring each saree tells a story of cultural richness.",
      icon: Sparkles
    },
    { 
      title: "Quality Craftsmanship", 
      description: "Every saree undergoes rigorous quality checks. We use only the finest silk, cotton, and zari threads sourced from trusted artisans.",
      icon: Award
    },
    { 
      title: "Customer First", 
      description: "Your satisfaction is our priority. From selection to delivery, we ensure a seamless and delightful shopping experience.",
      icon: Heart
    },
  ];

  const team = [
    { name: "Rajesh Mysore", role: "Founder & Master Weaver", image: "👨‍🎨" },
    { name: "Priya Mysore", role: "Creative Director", image: "👩‍🎨" },
    { name: "Amit Mysore", role: "Head of Operations", image: "👨‍💼" },
    { name: "Sneha Mysore", role: "Design Lead", image: "👩‍💼" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-gradient-to-r from-primary/10 via-gold/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Story
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A legacy of weaving dreams into reality since 1999
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-md text-center border border-gold/20">
              <stat.icon className="mx-auto mb-3 text-primary" size={32} />
              <h3 className="font-heading text-3xl font-bold text-primary mb-1">{stat.value}</h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Our Journey */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-heading text-3xl font-bold mb-6 text-primary">
              The MysoreSarees Legacy
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 1999, MysoreSarees began as a small weaving unit in the heart of India's textile country. 
                Our founder, Rajesh Mysore, inherited the art of weaving from his father and transformed it into a 
                celebrated brand known for quality and craftsmanship.
              </p>
              <p>
                Today, we work with over 500 artisan families across India, preserving traditional weaving techniques 
                while embracing modern designs. Each saree that leaves our workshop carries forward a legacy of 
                excellence that spans generations.
              </p>
              <p>
                Our commitment to authenticity, quality, and customer satisfaction has made us one of the most 
                trusted names in ethnic wear, with over 50,000 happy customers and 15+ stores across India.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/20 to-gold/20 rounded-xl p-8 flex items-center justify-center">
            <div className="text-center">
              <Sparkles className="mx-auto mb-4 text-primary" size={64} />
              <p className="font-heading text-2xl font-bold text-primary mb-2">Crafting Dreams</p>
              <p className="text-muted-foreground">Since 1999</p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl font-bold text-center mb-12 text-primary">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card p-8 rounded-lg shadow-md border border-gold/20 hover:shadow-xl transition-all">
                <value.icon className="mb-4 text-primary" size={40} />
                <h3 className="font-heading text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl font-bold text-center mb-12 text-primary">
            Meet the Family
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-md text-center border border-gold/20">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="font-heading text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-gold rounded-xl p-8 md:p-12 text-white text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Experience the MysoreSarees Difference
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Visit our store or browse our collection online. Every saree comes with a certificate of authenticity and lifetime care support.
          </p>
          <Button size="lg" variant="secondary" className="px-8">
            Explore Collection
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
