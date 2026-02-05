import { useState, useCallback, memo } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import ibtLogo from "@/assets/ibt-logo.svg";

interface NavbarProps {
  logoStyle?: React.CSSProperties;
}

const Navbar = memo(({ logoStyle }: NavbarProps = {}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <nav className="bg-white text-gray-900 border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Home Button */}
          <Link to="/">
            <Button
              variant="link"
              className="text-xl font-bold text-primary hover:no-underline p-0 flex items-center gap-3
              focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none"
            >
              <img
                src={ibtLogo}
                alt="IBT Logo"
                className="block h-[72px] w-auto md:h-16 lg:h-20 shrink-0 md:mt-[-2px] lg:mt-[-4px]"
                style={logoStyle}
              />
              <div className="flex flex-col items-center">
                <span>Imagine Beyond</span>
                <span className="text-base md:text-lg font-semibold leading-none">
                  Travel
                </span>
              </div>
            </Button>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ml-auto mr-12">
            <Link to="/about">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                About Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="text-foreground"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-foreground hover:text-primary"
                >
                  About Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

export default Navbar;