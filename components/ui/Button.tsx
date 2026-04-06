import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({ variant = "primary", size = "md", className, children, ...props }: ButtonProps) {
  const baseClass = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-[#ea580c] text-white hover:bg-[#c2410c]",
    secondary: "bg-[#0f766e] text-white hover:bg-[#115e59]",
    outline: "border border-slate-300 bg-transparent hover:bg-slate-100 text-slate-800",
    ghost: "bg-transparent hover:bg-slate-100 text-slate-800"
  };

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 py-2 px-4",
    lg: "h-11 px-8 text-lg"
  };

  return (
    <button 
      className={`${baseClass} ${variants[variant]} ${sizes[size]} ${className || ''}`} 
      {...props}
    >
      {children}
    </button>
  );
}
