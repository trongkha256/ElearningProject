import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCourseShowing } from "../../Slices/course";
import LoadingPage from "../../Components/LoadingPage/LoadingPage";
import Slider from "react-slick";
import { addToCart } from "../../Slices/cart";
var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};


const CourseShowing = () => {
  const dispatch = useDispatch();

  /*eslint-disable*/
  useEffect(() => {
    dispatch(getCourseShowing());
  }, []);

  const navigate = useNavigate();
  const { courses, isLoading } = useSelector((state) => state.course);
  const {user}=useSelector((state)=> state.auth)
  if (isLoading) {
    return <LoadingPage />;
  }

  const handleNavigate = (courseId) => {
    navigate(`course/${courseId}`);
  };
  const handleAddCart=(course)=>{
    if (!user){
      navigate('/login')
    }
    else{
      dispatch(addToCart(course))
    }

  }

  return (
    <div className="container mx-auto max-w-6xl my-10 ">
      <h1 className="text-center text-3xl font-bold mb-10 ">
        DANH SÁCH CÁC KHÓA HỌC
      </h1>
        <Slider {...settings}>
          {courses.map((course) => {
            return (
              <div
                key={course.maKhoaHoc}
                className="hover:cursor-pointer max-w-md h-105 flex flex-col justify-between bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                
              >
                <div onClick={() => handleNavigate(course.maKhoaHoc)}>
                  <img
                    className="rounded-t-lg w-full h-48 inline-block"
                    src={course.hinhAnh}
                    alt={course.biDanh}
                  />
                </div>
                <div className="p-5">
                  <a href="#" onClick={() => handleNavigate(course.maKhoaHoc)}>
                    <h5 className="mb-2 text-2xl h-16 overflow-hidden font-bold tracking-tight text-gray-900 dark:text-white">
                      {course.tenKhoaHoc}
                    </h5>
                  </a>
                  <p onClick={() => handleNavigate(course.maKhoaHoc)} className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-16 overflow-hidden">
                    {course.moTa}
                  </p>
                  <div className="flex justify-center pt-6">
                    <div
                      onClick={() => handleNavigate(course.maKhoaHoc)}
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        aria-hidden="true"
                        className="ml-2 -mr-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div
                      onClick={()=>handleAddCart(course)}
                      className="inline-flex ml-3 items-center py-2 px-8 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      +Cart
                      <i className="fa fa-shopping-cart text-white text-sm"></i>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>

    </div>
  );
};

export default CourseShowing;
