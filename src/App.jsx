import { RouterProvider } from "react-router";
import routes from "./routes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration in ms
      once: false, // whether animation should happen only once while scrolling down
    });
  }, []);
  return <RouterProvider router={routes} />;
}
