import React from "react";
import { useTranslation } from "react-i18next";

const SectionHeader = ({ itemKey }) => {
  const { t } = useTranslation();
  return (
    <h1 className="poppins-700 text-2xl sm:text-3xl lg:text-4xl 2xl:text-[46px]">
      {t(itemKey)}
    </h1>
  );
};

export default SectionHeader;
