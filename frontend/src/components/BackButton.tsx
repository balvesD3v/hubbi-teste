import React from "react";

interface BackButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({
  onClick,
  className,
  label = "Back",
}) => {
  return (
    <button
      onClick={onClick || (() => window.history.back())}
      className={`mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors ${className}`}
    >
      {label}
    </button>
  );
};
