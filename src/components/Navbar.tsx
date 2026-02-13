import { useState } from "react";

import { Menu, X } from "lucide-react";
import LogoIcon from "../assets/logo.svg";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "home",
    label: "Home",
  },
  {
    href: "services",
    label: "Services",
  },
  {
    href: "contact",
    label: "Contact",
  },
];

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const Navbar = ({ onNavigate, currentPage }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (page: string, sectionId?: string) => {
    if (page === "home" && sectionId) {
      onNavigate("home");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      onNavigate(page);
    }
    setIsMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    if (currentPage !== "home") {
      handleNavigation("home", id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("home")}
              className="text-2xl font-bold text-gray-900 cursor-pointer"
            >
              <img className="w-[50%]" src={LogoIcon} alt="logo" />
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {routeList.map((route) => (
              <button
                key={route.href}
                onClick={() => scrollToSection(route.href)}
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium cursor-pointer"
              >
                {route.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {routeList.map((route) => (
              <button
                key={route.href}
                onClick={() => scrollToSection(route.href)}
                className="block w-full text-left text-gray-700 hover:text-gray-900 transition-colors py-2 font-medium cursor-pointer"
              >
                {route.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};
