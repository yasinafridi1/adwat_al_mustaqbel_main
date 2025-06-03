import ServiceCard from "@Components/Cards/ServiceCard";
import SectionHeader from "@Components/Typograpghy/SectionHeader";
import SectionWrapper from "@Components/Wrappers/SectionWrapper";
import { serviceCardsData } from "@Data/cardsdata";
import React from "react";
import { useTranslation } from "react-i18next";

const OurService = () => {
  const { t } = useTranslation();
  return (
    <SectionWrapper id="services" classes={"pt-14 pb-8"}>
      <section>
        <div className="w-full flex justify-center items-center">
          <SectionHeader itemKey="service_header" />
        </div>
        <div className="w-full flex justify-center items-center mt-2">
          <p className="text-base md:text-lg 2xl:text-xl poppins-500 w-[95%]  sm:w-[75%] md:w-[60%] text-center ">
            {t("service_description")}
          </p>
        </div>

        <div className="w-full px-10 flex justify-center items-stretch flex-wrap gap-5 mt-10">
          {serviceCardsData.map((item, index) => {
            return (
              <ServiceCard cardItem={item} key={index} itemIndex={index} />
            );
          })}
        </div>
      </section>
    </SectionWrapper>
  );
};

export default OurService;
