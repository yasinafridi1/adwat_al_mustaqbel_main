import React from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import { sliderData } from "@Data/sliderdata";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import OurService from "@Components/sections/OurService";
import Whyus from "@Components/sections/Whyus";
import AboutUs from "@Components/sections/AboutUs";
import Footer from "@Components/sections/Footer";
import Testimonial from "@Components/sections/Testimonial";
import FAQs from "@Components/sections/FAQs";

const Home = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        speed={2000}
        className="w-screen h-[800px] bg-white"
        effect="fade"
      >
        {sliderData.map((banner, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center text-white text-center px-4"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.7),40%, rgba(255,255,255,0.2)), url(${banner.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            >
              <div className=" p-6 rounded-lg max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-2">
                  {banner.title}
                </h2>
                <p className="text-md md:text-xl">{banner.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <OurService />
      <Whyus />
      <AboutUs />
      <Testimonial />
      <FAQs />
      <Footer />
    </>
  );
};

export default Home;
