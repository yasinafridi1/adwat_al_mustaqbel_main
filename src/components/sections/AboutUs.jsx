import SectionHeader from "@Components/Typograpghy/SectionHeader";
import React from "react";
import aboutusImage from "@Images/about.jpg";
import SectionWrapper from "@Components/Wrappers/SectionWrapper";

const AboutUs = () => {
  return (
    <SectionWrapper
      classes={
        "w-full mt-8 py-14 bg-primary rounded-[50px] px-6 sm:px-8 md:px-10 lg:px-12 flex justify-center flex-col items-stretch gap-10 lg:flex-row"
      }
    >
      <div
        data-aos="slide-right"
        id="about"
        className="w-full lg:w-[55%] relative"
      >
        <div className="w-full h-[350px] lg:h-full">
          <img
            src={aboutusImage}
            alt="About us image"
            className="w-full h-full rounded-3xl"
          />
        </div>
      </div>
      <div data-aos="slide-left" className="w-full lg:w-[45%] text-light">
        <div>
          <SectionHeader text={"About Adwat"} />
        </div>
        <div className="mt-6">
          <p className="text-xs sm:text-sm md:text-base 2xl:text-xl w-[90%]">
            At Adwat Al-Mustaqbel, we specialize in delivering reliable,
            efficient, and affordable solutions for all your air conditioning
            and home appliance needs. Whether it’s installation, maintenance, or
            repair, our skilled technicians are equipped with the latest tools
            and expertise to get the job done right the first time. We are
            committed to providing top-quality service that ensures comfort,
            safety, and satisfaction in every home we serve. With years of
            hands-on experience and a customer-first approach, we’ve built a
            reputation for excellence across the region. From minor fixes to
            major installations, we handle every task with professionalism and
            care. Trust Adwat Al-Mustaqbel to keep your appliances running
            smoothly and your home comfortable all year round.
          </p>
        </div>
        <div className="w-full mt-5">
          <button className="w-full mt-3 py-3 poppins-600  text-light text-sm md:text-base 2xl:text-xl border border-light bg-primary rounded-xl transition-all ease-in-out duration-500  hover:text-primary hover:border-primary hover:bg-light">
            Know Us Better
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutUs;
