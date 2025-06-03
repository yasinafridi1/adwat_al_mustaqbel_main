import React from "react";

const WhyUsCard = ({ itemData, aos }) => {
  return (
    <div
      data-aos={aos}
      className="flex-grow p-2 basis-[350px] md:basis-[430px] lg:basis-[500px] rounded-xl bg-white shadow_card flex justify-start items-stretch gap-5"
    >
      <div className="flex justify-start items-center gap-5 px-6 rounded-md bg-primary">
        <itemData.icon className="text-[20px] sm:text-[25px] md:text-[34px] lg:text-[45px] text-light mb-2 " />
      </div>
      <div className="mt-1">
        <h3 className="text-sm sm:text-base md:text-xl 2xl:text-2xl poppins-600">
          {itemData.title}
        </h3>
        <p className="mt-1 text-xs sm:text-sm xl:text-base 2xl:text-lg text-boxdark2">
          {itemData.description}
        </p>
      </div>
    </div>
  );
};

export default WhyUsCard;
