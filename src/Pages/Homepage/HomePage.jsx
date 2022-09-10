import React from "react";
import CarouselSlider from "../../Components/Carousel/Carousel";
import Footer from "../../Components/Footer/Footer";
import ScrollTopArrow from "../../Components/Scroll/Scroll";
import CourseShowing from "../CourseShowing/CourseShowing";

const HomePage = () => {
  return (
    <>
      <CarouselSlider />
      <CourseShowing />
      <ScrollTopArrow />
    </>
  );
};

export default HomePage;
