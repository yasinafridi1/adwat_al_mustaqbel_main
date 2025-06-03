import SectionHeader from "@Components/Typograpghy/SectionHeader";
import React from "react";
import aboutusImage from "@Images/about.jpg";
import SectionWrapper from "@Components/Wrappers/SectionWrapper";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <SectionWrapper
      classes={
        "w-full mt-8 py-14 bg-primary rounded-[50px] px-6 sm:px-8 md:px-10 lg:px-12 flex justify-center flex-col items-stretch gap-10 lg:flex-row"
      }
    >
      <div
        data-aos="slide-right"
        id="about"
        className="w-full lg:w-[55%] relative"
      >
        <div className="w-full h-[350px] lg:h-full">
          <img
            src={aboutusImage}
            alt="About us image"
            className="w-full h-full rounded-3xl"
          />
        </div>
      </div>
      <div data-aos="slide-left" className="w-full lg:w-[45%] text-light">
        <div>
          <SectionHeader itemKey={"about_header"} />
        </div>
        <div className="mt-6">
          <p className="text-xs sm:text-sm md:text-base 2xl:text-xl w-[90%]">
            {t("about_description")}
          </p>
        </div>
        <div className="w-full mt-5">
          <button className="w-full mt-3 py-3 poppins-600  text-light text-sm md:text-base 2xl:text-xl border border-light bg-primary rounded-xl transition-all ease-in-out duration-500  hover:text-primary hover:border-primary hover:bg-light">
            Know Us Better
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutUs;
