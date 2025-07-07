import ServiceCard from "@Components/Cards/ServiceCard";
import SectionHeader from "@Components/Typograpghy/SectionHeader";
import SectionWrapper from "@Components/Wrappers/SectionWrapper";
import { hvacImage, homeAppliance } from "@Data/cardsdata";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const OurService = () => {
  const [activeTab, setActiveTab] = useState("ac");
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
        <div className="mx-auto flex justify-center items-center mt-8 border-b border-primary max-w-max">
          <button
            onClick={() => {
              setActiveTab("ac");
            }}
            className={`text-lg poppins-500 px-4 py-1 rounded-t-md transition-all ease-in-out duration-500 ${
              activeTab === "ac"
                ? "bg-primary text-light"
                : "hover:bg-primary/20"
            }`}
          >
            {t("hvac")}
          </button>
          <button
            onClick={() => {
              setActiveTab("ha");
            }}
            className={`text-lg poppins-500 px-4 py-1 rounded-t-md transition-all ease-in-out duration-500 ${
              activeTab === "ha"
                ? "bg-primary text-light"
                : "hover:bg-primary/20"
            }`}
          >
            {t("homeappliances")}
          </button>
        </div>
        {activeTab === "ac" ? (
          <div className="w-full px-10 flex justify-center items-stretch flex-wrap gap-5 mt-10">
            {hvacImage.map((item, index) => {
              return (
                <ServiceCard
                  cardItem={item}
                  key={index}
                  type="ac"
                  itemIndex={index}
                />
              );
            })}
          </div>
        ) : (
          <div className="w-full px-10 flex justify-center items-stretch flex-wrap gap-5 mt-10">
            {homeAppliance.slice(0, 6).map((item, index) => {
              return (
                <ServiceCard
                  cardItem={item}
                  key={index}
                  type="ha"
                  itemIndex={index}
                />
              );
            })}
          </div>
        )}
      </section>
    </SectionWrapper>
  );
};

export default OurService;
