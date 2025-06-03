import React, { useEffect, useState } from "react";
import logo from "@Images/logo.png";
import {
  FaFacebookSquare,
  FaWhatsappSquare,
  FaInstagramSquare,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { navbar } from "@Data/menu";
import "./navbar.css";
import { useTranslation } from "react-i18next";

const iconClasses = "text-sm md:text-base xl:text-lg 2xl:text-xl text-gray-600";

const GuestNavbar = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "en");

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
      const navbar = document.querySelector(".navbar");
      if (!navbar) return;

      if (window.scrollY > 105) {
        navbar.classList.remove("relative");
        navbar.classList.add("fixed", "animateMenu");
      } else {
        navbar.classList.add("relative");
        navbar.classList.remove("fixed", "animateMenu");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="relative bg-white">
      <div className="flex justify-between items-center px-12 py-4">
        <div className="w-[80px] h-[40px] sm:w-[90px] sm:h-[45px] md:w-[100px] md:h-[50px] lg:w-[110px] lg:h-[50px] xl:w-[120px] xl:h-[60px]">
          <img src={logo} alt="logo" className="w-full h-full" />
        </div>
        <div></div>
        <div className="flex text-gray-500">
          <div className="hidden ltr:border-r-2 py-1 border-gray-400 rtl:pl-5 pr-5 sm:flex justify-start items-center flex-col">
            <div className="mb-1">
              <p className="text-xs sm:text-sm 2xl:text-base poppins-500 text-gray-500">
                Connect with us
              </p>
            </div>
            <div className="flex justify-start items-center gap-3">
              <FaFacebookSquare className={iconClasses} />
              <FaInstagramSquare className={iconClasses} />
              <FaWhatsappSquare className={iconClasses} />
            </div>
          </div>

          <div className=" py-1 rtl:border-r-2 border-gray-400 rtl:pr-5 pl-5 flex justify-center items-start flex-col">
            <div className="mb-1">
              <p className="text-xs sm:text-sm 2xl:text-base poppins-500">
                Call us anytime
              </p>
            </div>
            <div className="flex justify-start items-center gap-3 ">
              <FaPhoneSquareAlt className={iconClasses} />
              <p
                dir="ltr"
                className="text-xs md:text-sm xl:text-base poppins-500"
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
            className="px-2 text-sm text-black  py-1 rounded-md ml-4 focus:outline-none"
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
          </select>
        </div>
      </div>

      <nav className="py-2  w-full z-10 relative top-0 left-0 bg-primary px-2 sm:px-4 md:px-5 pr-3 sm:pr-5 md:pr-10 lg:pr-16 navbar">
        <ul className="flex ltr:justify-end justify-start items-center gap-4 sm:gap-6 md:gap-8">
          {navbar.map((item, index) => {
            return (
              <li key={index} className="py-3">
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
      </nav>
    </header>
  );
};

export default GuestNavbar;
