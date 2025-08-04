import Guestlayouts from "@Layouts/Guestlayouts";

import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const Home = lazy(() => import("@Pages/Home"));

export default createBrowserRouter([
  {
    path: "/",
    element: <Guestlayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);
