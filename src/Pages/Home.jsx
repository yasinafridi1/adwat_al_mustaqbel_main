import React, { lazy, Suspense } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import { sliderData } from "@Data/sliderdata";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import waveTop from "@Images/waveherotop.svg";
import waveBottom from "@Images/waveherobottom.svg";
import FloatingButtons from "@Components/Buttons/FloatingButtons";
import { useTranslation } from "react-i18next";
import SectionLoader from "@Components/Loader/SectionLoader";
const OurService = lazy(() => import("@Components/sections/OurService"));
const Whyus = lazy(() => import("@Components/sections/Whyus"));
const AboutUs = lazy(() => import("@Components/sections/AboutUs"));
const Testimonial = lazy(() => import("@Components/sections/Testimonial"));
const FAQs = lazy(() => import("@Components/sections/FAQs"));
const Footer = lazy(() => import("@Components/sections/Footer"));

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <FloatingButtons />
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        speed={1500}
        className="w-screen min-h-[500px] h-[110vh] bg-white"
        effect="fade"
        id="home"
      >
        {sliderData.map((banner, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-screen h-full  flex items-center text-white text-center px-4"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.7),50%, rgba(255,255,255,0.2)), url(${banner.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            >
              <div className="p-6 rounded-lg max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-2 text-start">
                  {t(`slider.${index}.title`)}
                </h2>
                <p className="text-md md:text-xl text-start">
                  {t(`slider.${index}.subtitle`)}
                </p>
                <img loading="lazy" className="wav wav1" src={waveTop} />
                <img loading="lazy" className="wav wav2" src={waveBottom} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Suspense fallback={<SectionLoader />}>
        <OurService />
        <Whyus />
        <AboutUs />
        <Testimonial />
        <FAQs />
        <Footer />
      </Suspense>
    </>
  );
};

export default Home;
