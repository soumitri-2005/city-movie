"use client";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function NavbarDemo() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Gallery", link: "/gallery" },
    { name: "Albums", link: "/albums" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // track scroll
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 scroll handler for contact
  const handleScrollToContact = () => {
    if (location.pathname !== "/") {
      // if not on home, first navigate to home
      navigate("/");
      // wait until navigation, then scroll
      setTimeout(() => {
        const section = document.getElementById("contact");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      const section = document.getElementById("contact");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative w-full top-1 mt-1">
      <Navbar className="transition duration-300 bg-transparent">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <div className="flex gap-6">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                className={`px-3 py-2 font-[600] border-2 border-[var(--maroon-color)] rounded-3xl transition duration-200 text-[13px] text-shadow-sm ${
                  visible
                    ? "text-[var(--maroon-color)]"
                    : "text-[var(--maroon-color)]"
                } hover:bg-[var(--gold-color)] hover:text-[var(--maroon-color)]`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleScrollToContact}
              className={`px-4 py-2 rounded-2xl text-sm font-[550] shadow-md hover:shadow-lg transition cursor-pointer ${
                visible
                  ? "bg-[var(--maroon-color)] text-[var(--gold-color)]"
                  : "bg-[var(--maroon-color)] text-[var(--gold-color)]"
              }`}
            >
              Contact
            </button>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                to={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 font-[500] rounded-3xl transition duration-200 ${
                  visible
                    ? "text-[var(--maroon-color)]"
                    : "text-[var(--maroon-color)]"
                } hover:bg-[var(--maroon-color)] hover:text-[var(--gold-color)]`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4">
              <button
                onClick={() => {
                  handleScrollToContact();
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full px-4 py-2 rounded-2xl text-sm font-[550] shadow-md hover:shadow-lg transition cursor-pointer ${
                  visible
                    ? "bg-[var(--maroon-color)] text-[var(--gold-color)]"
                    : "bg-[var(--maroon-color)] text-[var(--gold-color)]"
                }`}
              >
                Contact
              </button>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
