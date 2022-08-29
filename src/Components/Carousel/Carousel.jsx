import React from "react";
import { Carousel } from "flowbite-react";

const CarouselSlider = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-96 2xl:h-105 mt-24">
      <Carousel>
        <img
          src="https://cdn2.topica.vn/3ef1a653-5b27-404b-97a5-604f44c67e13/product/625812045f1ed60026aec084"
          className="h-full bject-fill"
          alt="..."
        />
        <img
          src="https://cdn2.topica.vn/3ef1a653-5b27-404b-97a5-604f44c67e13/product/6274ab6a07a0b60025521dd5"
          className="h-full bject-fill"
          alt="..."
        />
        <img
          src="https://cdn2.topica.vn/3ef1a653-5b27-404b-97a5-604f44c67e13/product/6284d165436a3b0025d75c83"
          className="h-full bject-fill"
          alt="..."
        />
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
