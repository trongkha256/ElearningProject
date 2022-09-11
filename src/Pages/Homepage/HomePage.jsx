import React from "react";
import CarouselSlider from "../../Components/Carousel/Carousel";
import MyProduct from "../../Components/MyProduct/MyProduct";
import ScrollTopArrow from "../../Components/Scroll/Scroll";
import Teacher from "../../Components/Teacher/Teacher";
import ContentShowing from "../ContentShowing/ContentShowing";
import CourseShowing from "../CourseShowing/CourseShowing";

const HomePage = () => {
  return (
    <>
      <CarouselSlider />
      <CourseShowing />
      <ContentShowing />
      <Teacher />
      <MyProduct />
      <ScrollTopArrow />
    </>
  );
};

export default HomePage;
