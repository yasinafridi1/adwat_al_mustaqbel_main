import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import "./modal.css";
import ClickOutside from "@Components/Wrappers/clickOutside";
import { useTranslation } from "react-i18next";

const ServiceBaseModal = ({ headerText, open, onClose, children }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`${
        open
          ? "w-full h-full fixed top-0 left-0 z-999 flex justify-center items-center modalBackground  "
          : "hidden"
      } transition-all duration-1000 ease-in-out `}
    >
      <ClickOutside
        onClick={onClose}
        className="w-[98%] sm:w-[90%] max-h-[90vh] bg-white dark:bg-meta-4 rounded-xl overflow-y-auto"
      >
        <div className="w-full mx-auto py-2 flex justify-end items-center bg-primary pl-4">
          <div className="w-full flex justify-between items-center">
            <h5 className="poppins-600 text-sm sm:text-base md:text-lg lg:text-xl capitalize text-white px-4">
              {headerText}
            </h5>
            <button onClick={onClose} className="p-4  text-3xl ]">
              <MdOutlineCancel className="text-white" />
            </button>
          </div>
        </div>

        <div className="py-5 w-[90%] mx-auto ">{children}</div>

        <div className="w-[90%] mx-auto flex justify-center items-center gap-5 mt-5 mb-4">
          <button
            onClick={onClose}
            className="flex-grow max-w-[200px] px-5 text-primary poppin-500 text-lg py-2 rounded-md bg-white border border-primary hover:text-white hover:bg-primary transition-all ease-out duration-500"
          >
            {t("cancel")}
          </button>
        </div>
      </ClickOutside>
    </div>
  );
};

export default ServiceBaseModal;
