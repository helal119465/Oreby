import React from "react";

const Title = ({ title, className }) => {
  return (
    <div
      className={`text-[#262626] font-dm md:text-[39px] text-3xl font-bold md:mb-12 mb-8 md:mt-32 mt-20 ${className}`}
    >
      {title}
    </div>
  );
};

export default Title;
