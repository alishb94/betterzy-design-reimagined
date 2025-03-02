
import { ArrowRight } from "lucide-react";
import { CustomButton } from "@/components/ui/CustomButton";

export const CTASection = () => {
  return (
    <div className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-br from-primary to-blue-400 p-8 md:p-12 lg:p-16 text-white overflow-hidden relative">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            <div className="absolute -top-8 -right-8 h-64 w-64 rounded-full bg-white/20 blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 h-64 w-64 rounded-full bg-white/20 blur-xl"></div>
          </div>
          
          <div className="relative text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              Ready to transform your design workflow?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Join thousands of designers and developers who are creating exceptional
              user experiences with our innovative design system.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <CustomButton 
                className="bg-white text-primary hover:bg-white/90 border-0 shadow-md"
                size="lg"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </CustomButton>
              <CustomButton 
                variant="outline" 
                className="border-white/30 bg-transparent text-white hover:bg-white/10"
                size="lg"
              >
                Request Demo
              </CustomButton>
            </div>
            
            <p className="mt-6 text-sm text-white/80">
              No credit card required. Free plan includes all core features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
