
import { Link } from "react-router-dom";
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-16 pb-12 border-t border-slate-200">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-md bg-gradient-to-br from-primary to-blue-500">
                <div className="absolute inset-0 flex items-center justify-center text-white font-display font-bold text-xl">B</div>
              </div>
              <span className="font-display text-xl font-semibold">Betterzy</span>
            </div>
            <p className="text-sm text-slate-500">
              Empowering businesses to achieve more with innovative solutions designed for growth and efficiency.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">Product</h3>
            <ul className="space-y-3">
              {["Features", "Pricing", "Solutions", "Tutorials", "Status"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-slate-500 hover:text-primary text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">Company</h3>
            <ul className="space-y-3">
              {["About", "Blog", "Careers", "Customers", "Partners"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-slate-500 hover:text-primary text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">Stay Updated</h3>
            <p className="text-sm text-slate-500 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-l-md border border-slate-300 px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-r-md border border-transparent bg-gradient-to-r from-primary to-blue-500 px-3 py-2 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Betterzy, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-xs text-slate-500 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-xs text-slate-500 hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-xs text-slate-500 hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
