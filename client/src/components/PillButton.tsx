import type { ButtonHTMLAttributes, ReactNode } from "react";

interface PillButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const PillButton = ({ children, className = "", ...props }: PillButtonProps) => {
  return (
    <button
      className={`cursor-pointer bg-[#7D72FF] hover:bg-[#5A51D4] transition-colors rounded-[27px] font-semibold text-white text-[16px] px-8 py-3.75 whitespace-nowrap ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PillButton;
