import { RouterProvider } from "react-router";
import routes from "./routes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.setAttribute(
      "dir",
      i18n.language === "ar" ? "rtl" : "ltr"
    );
    AOS.init({
      duration: 1200, // animation duration in ms
      once: false, // whether animation should happen only once while scrolling down
    });
  }, []);
  return <RouterProvider router={routes} />;
}
