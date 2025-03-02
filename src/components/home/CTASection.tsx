
import { ArrowRight } from "lucide-react";
import { CustomButton } from "@/components/ui/CustomButton";

export const CTASection = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-slate-50 to-white" id="contact">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-br from-primary to-blue-500 p-8 md:p-12 lg:p-16 text-white overflow-hidden relative shadow-elevation-3">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            <div className="absolute -top-8 -right-8 h-64 w-64 rounded-full bg-white/20 blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 h-64 w-64 rounded-full bg-white/20 blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-white/10 blur-md"></div>
          </div>
          
          <div className="relative text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              Join Our Dentist Network!
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Are you a dentist looking to expand your practice and connect with more patients?
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <CustomButton 
                className="bg-white text-primary hover:bg-white/90 border-0 shadow-md hover:shadow-lg transition-all"
                size="lg"
              >
                Get more patients
                <ArrowRight className="ml-2 h-4 w-4" />
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
