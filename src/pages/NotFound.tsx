
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { CustomButton } from "@/components/ui/CustomButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
          <span className="text-red-600 text-2xl font-bold">404</span>
        </div>
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-4">Page Not Found</h1>
        <p className="text-slate-600 mb-8">
          We couldn't find the page you're looking for. The page might have been moved or doesn't exist.
        </p>
        <Link to="/">
          <CustomButton className="inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Home
          </CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
