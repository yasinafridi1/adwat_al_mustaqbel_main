import React from "react";
import { useTranslation } from "react-i18next";

const ServiceCard = ({ cardItem, itemIndex }) => {
  const { t } = useTranslation();
  return (
    <div
      data-aos="fade-up"
      className="group flex-grow basis-[350px] max-w-[550px] py-4 pt-6 cursor-pointer rounded-3xl px-5 bg-white hover:bg-primary transition-all ease-in-out duration-500 text-boxdark2 hover:text-light shadow_card"
    >
      <h5 className="poppins-600 text-lg sm:text-xl lg:text-[22px] 2xl:text-[24px]">
        {t(`services_cards.${itemIndex}.title`)}
      </h5>
      <p className="line-clamp-3 text-[13px] sm:text-[14px] md:text-[16px] xl:text-[17px] 2xl:text-[18px] mt-2">
        {t(`services_cards.${itemIndex}.description`)}
      </p>
      <div className="w-full h-[300px] mt-3">
        <img
          src={cardItem.img}
          alt={t(`services_cards.${itemIndex}.title`)}
          className="w-full h-full rounded-2xl"
        />
      </div>

      <button className="transition-all ease-in-out duration-500 w-full mt-3 py-3 poppins-500  text-primary text-sm md:text-base border border-primary rounded-xl  group-hover:bg-gray-100 group-hover:text-primary hover:text-light hover:border-light hover:bg-primary">
        Request Service
      </button>
    </div>
  );
};

export default ServiceCard;
