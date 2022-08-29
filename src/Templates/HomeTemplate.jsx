import React from "react";
import HeaderHome from "../Pages/HeaderHome/HeaderHome";
import { Outlet } from "react-router-dom";

const HomeTemplate = () => {
  return (
    <>
      <HeaderHome />
      <Outlet />
    </>
  );
};

export default HomeTemplate;
