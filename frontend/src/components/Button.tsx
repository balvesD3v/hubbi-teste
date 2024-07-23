import React from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  className = "",
  type = "button",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`w-full text-white p-3 bg-blue-500 font-semibold rounded-lg hover:bg-blue-600 transition-colors ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
