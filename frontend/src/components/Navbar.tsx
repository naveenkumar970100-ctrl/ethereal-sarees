import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Search, Heart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/collections" },
    { name: "New Arrivals", path: "/new-arrivals" },
    { name: "Bridal", path: "/bridal" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Determine if we're on the home page
  const isHomePage = location.pathname === "/";

  // Text color logic: white on home page when not scrolled, dark on other pages or when scrolled
  const textColor = isHomePage && !isScrolled ? "text-white" : "text-foreground";
  const iconColor = isHomePage && !isScrolled ? "text-white" : "text-foreground";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg py-2 animate-slideDown"
          : isHomePage
          ? "bg-transparent py-4"
          : "bg-background/95 backdrop-blur-md shadow-lg py-2"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex flex-col items-center">
          <span className="font-heading text-2xl md:text-3xl font-bold tracking-wider text-gold-dark">
            MYSORE
          </span>
          <span className="text-[10px] md:text-xs tracking-[0.4em] text-muted-foreground font-body uppercase">
            Sarees
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-body font-medium tracking-wide transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full hover:scale-105 ${
                location.pathname === link.path
                  ? `${textColor} font-bold animate-fadeIn`
                  : `${textColor} hover:text-primary`
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className={`${iconColor} hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-12`}>
            <Search size={20} />
          </button>
          <button className={`${iconColor} hover:text-primary transition-all duration-300 hover:scale-110 hover:-rotate-12`}>
            <Heart size={20} />
          </button>
          <button className={`${iconColor} hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-12 relative`}>
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center animate-bounce">
              0
            </span>
          </button>
          <button
            className={`lg:hidden ${iconColor} hover:text-primary transition-colors`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg shadow-xl transition-all duration-500 overflow-hidden ${
          isMenuOpen ? "max-h-96 border-b border-gold/20 animate-slideDown" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-body font-medium py-2 border-b border-border/50 transition-colors ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
