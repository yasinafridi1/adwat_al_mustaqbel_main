import Guestlayouts from "@Layouts/Guestlayouts";
import Home from "@Pages/Home";
import React from "react";
import { createBrowserRouter } from "react-router-dom";

export default createBrowserRouter([
  {
    path: "/",
    element: <Guestlayouts />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);
