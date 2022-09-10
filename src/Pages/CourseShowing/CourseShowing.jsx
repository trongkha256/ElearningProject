import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCourseShowing } from "../../Slices/course";
import LoadingPage from "../../Components/LoadingPage/LoadingPage";
import { useState } from "react";

const CourseShowing = () => {
  const [render,setRender]=useState(1);
  const dispatch = useDispatch();

  /*eslint-disable*/
  useEffect(() => {
    dispatch(getCourseShowing());
  }, []);

  const navigate = useNavigate();
  const { courses, isLoading } = useSelector((state) => state.course);
  if (isLoading) {
    return <LoadingPage />;
  }

  const handleNavigate = (courseId) => {
    navigate(`course/${courseId}`);
  };

  return (
    <div className="mx-5 my-10">
      <h1 className="text-center text-3xl font-bold mb-10 ">
        DANH SÁCH CÁC KHÓA HỌC
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {courses.map((course) => {
          return (
            <div
              className=" hover:cursor-pointer max-w-sm h-105 flex flex-col justify-between bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
              onClick={() => handleNavigate(course.maKhoaHoc)}
            >
              <a href="#">
                <img
                  className="rounded-t-lg w-full h-48 inline-block"
                  src={course.hinhAnh}
                  alt={course.biDanh}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {course.tenKhoaHoc}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-16 overflow-hidden">
                  {course.moTa}
                </p>
                <div className="flex justify-center">
                  <a
                    href="#"
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
                  </a>
                  <a
                    href="#"
                    className="inline-flex ml-3 items-center py-2 px-8 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    +Cart
                    <i className="fa fa-shopping-cart text-white text-sm"></i>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
        {/* <div className="h-full">
        <Card imgAlt={course.biDanh} imgSrc={course.hinhAnh}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {course.tenKhoaHoc}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 h-20 overflow-hidden">
            {course.moTa}
          </p>
        </Card>
      </div> */}
      </div>
    </div>
  );
};

export default CourseShowing;
