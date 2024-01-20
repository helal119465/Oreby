import React from "react";

const Input = ({
  className,
  label,
  type,
  placeholder,
  value,
  onChange,
  name,
}) => {
  return (
    <div className={`font-dm mt-6 ml-2 ${className}`}>
      <label htmlFor="" className="text-base font-bold">
        {label}
      </label>
      <input
        type={type}
        className=" w-full block text-sm pt-2 pb-3 border-b-2 border-[#F0F0F0] outline-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default Input;
