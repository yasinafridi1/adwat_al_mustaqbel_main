import AppLoader from "@Components/Loader/AppLoader";
import GuestNavbar from "@Components/Navbar/GuestNavbar";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Guestlayouts = () => {
  return (
    <>
      <GuestNavbar />
      <Suspense fallback={<AppLoader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Guestlayouts;
