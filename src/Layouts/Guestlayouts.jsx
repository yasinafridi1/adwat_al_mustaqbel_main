import GuestNavbar from "@Components/Navbar/GuestNavbar";
import React from "react";
import { Outlet } from "react-router-dom";

const Guestlayouts = () => {
  return (
    <>
      <GuestNavbar />
      <Outlet />
    </>
  );
};

export default Guestlayouts;
