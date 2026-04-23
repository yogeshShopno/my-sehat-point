import { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

type Animation = "fade-in" | "fade-in-left" | "fade-in-right" | "scale-in";

interface RevealProps {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  className?: string;
  threshold?: number;
}

const Reveal = ({
  children,
  animation = "fade-in",
  delay = 0,
  className = "",
  threshold = 0.15,
}: RevealProps) => {
  const { ref, visible } = useReveal<HTMLDivElement>(threshold);
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}s` }}
      className={`${visible ? `animate-${animation}` : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
