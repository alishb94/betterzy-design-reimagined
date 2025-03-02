
import { useRef, useEffect } from "react";
import { BookOpen, Sparkles, Boxes, Users, Repeat, Gauge } from "lucide-react";

const features = [
  {
    title: "AI-Powered Documentation",
    description: "Create comprehensive documentation in seconds with our advanced GPT integration, saving hours of manual work.",
    icon: Sparkles,
  },
  {
    title: "Custom Knowledge Base",
    description: "Build a searchable knowledge base tailored to your product, ensuring users find exactly what they need.",
    icon: BookOpen,
  },
  {
    title: "Interactive Tutorials",
    description: "Create step-by-step tutorials with interactive elements that guide users through complex processes.",
    icon: Boxes,
  },
  {
    title: "Collaborative Workflows",
    description: "Work together with your team to create, review, and publish documentation with real-time collaboration.",
    icon: Users,
  },
  {
    title: "Version Control",
    description: "Track changes and maintain different versions of your documentation as your product evolves.",
    icon: Repeat,
  },
  {
    title: "Performance Analytics",
    description: "Gain insights into how users interact with your documentation to continuously improve the experience.",
    icon: Gauge,
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
            Documentation that works for you
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Our AI-powered platform combines the best of GPT technology with human expertise to create
            documentation that saves time, reduces support tickets, and delights your users.
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
