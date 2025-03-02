
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
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-[120px] pb-24 md:pt-[180px] md:pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-blue-400/10 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-primary/5 blur-[80px]" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10" ref={heroRef}>
        {/* Small badge at the top */}
        <div className="flex justify-center mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm px-4 py-1.5 text-sm shadow-subtle">
            <span className="flex h-2 w-2 rounded-full bg-primary"></span>
            <span className="ml-2 text-slate-700">AI-powered documentation platform</span>
          </div>
        </div>
        
        {/* Main heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl opacity-0 animate-fade-in" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            <span className="block">Create better</span>
            <span className="block mt-2 bg-gradient-to-r from-primary via-blue-500 to-blue-400 bg-clip-text text-transparent">documentation with GPT</span>
          </h1>
          
          <p className="mt-8 text-lg text-slate-600 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
            Betterzy helps you create, customize, and maintain documentation that your users will love, powered by GPT and human input.
          </p>
          
          {/* Call to action buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 opacity-0 animate-fade-in" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
            <CustomButton size="lg" className="group bg-gradient-to-r from-primary to-blue-500 border-0 shadow-md hover:shadow-lg transition-all">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </CustomButton>
            <CustomButton variant="outline" size="lg" className="backdrop-blur-sm bg-white/50">
              Book a Demo
            </CustomButton>
          </div>
        </div>
        
        {/* Dashboard preview */}
        <div className="mt-20 opacity-0 animate-fade-in" style={{ animationDelay: "700ms", animationFillMode: "forwards" }}>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-elevation-2 transition-all hover:shadow-elevation-3 hover:-translate-y-1 duration-300">
            <div className="flex h-6 items-center space-x-2 border-b border-slate-100 bg-slate-50 px-4">
              <div className="h-2 w-2 rounded-full bg-red-400"></div>
              <div className="h-2 w-2 rounded-full bg-amber-400"></div>
              <div className="h-2 w-2 rounded-full bg-green-400"></div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&q=90&w=1200"
              alt="Documentation Platform Preview"
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
            { number: "95%", label: "Time saved on documentation" },
            { number: "24/7", label: "AI assistance" },
            { number: "100+", label: "GPT integrations" },
            { number: "10x", label: "ROI improvement" },
          ].map((stat, index) => (
            <div key={index} className="text-center glass-card px-6 py-8 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <div className="font-display text-3xl font-bold text-slate-900">{stat.number}</div>
              <div className="mt-2 text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
