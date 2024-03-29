import React from "react";

const Input = ({
  label,
  className,
  onChange,
  type,
  placeholder,
  labelClassName,
}) => {
  return (
    <>
      <div>{label && <label className={labelClassName}>{label}:-</label>}</div>
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
