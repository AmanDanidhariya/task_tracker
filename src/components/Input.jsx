import React from "react";

const Input = ({ label, className, onChange, type, placeholder }) => {
  return (
    <>
      {label && <label>{label}</label>}
      <input
        type={type}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
