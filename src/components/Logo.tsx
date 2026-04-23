import logo from "@/assets/logo1.png";

const Logo = ({ className = "h-10" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <img src={logo} alt="My Sehat Point" className="h-full w-auto" width={64} height={64} />
    <div className="flex flex-col leading-none">
      <span className="font-display font-extrabold text-lg md:text-xl text-primary tracking-tight">
        Sehat <span className="text-secondary">Point</span>
      </span>
      <span className="text-[10px] md:text-[11px] text-muted-foreground font-medium tracking-wide">
        Aapki Sehat, Hamari Zimmedari
      </span>
    </div>
  </div>
);

export default Logo;
