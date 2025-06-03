import SectionHeader from "@Components/Typograpghy/SectionHeader";
import SectionWrapper from "@Components/Wrappers/SectionWrapper";
import { faQuestions } from "@Data/otherData";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { GrSubtractCircle } from "react-icons/gr";
import { IoMdAddCircle } from "react-icons/io";

const FAQs = () => {
  const [showIndex, setShowIndex] = useState(false);
  const { t } = useTranslation();

  return (
    <SectionWrapper
      id={"faqs"}
      classes={"pt-5 pb-14 px-6 sm:px-8 md:px-10 lg:px-12"}
    >
      <SectionHeader itemKey={"faq_header"} />
      {faQuestions.slice(0, 4).map((_, index) => {
        return (
          <div
            key={index}
            data-aos="fade-up"
            className={`${index > 0 ? "border-t border-gray-300 " : " mt-8"} `}
          >
            <div className="flex justify-between items-center gap-6 w-full py-8 px-2">
              <h4 className="poppins-500 text-[15px] sm:text-[17px] md:text-[19px] xl:text-[21px] 2xl:text-[23px]">
                {t(`faqs.${index}.text`)}
              </h4>
              <div>
                {showIndex === index ? (
                  <GrSubtractCircle
                    onClick={() => {
                      setShowIndex(null);
                    }}
                    className=" cursor-pointer text-xl sm:text-2xl text-red-500"
                  />
                ) : (
                  <IoMdAddCircle
                    onClick={() => {
                      setShowIndex(index);
                    }}
                    className="cursor-pointer text-xl sm:text-2xl text-[--blue-light]"
                  />
                )}
              </div>
            </div>
            {showIndex === index ? (
              <div className="w-full px-2 pb-4">
                <p className="text-[12px] sm:text-[14px] md:text-[18px] 2xl:text-xl">
                  {t(`faqs.${index}.description`)}
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </SectionWrapper>
  );
};

export default FAQs;
