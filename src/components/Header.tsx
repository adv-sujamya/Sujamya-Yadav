import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Practice Areas", href: "#practice" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => handleClick("#home")} className="text-left">
          <span
            className={`font-heading text-lg font-semibold tracking-wide transition-colors duration-300 ${
              scrolled ? "text-navy" : "text-gold"
            }`}
          >
            SUJAMYA YADAV
          </span>
          <span
            className={`block text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
              scrolled ? "text-muted-foreground" : "text-gold-light"
            }`}
          >
            Advocate
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-gold ${
                scrolled ? "text-foreground" : "text-cream"
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={scrolled ? "text-foreground" : "text-cream"} />
          ) : (
            <Menu className={scrolled ? "text-foreground" : "text-cream"} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card/95 backdrop-blur-md border-t border-border"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleClick(l.href)}
                  className="text-sm font-medium text-foreground hover:text-gold transition-colors text-left"
                >
                  {l.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
