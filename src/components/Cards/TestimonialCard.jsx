import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./cards.css";

const TestimonialCard = ({ dataItem }) => {
  return (
    <div className="py-8 px-12 rounded-xl flex justify-start  flex-col items-stretch bg-white gap-2">
      <div className="flex justify-start items-center w-full gap-4">
        <img
          src={dataItem.image}
          className=" w-[50px] h-[50px] rounded-full "
          alt="User Avatar"
        />
        <h1 className="poppins-600 text-[16px] sm:text-[18px]  md:text-[20px] lg:text-[22px]">
          {dataItem.name}
        </h1>
      </div>

      <div className="mt-1">
        <FaQuoteLeft className=" inline mb-5 mr-2 text-xl md:text-2xl text-primary" />
        <p className="text-sm md:text-base xl:text-xl inline architects-daughter-regular">
          {dataItem.comment}
        </p>
        <FaQuoteRight className="inline mb-5 ml-4 text-xl md:text-2xl text-primary" />
      </div>
    </div>
  );
};

export default TestimonialCard;
