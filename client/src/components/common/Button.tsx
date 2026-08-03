import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "link";
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  to,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-display font-extrabold uppercase tracking-widest text-xs md:text-sm rounded-xl transition-smooth transition-all";
  
  const variants = {
    primary: "px-8 py-4 bg-brand hover:bg-brand-dark text-black shadow-lg shadow-brand/10 hover:shadow-brand/20 hover:scale-102 disabled:bg-white/5 disabled:text-white/20 disabled:shadow-none disabled:scale-100",
    secondary: "px-8 py-4 bg-transparent border border-white/20 hover:border-brand text-white hover:text-brand hover:scale-102 disabled:border-white/5 disabled:text-white/20 disabled:scale-100",
    link: "bg-transparent text-white hover:text-brand p-0 rounded-none tracking-wider font-semibold",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
    >
      {children}
    </button>
  );
}
