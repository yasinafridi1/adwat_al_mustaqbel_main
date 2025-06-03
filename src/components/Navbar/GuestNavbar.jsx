import React, { useEffect } from "react";
import logo from "@Images/logo.png";
import {
  FaFacebookSquare,
  FaWhatsappSquare,
  FaInstagramSquare,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { navbar } from "@Data/menu";
import "./navbar.css";

const iconClasses = "text-sm md:text-base xl:text-lg 2xl:text-xl text-gray-600";

const GuestNavbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      console.log("Window Scroll", window.scrollY); // ✅ should log on scroll
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

        <div className="flex text-gray-500">
          <div className="hidden border-r-2 py-1 border-gray-400 pr-5 sm:flex justify-center items-start flex-col">
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

          <div className=" py-1 border-gray-400 pl-5 flex justify-center items-start flex-col">
            <div className="mb-1">
              <p className="text-xs sm:text-sm 2xl:text-base poppins-500">
                Call us anytime
              </p>
            </div>
            <div className="flex justify-start items-center gap-3 ">
              <FaPhoneSquareAlt className={iconClasses} />
              <p className="text-xs md:text-sm xl:text-base poppins-500">
                +966545573208
              </p>
            </div>
          </div>
        </div>
      </div>

      <nav className="py-2 w-full z-10 relative top-0 left-0 bg-primary px-5 !pr-16 navbar">
        <ul className="flex justify-end items-center gap-8">
          {navbar.map((item, index) => {
            return (
              <li key={index} className="py-3">
                <a
                  href={item.path}
                  className="poppins-500 text-light text-sm md:text-base xl:text-lg relative link"
                >
                  {item.label}
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
