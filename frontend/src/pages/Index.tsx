import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import FeaturedCategories from "@/components/FeaturedCategories";
import ProductGrid from "@/components/ProductGrid";
import SpecialBanner from "@/components/SpecialBanner";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroCarousel />
    <Features />
    <FeaturedCategories />
    <ProductGrid />
    <SpecialBanner />
    <Testimonials />
    <Footer />
  </div>
);

export default Index;
