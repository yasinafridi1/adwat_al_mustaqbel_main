import React from "react";

const SectionHeader = ({ text }) => {
  return (
    <h1 className="poppins-700 text-2xl sm:text-3xl lg:text-4xl 2xl:text-[46px]">
      {text}
    </h1>
  );
};

export default SectionHeader;
