
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { CustomButton } from "@/components/ui/CustomButton";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-scale-in");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-white pt-[120px] pb-24 md:pt-[180px] md:pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-primary blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-primary blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10" ref={heroRef}>
        {/* Small badge at the top */}
        <div className="flex justify-center mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm shadow-subtle">
            <span className="flex h-2 w-2 rounded-full bg-primary"></span>
            <span className="ml-2 text-slate-700">Reimagining digital experiences</span>
          </div>
        </div>
        
        {/* Main heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl opacity-0 animate-fade-in" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            <span className="block">Design reimagined for</span>
            <span className="block mt-2 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">modern experiences</span>
          </h1>
          
          <p className="mt-8 text-lg text-slate-600 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
            Craft beautiful, intuitive interfaces with our innovative design system. Streamline your workflow and create exceptional user experiences with unparalleled precision.
          </p>
          
          {/* Call to action buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 opacity-0 animate-fade-in" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
            <CustomButton size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </CustomButton>
            <CustomButton variant="outline" size="lg">
              Live Demo
            </CustomButton>
          </div>
        </div>
        
        {/* Dashboard preview */}
        <div className="mt-20 opacity-0 animate-fade-in" style={{ animationDelay: "700ms", animationFillMode: "forwards" }}>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-elevation-2 transition-all hover:shadow-elevation-3">
            <div className="flex h-6 items-center space-x-2 border-b border-slate-100 bg-slate-50 px-4">
              <div className="h-2 w-2 rounded-full bg-red-400"></div>
              <div className="h-2 w-2 rounded-full bg-amber-400"></div>
              <div className="h-2 w-2 rounded-full bg-green-400"></div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&q=80&w=1200"
              alt="Dashboard Preview"
              className="w-full"
              loading="lazy"
              style={{ 
                clipPath: "inset(0% 0% 0% 0%)",
                animation: "blur-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards" 
              }}
            />
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 opacity-0 animate-fade-in" style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
          {[
            { number: "10M+", label: "Active users" },
            { number: "99.9%", label: "Uptime guarantee" },
            { number: "24/7", label: "Expert support" },
            { number: "100+", label: "Integrations" },
          ].map((stat, index) => (
            <div key={index} className="text-center glass-card px-6 py-8 rounded-xl">
              <div className="font-display text-3xl font-bold text-slate-900">{stat.number}</div>
              <div className="mt-2 text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
