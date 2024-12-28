import React from "react";
import PropTypes from "prop-types";

const Button = ({ type = "button", onClick, children, variant = "primary", disabled = false, className = "" }) => {
  const baseStyles =
    "px-4 py-2 rounded font-medium focus:outline-none transition duration-300 ease-in-out";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
    success: "bg-green-500 text-white hover:bg-green-600",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "danger", "success", "outline"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
