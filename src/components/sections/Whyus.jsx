import WhyUsCard from "@Components/Cards/WhyUsCard";
import SectionHeader from "@Components/Typograpghy/SectionHeader";
import SectionWrapper from "@Components/Wrappers/SectionWrapper";
import { whyUsData } from "@Data/cardsdata";
import aboutusImage from "@Images/about.jpg";
import React from "react";
import { useTranslation } from "react-i18next";

const Whyus = () => {
  const { t } = useTranslation();
  return (
    <SectionWrapper
      classes={"bg-white rounded-[50px] px-6 sm:px-8 md:px-10 lg:px-12"}
    >
      <div className="py-10  w-full  flex justify-center items-stretch flex-col lg:flex-row gap-8">
        <div data-aos="fade-right" className="w-full lg:w-[45%] text-boxdark2">
          <div>
            <SectionHeader itemKey={"whyus_header"} text={"Why Adwat ? "} />
          </div>
          <div className="mt-6">
            <p className="text-xs sm:text-sm md:text-base 2xl:text-xl w-[90%]">
              {t("whyus_description")}
            </p>
          </div>
          <div className="w-full mt-5">
            <button className="w-full mt-3 py-3  poppins-600  text-light text-sm md:text-base 2xl:text-xl border border-light bg-primary rounded-xl transition-all ease-in-out duration-500  hover:text-primary hover:border-primary hover:bg-white">
              Know Us Better
            </button>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="w-full md:w-[55%] relative hidden lg:block"
        >
          <div className="w-full h-full">
            <img
              src={aboutusImage}
              alt="About us image"
              className="w-full h-full rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div className="w-full pt-4 pb-18 flex justify-center items-stretch gap-8  flex-wrap ">
        {whyUsData.map((item, index) => {
          return (
            <WhyUsCard
              aos={index % 2 == 0 ? "fade-right" : "fade-left"}
              key={index}
              itemData={item}
              itemIndex={index}
            />
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Whyus;
