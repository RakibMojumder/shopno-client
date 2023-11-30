"use client";

import { twMerge } from "tailwind-merge";

const Button = ({
  size,
  variant,
  disabled,
  className,
  children,
  handleClick,
  type,
}) => {
  const variants = {
    filled: "bg-primary text-white",
    outlined: "bg-transparent text-primary",
  };

  const sizes = {
    small: "px-6 py-1",
    medium: "px-20 py-1.5",
    large: "w-full py-1.5",
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={twMerge(
        "border border-primary rounded font-medium uppercase",
        sizes[size],
        variants[variant],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
