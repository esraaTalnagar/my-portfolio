import { useState } from "react";
import Logo from "../assets/my-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About Me", href: "#about-me" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
  ];

  return (
    <div className="sticky top-0 z-50 bg-white font-serif shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#cover">
            <img src={Logo} alt="Logo" className="size-12" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden sm:flex sm:items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-800 text-lg font-semibold hover:text-[#9F6A69] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav Links */}
        {isOpen && (
          <div className="sm:hidden bg-white border-t-2 py-2 animate-fade-in-down">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-800 text-lg font-semibold hover:text-[#9F6A69] px-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
