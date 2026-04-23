import { Phone, Mail, Globe, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Inquiry received! ",
        description: "Our franchise team will reach out within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-secondary/5 blur-3xl rounded-full -z-0" />
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4">
            Limited Slots Available
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-primary leading-tight">
            Become a <span className="text-gradient">My Sehat Point</span>
            <br />
            Franchise Partner.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Let's bring quality healthcare to every corner of India — together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            <ContactCard icon={Phone} label="Call Us" value="+91 77788 77563" href="tel:+917778877563" highlight />
            <ContactCard icon={Mail} label="Email" value="franchise@mysehatpoint.com" href="mailto:franchise@mysehatpoint.com" />
            <ContactCard icon={Globe} label="Website" value="www.mysehatpoint.com" href="https://www.mysehatpoint.com" />
            <ContactCard icon={MapPin} label="Operating Across" value="India · Pan-India Expansion" />
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-card-grad rounded-3xl p-6 md:p-10 shadow-card-brand border border-border"
          >
            <h3 className="font-display font-bold text-xl md:text-2xl text-primary mb-6">
              Get a personalized franchise plan
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <Field label="Full Name" name="name" placeholder="Enter your name" required />
              <Field label="Phone" name="phone" type="tel" placeholder="+91" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
              <Field label="City" name="city" placeholder="Your city / location" required />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Preferred Model
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["Mini", "Standard", "Mega"].map((m) => (
                  <label
                    key={m}
                    className="relative cursor-pointer rounded-xl border-2 border-border p-3 text-center text-sm font-semibold text-foreground hover:border-secondary hover:bg-secondary/5 transition-smooth has-[:checked]:border-secondary has-[:checked]:bg-secondary/10 has-[:checked]:text-secondary"
                  >
                    <input type="radio" name="model" value={m} className="sr-only" defaultChecked={m === "Standard"} />
                    {m}
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Message <span className="text-muted-foreground font-normal">(optional)</span>
              </label>
              <Textarea name="message" rows={3} placeholder="Tell us about your location, investment plan…" className="rounded-xl resize-none" />
            </div>

            <Button type="submit" variant="brand" size="xl" className="w-full" disabled={loading}>
              {loading ? "Sending…" : <>Submit Inquiry <Send className="w-4 h-4" /></>}
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              By submitting, you agree to be contacted by our franchise team.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({
  icon: Icon,
  label,
  value,
  href,
  highlight,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
  highlight?: boolean;
}) => {
  const inner = (
    <div
      className={`group flex items-center gap-4 p-5 rounded-2xl border transition-spring hover:-translate-y-0.5 ${
        highlight
          ? "bg-hero text-primary-foreground border-transparent shadow-card-brand"
          : "bg-card border-border hover:border-secondary/40 hover:shadow-soft"
      }`}
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
          highlight ? "bg-white/10" : "bg-gradient-brand"
        }`}
      >
        <Icon className={`w-6 h-6 ${highlight ? "text-secondary" : "text-white"}`} />
      </div>
      <div className="min-w-0">
        <div className={`text-xs uppercase tracking-wider ${highlight ? "text-white/70" : "text-muted-foreground"}`}>
          {label}
        </div>
        <div className={`font-semibold truncate ${highlight ? "text-white" : "text-primary"}`}>{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
};

const Field = ({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div>
    <label className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
    <Input {...props} className="rounded-xl h-11" />
  </div>
);

export default Contact;
