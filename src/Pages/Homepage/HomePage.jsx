import React from "react";
import CarouselSlider from "../../Components/Carousel/Carousel";
import Footer from "../../Components/Footer/Footer";
import MyProduct from "../../Components/MyProduct/MyProduct";
import ScrollTopArrow from "../../Components/Scroll/Scroll";
import CourseShowing from "../CourseShowing/CourseShowing";

const HomePage = () => {
  return (
    <>
      <CarouselSlider />
      <CourseShowing />
      <MyProduct />
      <Footer />
      <ScrollTopArrow />
    </>
  );
};

export default HomePage;
