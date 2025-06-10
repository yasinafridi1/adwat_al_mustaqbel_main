import React, { useEffect, useRef, useState } from "react";
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
import { IoCloseCircleOutline } from "react-icons/io5";

const GuestNavbar = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "en");
  const [logo, setLogo] = useState(primaryWhite);
  const [sideBarOpen, setSideBar] = useState(false);
  const sidebarRef = useRef();

  function handleLanguageChange(e) {
    const { value } = e.target;
    setLanguage(value);
    i18n.changeLanguage(value);
    document.documentElement.setAttribute(
      "dir",
      value === "ar" ? "rtl" : "ltr"
    );
  }

  function handleSideBar() {
    setSideBar(!sideBarOpen);
  }

  useEffect(() => {
    const navbarElement = document.querySelector("nav");

    const handleScroll = () => {
      if (!navbarElement) return;

      if (window.scrollY > 100) {
        navbarElement.classList.remove("initial_nav");
        navbarElement.classList.add("fixed_nav", "animateMenu");
        setLogo(secondaryWhite);
      } else {
        navbarElement.classList.add("initial_nav");
        navbarElement.classList.remove("fixed_nav", "animateMenu");
        setLogo(primaryWhite);
      }
    };

    const handleClickOutside = (event) => {
      if (
        sideBarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        handleSideBar();
      }
    };

    // Add both listeners
    window.addEventListener("scroll", handleScroll);
    if (sideBarOpen) document.addEventListener("mousedown", handleClickOutside);

    // Clean up both
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sideBarOpen]);
  return (
    <header className="relative">
      <div className="flex justify-between items-center px-5 sm:px-9 md:px-12 py-2 bg-white relative">
        <div className="flex justify-start items-center gap-3">
          <div className="hidden md:flex ltr:border-r-2 rtl:border-l-2 border-gray-400 pr-3 rtl:pl-3">
            <p className="text-xs sm:text-sm 2xl:text-base poppins-500 text-gray-500">
              {t("connect")}
            </p>
          </div>
          <div className="flex justify-start items-center gap-3 ltr:border-r-2 rtl:border-l-2 border-gray-400 ltr:pr-3 rtl:pl-3">
            <a
              href=""
              className="hover:scale-150 transition-all ease-in-out duration-500"
            >
              <FaFacebookSquare className={iconClasses} />
            </a>
            <a
              href=""
              className="hover:scale-150 transition-all ease-in-out duration-500"
            >
              <FaInstagramSquare className={iconClasses} />
            </a>
            <a
              href="https://wa.me/+966508489160"
              target="_blank"
              className="hover:scale-150 transition-all ease-in-out duration-500"
            >
              <FaWhatsappSquare className={iconClasses} />
            </a>
          </div>
          <div className="flex justify-start items-center gap-3 ">
            <a
              href="tel:+966508489160"
              dir="ltr"
              className="text-xs sm:text-sm 2xl:text-base poppins-500"
            >
              +966508489160
            </a>
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

        <div
          onClick={handleSideBar}
          className="cursor-pointer hamburger w-[40px] h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]  rounded-full flex justify-center gap-[3px] items-center flex-col"
        >
          <div className="line bg-white w-[18px] sm:w-[20px] md:w-[24px] lg:w-[28px] h-[3px] line_1"></div>
          <div className="line bg-white w-[18px] sm:w-[20px] md:w-[24px] lg:w-[28px] h-[3px] line_1"></div>
          <div className="line bg-white w-[18px] sm:w-[20px] md:w-[24px] lg:w-[28px] h-[3px] line_1"></div>
        </div>
      </nav>

      <aside
        ref={sidebarRef}
        className={`w-[300px] sm:w-[400px] md:w-[450px] h-screen  z-[99] flex justify-end fixed top-0 right-0 sidebar ${
          sideBarOpen ? "active" : ""
        }`}
      >
        <div className="w-full h-screen bg-primary rounded-l-4xl py-6 overflow-y-auto">
          <div className="w-[90%] mx-auto flex ltr:justify-end mt-4">
            <IoCloseCircleOutline
              onClick={handleSideBar}
              className="text-light text-[35px] cursor-pointer"
            />
          </div>
          <div className="flex justify-center items-center mt-14">
            <ul>
              {navbar.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="md:py-2  xl:py-3">
                    <a
                      href={item.path}
                      onClick={handleSideBar}
                      className="poppins-500 text-light text-base xl:text-lg relative link flex justify-start items-center gap-4 min-w-max"
                    >
                      <Icon className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl" />
                      {t(item.labelKey)}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mt-7 mx-auto w-full flex justify-center items-center gap-4 ">
            <a
              href=""
              className="hover:scale-150 transition-all ease-in-out duration-500 "
            >
              <FaFacebookSquare className="text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-2xl text-light hover:scale-110 transition-all ease-in-out duration-500" />
            </a>
            <a
              href=""
              className="hover:scale-150 transition-all ease-in-out duration-500"
            >
              <FaInstagramSquare className="text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-2xl text-light hover:scale-110 transition-all ease-in-out duration-500" />
            </a>
            <a
              href="https://wa.me/+966508489160"
              target="_blank"
              className="hover:scale-150 transition-all ease-in-out duration-500"
            >
              <FaWhatsappSquare className="text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-2xl text-light hover:scale-110 transition-all ease-in-out duration-500" />
            </a>
          </div>
          <div className="w-full flex justify-center mt-5">
            <select
              value={language}
              onChange={handleLanguageChange}
              name="language"
              id="language"
              className="py-1 px-2 text-xs md:text-sm text-black  rounded-md ml-4 focus:outline-none bg-white"
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
            </select>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default GuestNavbar;
