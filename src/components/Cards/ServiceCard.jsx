import RequestService from "@Components/Modal/RequestService";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ServiceCard = ({ cardItem, itemIndex, type }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const title = t(`services_cards.${type}.${itemIndex}.title`);
  const itemKey = t(`services_cards.${type}.${itemIndex}.itemKey`);

  const [modal, setModal] = useState({
    status: false,
    header: "",
    itemKey: "",
  });

  function openModal() {
    setModal({
      status: true,
      header: title,
      itemKey: itemKey,
    });
  }

  function closeModal() {
    setModal({
      status: false,
      header: "",
    });
  }

  function handleCardClick() {
    if (type === "ac") {
      openModal();
    } else {
      const whatsappNumber = "+923119921467";
      const message =
        currentLang === "ar"
          ? `مرحبًا، أنا مهتم بطلب خدمة: ${title}. هل يمكنكم تزويدي بمزيد من التفاصيل عنها؟`
          : `Hello, I am interested in requesting the service: ${title}. Could you please provide more details about it?`;
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappLink, "_blank");
    }
  }

  return (
    <>
      {modal.status ? (
        <RequestService
          onClose={closeModal}
          title={modal.header}
          itemKey={modal.itemKey}
        />
      ) : null}

      <div
        data-aos="fade-up"
        className="group flex-grow basis-[350px] max-w-[550px] py-4 pt-6 cursor-pointer rounded-3xl px-5 bg-white hover:bg-primary text-boxdark2 hover:text-light shadow_card"
      >
        <h5 className="poppins-600 text-[16px] sm:text-[18px] lg:text-[20px] 2xl:text-[24px]">
          {title}
        </h5>
        <p className="line-clamp-3 text-[13px] md:text-[13px] xl:text-[14px] 2xl:text-[16px] mt-2">
          {t(`services_cards.${type}.${itemIndex}.description`)}
        </p>
        <div className="w-full h-[300px] mt-3" onClick={handleCardClick}>
          <img
            src={cardItem.img}
            alt={title}
            className="w-full h-full rounded-2xl"
          />
        </div>
        <button
          onClick={handleCardClick}
          className="transition-all ease-in-out duration-500 w-full mt-3 py-3 poppins-500 text-center block text-primary text-[13px] md:text-[13px] xl:text-[14px] 2xl:text-[16px] border border-primary rounded-xl group-hover:bg-gray-100 group-hover:text-primary hover:text-light hover:border-light hover:bg-primary"
        >
          {t("request_service")}
        </button>
      </div>
    </>
  );
};

export default ServiceCard;
