import { explorePages } from "@Data/otherData";
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaPhoneSquareAlt,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function returnPagesRows(text, path) {
  return (
    <Link
      to={path}
      className="block text-sm md:text-base xl:text-lg 2xl text-[20px] mb-1 poppins-500 hover:text-white"
    >
      {text}
    </Link>
  );
}

const Footer = () => {
  return (
    <div id="contact" className="bg-primary text-light pt-8 w-full px-12">
      <div className="max-w-[2000px] mx-auto  gap-8 w-full px-3 flex justify-between items-stretch flex-wrap">
        <div className="flex-grow basis-[300px]">
          <h3 className="poppins-800 text-base sm:text-lg lg:text-xl 2xl:text-[23px] text-white border-b-light border-b-2  pb-1 mb-3">
            LOCATION - KSA
          </h3>
          <p className="text-sm md:text-base xl:text-lg 2xl text-[20px] mb-1 poppins-500">
            Riyadh, As Salam
          </p>
          <p className="text-sm md:text-base xl:text-lg 2xl text-[20px] mb-1 poppins-500">
            Jeddah, KSA
          </p>
          <p className="text-sm md:text-base xl:text-lg 2xl text-[20px] mb-1 poppins-500">
            Dammam
          </p>
          <p className="text-sm md:text-base xl:text-lg 2xl text-[20px] mb-1 poppins-500">
            Al Qaseem, KSA
          </p>
          <p className="text-sm md:text-base xl:text-lg 2xl text-[20px] mb-1 poppins-500">
            Tel: +966545573208
          </p>
        </div>
        <div className="flex-grow basis-[300px]">
          <h3 className="poppins-800 text-base sm:text-lg lg:text-xl 2xl:text-[23px] text-white border-b-light border-b-2  pb-1 mb-3">
            Explore
          </h3>
          {explorePages.map((item) => {
            return returnPagesRows(item.text, item.path);
          })}
        </div>
        <div className="flex-grow basis-[300px]">
          <h3 className="uppercase poppins-800 text-base sm:text-lg lg:text-xl 2xl:text-[23px] text-white border-b-light border-b-2  pb-1 mb-3">
            COnnect with us
          </h3>
          <div className="flex justify-start items-center flex-wrap gap-4">
            <a
              href="/"
              className="flex justify-start items-center gap-2 transition-all ease-in-out duration-500 hover:text-primary-light"
            >
              <FaFacebookSquare className="text-lg sm:text-xl md:text-2xl lg:text-3xl" />
            </a>

            <a
              href="/"
              className="flex justify-start items-center gap-2 transition-all ease-in-out duration-500 hover:text-primary-light"
            >
              <MdEmail className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
            </a>

            <a
              href="/"
              className="flex justify-start items-center gap-2 transition-all ease-in-out duration-500 hover:text-primary-light"
            >
              <FaSquareWhatsapp className="text-lg sm:text-xl md:text-2xl lg:text-3xl" />
            </a>

            <a
              href="/"
              className="flex justify-start items-center gap-2 transition-all ease-in-out duration-500 hover:text-primary-light"
            >
              <FaPhoneSquareAlt className="text-lg sm:text-xl md:text-2xl lg:text-3xl" />
            </a>
            <a
              href="/"
              className="flex justify-start items-center gap-2 transition-all ease-in-out duration-500 hover:text-primary-light"
            >
              <FaInstagramSquare className="text-lg sm:text-xl md:text-2xl lg:text-3xl" />
            </a>
          </div>
          <div className="mt-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.4418624130158!2d46.80062897418887!3d24.711706251196006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0700616e1d21%3A0xe5e65b34724b0bdd!2zQWR3YXQgQ29tcGFueSB8INi02LHZg9ipINin2K_ZiNin2Ko!5e0!3m2!1sen!2ssa!4v1748951435204!5m2!1sen!2ssa"
              className="w-full h-[200px] rounded-md"
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="text-center text-white mt-4 border-t ry py-3">
        <p className="poppins-500">
          Copyright © 2024{" "}
          <span className="text-light poppins-700">Adwat </span> , All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
