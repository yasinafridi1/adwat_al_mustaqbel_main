import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./cards.css";
import { useTranslation } from "react-i18next";

const TestimonialCard = ({ dataItem, itemIndex }) => {
  const { t, i18n } = useTranslation();

  // Check if current language is RTL (Arabic)
  const isRTL = i18n.dir() === "rtl";
  return (
    <div className="py-8 px-12 rounded-xl flex justify-start  flex-col items-stretch bg-white gap-2">
      <div
        dir={isRTL ? "rtl" : "ltr"}
        className="flex justify-start items-center w-full gap-4 "
      >
        <img
          loading="lazy"
          src={dataItem.image}
          className=" w-[50px] h-[50px] rounded-full "
          alt="User Avatar"
        />
        <h1 className="poppins-600 text-[16px] sm:text-[18px]  md:text-[20px] lg:text-[22px]">
          {t(`testimonials.${itemIndex}.name`)}
        </h1>
      </div>

      <div className="mt-1" dir={isRTL ? "rtl" : "ltr"}>
        {/* Show quote icons swapped for RTL */}
        {isRTL ? (
          <>
            <FaQuoteRight className="inline mb-5 ml-3 text-lg md:text-xl 2xl:text-2xl text-primary" />
            <p className="text-sm md:text-base xl:text-xl inline architects-daughter-regular">
              {t(`testimonials.${itemIndex}.comment`)}
            </p>
            <FaQuoteLeft className="inline mb-5 mr-4 text-lg md:text-xl 2xl:text-2xl text-primary" />
          </>
        ) : (
          <>
            <FaQuoteLeft className="inline mb-5 mr-2 text-xl md:text-2xl text-primary" />
            <p className="text-sm md:text-base 2xl:text-xl inline architects-daughter-regular">
              {t(`testimonials.${itemIndex}.comment`)}
            </p>
            <FaQuoteRight className="inline mb-5 ml-4 text-xl md:text-2xl text-primary" />
          </>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
