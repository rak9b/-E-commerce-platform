import React from "react";
import PropTypes from "prop-types";

const Input = ({ type = "text", placeholder = "", value, onChange, className = "", error }) => {
  const baseStyles = "w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500";
  const errorStyles = error ? "border-red-500 focus:ring-red-500" : "border-gray-300";

  return (
    <div className="flex flex-col">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${baseStyles} ${errorStyles} ${className}`}
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  error: PropTypes.string,
};

export default Input;
