
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CustomButton } from "@/components/ui/CustomButton";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/#features" },
  { name: "Pricing", path: "/#pricing" },
  { name: "About", path: "/#about" },
  { name: "Contact", path: "/#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-subtle border-b border-slate-200/50 py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-md bg-primary">
              <div className="absolute inset-0 flex items-center justify-center text-white font-display font-bold text-xl">
                B
              </div>
            </div>
            <span className="font-display text-xl font-semibold">Betterzy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary transition-colors rounded-md"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <CustomButton variant="outline" size="sm">
              Sign In
            </CustomButton>
            <CustomButton size="sm">Get Started</CustomButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-700 hover:text-primary focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-[61px] z-50 h-screen bg-white/90 backdrop-blur-md md:hidden transform transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col px-6 py-8 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="px-4 py-3 text-base font-medium text-slate-700 hover:text-primary transition-colors rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-6 flex flex-col space-y-3">
            <CustomButton variant="outline">Sign In</CustomButton>
            <CustomButton>Get Started</CustomButton>
          </div>
        </div>
      </div>
    </header>
  );
};
