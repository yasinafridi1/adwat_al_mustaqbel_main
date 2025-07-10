import React from "react";
import ServiceBaseModal from "@Components/Modal/ServiceBaseModal";
import { useTranslation } from "react-i18next";

const RequestService = ({ onClose, title, itemKey }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const items = t(`priceList.${itemKey}`, { returnObjects: true });
  const whatsappNumber = "+966508489160";

  function sendMessage(data) {
    const { label, price } = data;

    const message =
      currentLang === "ar"
        ? `مرحبًا، أود الاستفسار عن الخدمة التالية:\n• المشكلة: ${label}\n• السعر: ${price}\n• النوع: ${title}\nهل يمكنكم تزويدي بمزيد من التفاصيل؟ شكرًا لكم.`
        : `Hello, I would like to inquire about the following service:\n• Problem: ${label}\n• Price: ${price}\n• Type: ${title}\nCould you please provide more details? Thank you.`;

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${whatsappNumber.replace(
      "+",
      ""
    )}?text=${encodedMessage}`;
    window.open(url, "_blank");
  }

  return (
    <ServiceBaseModal
      headerText={title}
      loading={false}
      onClose={onClose}
      open={true}
    >
      <table className="w-full min-w-[300px] border-collapse !overflow-x-auto ">
        <thead className="bg-primary-light text-gray-800">
          <tr className="text-sm md:text-base">
            <th className="py-3 ltr:rounded-tl-xl rtl:rounded-tr-xl ltr:text-left rtl:text-right rtl:pr-3 ltr:pl-3">
              Name
            </th>
            <th className="ltr:text-left rtl:text-right rtl:pl-3 rtl:pr-3 ">
              Price
            </th>
            <th className="py-3 ltr:rounded-tr-xl rtl:rounded-tl-xl ltr:text-left rtl:text-right rtl:pl-3 rtl:pr-3 "></th>
          </tr>
        </thead>
        <tbody className="text-xs md:text-sm">
          {items.length
            ? items.map((item, index) => {
                return (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="rtl:pr-3 ltr:pl-3  py-2 w-[35%] sm:w-[50%] md:w-[60%]">
                      {item.label}
                    </td>
                    <td className="ltr:text-left rtl:text-right rtl:pl-3 rtl:pr-3   min-w-[90px] ">
                      {item.price}
                    </td>
                    <td className="ltr:text-right rtl:text-left !text-xs poppins-600 xl:text-sm rtl:pl-3 ltr:pr-3  py-2">
                      <button
                        onClick={() => {
                          sendMessage(item);
                        }}
                        className="text-nowrap border border-primary text-primary transition-all ease-in-out duration-300 hover:bg-primary hover:text-white px-2 py-2 rounded-md"
                      >
                        {t("request_service")}
                      </button>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </ServiceBaseModal>
  );
};

export default RequestService;
