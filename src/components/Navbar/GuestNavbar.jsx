import React, { useEffect, useState } from "react";
import {
  FaFacebookSquare,
  FaWhatsappSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { navbar } from "@Data/menu";
import "./navbar.css";
import { useTranslation } from "react-i18next";

const iconClasses = "text-sm md:text-base xl:text-lg 2xl:text-xl text-gray-600";
import primaryWhite from "@Images/primary_white.png";
import secondaryWhite from "@Images/secondary_white.png";

const GuestNavbar = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "en");
  const [logo, setLogo] = useState(primaryWhite);

  function handleLanguageChange(e) {
    const { value } = e.target;
    setLanguage(value);
    i18n.changeLanguage(value);
    document.documentElement.setAttribute(
      "dir",
      value === "ar" ? "rtl" : "ltr"
    );
  }

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      if (!navbar) return;

      if (window.scrollY > 100) {
        navbar.classList.remove("initial_nav");
        navbar.classList.add("fixed_nav", "animateMenu");
        setLogo(secondaryWhite);
      } else {
        navbar.classList.add("initial_nav");
        navbar.classList.remove("fixed_nav", "animateMenu");
        setLogo(primaryWhite);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header>
      <div className="flex justify-between items-center px-5 sm:px-9 md:px-12 py-2 bg-white relative">
        <div className="flex justify-start items-center gap-3">
          <div className="hidden md:flex ltr:border-r-2 rtl:border-l-2 border-gray-400 pr-3 rtl:pl-3">
            <p className="text-xs sm:text-sm 2xl:text-base poppins-500 text-gray-500">
              {t("connect")}
            </p>
          </div>
          <div className="flex justify-start items-center gap-3 ltr:border-r-2 rtl:border-l-2 border-gray-400 ltr:pr-3 rtl:pl-3">
            <FaFacebookSquare className={iconClasses} />
            <FaInstagramSquare className={iconClasses} />
            <FaWhatsappSquare className={iconClasses} />
          </div>
          <div className="flex justify-start items-center gap-3 ">
            <p
              dir="ltr"
              className="text-xs sm:text-sm 2xl:text-base poppins-500"
            >
              +966545573208
            </p>
          </div>
        </div>
        <select
          value={language}
          onChange={handleLanguageChange}
          name="language"
          id="language"
          className="px-2 text-xs md:text-sm text-black  rounded-md ml-4 focus:outline-none"
        >
          <option value="en">English</option>
          <option value="ar">العربية</option>
        </select>
      </div>

      <nav className="py-4 w-screen flex justify-between items-center z-10 initial_nav top-0 left-0  px-2 sm:px-4 xl:px-7 md:px-5 pr-3 sm:pr-5 md:pr-10 lg:pr-16 ">
        <div className="w-[50px] h-[30px] sm:w-[60px] sm:h-[35px] md:w-[60px] md:h-[40px] lg:w-[70px] lg:h-[45px] xl:w-[80px] xl:h-[50px]">
          <img src={logo} alt="logo" className="w-full h-full" />
        </div>
        <ul className="px-7 rounded-full hidden md:flex ltr:justify-end  justify-start items-center gap-4 sm:gap-6 md:gap-8">
          {navbar.map((item, index) => {
            return (
              <li key={index} className="md:py-2  xl:py-3">
                <a
                  href={item.path}
                  className="poppins-500 text-light text-sm md:text-base xl:text-lg relative link"
                >
                  {t(item.labelKey)}
                </a>
              </li>
            );
          })}
        </ul>

        <div className=" hamburger w-[40px] h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]  rounded-full flex justify-center gap-[3px] items-center flex-col">
          <div className="line bg-white w-[18px] sm:w-[20px] md:w-[24px] lg:w-[28px] h-[3px] line_1"></div>
          <div className="line bg-white w-[18px] sm:w-[20px] md:w-[24px] lg:w-[28px] h-[3px] line_1"></div>
          <div className="line bg-white w-[18px] sm:w-[20px] md:w-[24px] lg:w-[28px] h-[3px] line_1"></div>
        </div>
      </nav>
    </header>
  );
};

export default GuestNavbar;
