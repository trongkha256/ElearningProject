import React from "react";
import HeaderHome from "../Pages/HeaderHome/HeaderHome";
import { Outlet } from "react-router-dom";
import Footer from '../Components/Footer/Footer.jsx'

const HomeTemplate = () => {
  return (
    <>
      <HeaderHome />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeTemplate;
