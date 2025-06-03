import SectionHeader from "@Components/Typograpghy/SectionHeader";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { testimonialsData } from "@Data/cardsdata";
import TestimonialCard from "@Components/Cards/TestimonialCard";
import SectionWrapper from "@Components/Wrappers/SectionWrapper";

const Testimonial = () => {
  return (
    <SectionWrapper classes={"pt-16 pb-8 px-6 sm:px-8 md:px-10 lg:px-12"}>
      {/* Header + Arrows */}
      <div className="w-full flex justify-between items-center flex-col lg:flex-row gap-4 ">
        <SectionHeader text="What People say about us ?" />
        <div className="flex justify-end items-center  gap-4">
          <div className="custom-prev cursor-pointer p-3 rounded-full flex justify-center items-center border border-primary bg-primary text-light transition-all duration-500 hover:bg-white hover:text-primary">
            <FaArrowLeft className="text-2xl" />
          </div>
          <div className="custom-next cursor-pointer p-3 rounded-full flex justify-center items-center border border-primary bg-primary text-light transition-all duration-500 hover:bg-white hover:text-primary">
            <FaArrowRight className="text-2xl" />
          </div>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        loop={true}
        speed={800}
        spaceBetween={30}
        slidesPerView={2}
        autoplay={{
          delay: 6000, // 3 seconds
          disableOnInteraction: false, // keeps autoplay after user interaction
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1000: {
            slidesPerView: 2,
          },
          2000: {
            slidesPerView: 3,
          },
        }}
        className="mt-8 w-full flex"
      >
        {testimonialsData.map((item, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard dataItem={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionWrapper>
  );
};

export default Testimonial;
