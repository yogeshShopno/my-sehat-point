import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 grid-bg" />
      <div className="container relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="bg-white/95 backdrop-blur rounded-2xl p-3 inline-block mb-4">
              <Logo />
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              India's most trusted one-stop healthcare brand. Reshaping pharmacy, diagnostics & wellness for every community.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-smooth"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Explore"
            links={[
              { label: "About Us", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Franchise Models", href: "#models" },
              { label: "ROI & Earnings", href: "#roi" },
              { label: "Why Us", href: "#why" },
            ]}
          />
          <FooterCol
            title="Franchise"
            links={[
              { label: "Mini Model", href: "#models" },
              { label: "Standard Model", href: "#models" },
              { label: "Mega Model", href: "#models" },
              { label: "Eligibility", href: "#contact" },
              { label: "Apply Now", href: "#contact" },
            ]}
          />

          <div>
            <h4 className="font-display font-bold text-base mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                <a href="tel:+917778877563" className="hover:text-white transition-smooth">
                  +91 77788 77563
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                <a href="mailto:franchise@mysehatpoint.com" className="hover:text-white transition-smooth break-all">
                  franchise@mysehatpoint.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                <span>Pan-India Operations</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} My Sehat Point. All rights reserved.</div>
          <div className="font-medium tracking-wide">
            Aapki Sehat, <span className="text-secondary">Hamari Zimmedari.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterCol = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => (
  <div>
    <h4 className="font-display font-bold text-base mb-4">{title}</h4>
    <ul className="space-y-2.5 text-sm">
      {links.map((l, i) => (
        <li key={i}>
          <a href={l.href} className="text-white/70 hover:text-secondary transition-smooth">
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
