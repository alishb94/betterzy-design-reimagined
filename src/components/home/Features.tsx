
import { useRef, useEffect } from "react";
import { Sparkles, BookOpen, Calendar, Shield, Clock, Headset } from "lucide-react";

const features = [
  {
    title: "Find the Right Dentist for You",
    description: "Browse a network of trusted dentists with detailed profiles, specialties, and patient reviews.",
    icon: Sparkles,
  },
  {
    title: "Book Instantly, No Waiting",
    description: "Skip long searches—schedule your dental visit at your preferred time in just a few clicks.",
    icon: Calendar,
  },
  {
    title: "Compare & Choose",
    description: "Receive appointment offers from multiple clinics and pick the one that suits you best—completely free!",
    icon: BookOpen,
  },
  {
    title: "All-in-One Convenience",
    description: "No need to visit multiple websites. Everything you need—dentist info, booking, and confirmations—is in one place.",
    icon: Shield,
  },
  {
    title: "For Dentists: Gain More Patients",
    description: "Get appointment requests, fill your schedule, and boost revenue—effortlessly and for free!",
    icon: Clock,
  },
  {
    title: "24/7 Support",
    description: "Book an appointment anytime, anywhere, and get assistance whenever you need it.",
    icon: Headset,
  },
];

export const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const featureElements = document.querySelectorAll(".feature-card");
    featureElements.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      featureElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div id="features" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6 lg:px-8" ref={featuresRef}>
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            Features
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Why Choose Our Online Dental Appointment Platform?
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Book a Dentist in Minutes – Simple & Hassle-Free!
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card opacity-0 flex flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-subtle transition-all hover:shadow-elevation-2 hover:-translate-y-1 duration-300"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-blue-400/20">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
