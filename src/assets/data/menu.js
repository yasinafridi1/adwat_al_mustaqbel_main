// menu.js
import { IoHomeSharp } from "react-icons/io5";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoInformationCircleSharp } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

export const navbar = [
  {
    labelKey: "home",
    path: "#home",
    icon: IoHomeSharp,
  },
  {
    labelKey: "services",
    path: "#services",
    icon: MdMiscellaneousServices,
  },
  {
    labelKey: "about",
    path: "#about",
    icon: IoInformationCircleSharp,
  },
  {
    labelKey: "faq",
    path: "#faqs",
    icon: FaQuestionCircle,
  },
  {
    labelKey: "contact",
    path: "#contact",
    icon: MdContactMail,
  },
];
