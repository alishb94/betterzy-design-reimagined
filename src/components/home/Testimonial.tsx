
import { useRef, useEffect } from "react";
import { Star } from "lucide-react";

export const Testimonial = () => {
  const testimonialRef = useRef<HTMLDivElement>(null);
  
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
    
    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }
    
    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, []);

  return (
    <div className="py-24 bg-white">
      <div 
        className="container mx-auto px-6 lg:px-8 opacity-0" 
        ref={testimonialRef} 
        style={{ animationFillMode: "forwards" }}
      >
        <div className="max-w-6xl mx-auto relative">
          {/* Background element */}
          <div className="absolute top-1/3 left-0 transform -translate-x-1/2 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-0 transform translate-x-1/2 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"></div>
          
          <div className="relative glass-card rounded-2xl p-8 md:p-12 lg:p-16 overflow-hidden backdrop-blur-sm border border-white/20 shadow-elevation-2">
            {/* Quote marks */}
            <div className="absolute top-6 left-6 text-primary/10 text-8xl font-serif">"</div>
            <div className="absolute bottom-6 right-6 text-primary/10 text-8xl font-serif">"</div>
            
            <div className="text-center">
              <div className="flex justify-center space-x-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-slate-800 max-w-4xl mx-auto">
                Betterzy has reduced our documentation time by 80% and our support tickets by 60%. Our users consistently
                rate our help center as exceptional since we made the switch.
              </blockquote>
              
              <div className="mt-10 flex flex-col items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&auto=format&fit=crop&q=80"
                  alt="David Chen"
                  className="h-16 w-16 rounded-full object-cover border-2 border-white shadow-md" 
                />
                <div className="mt-4">
                  <p className="font-medium text-slate-900">David Chen</p>
                  <p className="text-sm text-slate-600">Head of Customer Success, TechFlow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
