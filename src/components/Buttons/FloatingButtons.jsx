import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
const FloatingButtons = () => {

  return (
    <div className="fixed top-[70%] right-[4%] flex flex-col gap-4 z-[200]">
      {/* WhatsApp Button */}
      {/* Telephone Button */}
      <a
        href="tel:+966508489160" // change to your phone number
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition duration-300 ease-in-out"
      >
        <FaPhoneAlt className="text-[18px] md:text-[20px] lg:text-[24px] 2xl:text-[28px]" />
      </a>
      <a
        href="https://wa.me/+966508489160" // change to your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 ease-in-out"
      >
        <FaWhatsapp className="text-[18px] md:text-[20px] lg:text-[24px] 2xl:text-[28px]" />
      </a>
    </div>
  );
}

export default FloatingButtons;
