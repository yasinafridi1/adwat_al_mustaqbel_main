import ServiceCard from "@Components/Cards/ServiceCard";
import SectionHeader from "@Components/Typograpghy/SectionHeader";
import SectionWrapper from "@Components/Wrappers/SectionWrapper";
import { serviceCardsData } from "@Data/cardsdata";
import React from "react";

const OurService = () => {
  return (
    <SectionWrapper id="services" classes={"pt-14 pb-8"}>
      <section>
        <div className="w-full flex justify-center items-center">
          <SectionHeader text="Our Services" />
        </div>
        <div className="w-full flex justify-center items-center mt-2">
          <p className="text-base md:text-lg 2xl:text-xl poppins-500 w-[95%]  sm:w-[75%] md:w-[60%] text-center ">
            We service, repair and install all brands
          </p>
        </div>

        <div className="w-full px-10 flex justify-center items-center flex-wrap gap-5 mt-10">
          {serviceCardsData.map((item, index) => {
            return <ServiceCard cardItem={item} key={index} />;
          })}
        </div>
      </section>
    </SectionWrapper>
  );
};

export default OurService;
