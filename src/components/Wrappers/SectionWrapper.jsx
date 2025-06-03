import React from "react";

const SectionWrapper = ({ id, classes, children }) => {
  return (
    <section id={id} className={`${classes} max-w-[2000px] mx-auto `}>
      {children}
    </section>
  );
};

export default SectionWrapper;
