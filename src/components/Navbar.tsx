import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#models", label: "Models" },
  { href: "#roi", label: "ROI" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl shadow-soft border-b border-border/60"
          : "bg-background/70 backdrop-blur-md border-b border-border/30"
      }`}
    >
      <nav className="container flex items-center justify-between py-3 md:py-4">
        <a href="#home" aria-label="My Sehat Point home">
          <Logo className="h-10 md:h-11" />
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent transition-smooth"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button asChild variant="brand" size="sm" className="hidden sm:inline-flex">
            <a href="#contact">
              <Phone className="w-4 h-4" />
              Get Franchise
            </a>
          </Button>
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-accent transition-smooth"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium hover:bg-accent transition-smooth"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="brand" className="mt-2 sm:hidden">
              <a href="#contact" onClick={() => setOpen(false)}>
                <Phone className="w-4 h-4" />
                Get Franchise
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
