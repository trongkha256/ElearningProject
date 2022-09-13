import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { resetAuth } from "../../Slices/auth";

const HeaderHome = () => {
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //   };
  /*eslint-disable*/
  const [render, setRender] = useState(true);
  const dispatch = useDispatch;
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`account-info/${user.taiKhoan}`);
  };
  const renderStatus = () => {
    if (user) {
      return (
        <>
          <div
            className=" hover:cursor-pointer"
            onClick={() => {
              navigate("/cart");
            }}
          >
            <i className="fa fa-shopping-cart text-white lg:text-2xl s:text-xs sm:text-base md:text-xl hover:cursor-pointer"></i>
          </div>
          <div
            onClick={() => handleClick()}
            className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600  hover:cursor-pointer"
          >
            <img src="https://i.pravatar.cc/32" alt="avatar"></img>
          </div>
          <a href="/">
            <button
              className="block text-white bg-[#383838] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
              onClick={() => {
                setRender(false);
                localStorage.clear();
                dispatch(resetAuth());
              }}
            >
              Đăng xuất
            </button>
          </a>
        </>
      );
    } else {
      return (
        <>
          <NavLink
            to="/login"
            className="lg:text-2xl s:text-sm sm:text-base md:text-xl"
          >
            Đăng Nhập
          </NavLink>
          <NavLink
            to="/register"
            className="lg:text-2xl s:text-sm sm:text-base md:text-xl"
          >
            Đăng Ký
          </NavLink>
        </>
      );
    }
  };
  return (
    <div className="bg-[#212121] h-24 text-white  fixed top-0 left-0 z-50 w-full lg:text-2xl s:text-sm sm:text-base md:text-xl">
      <div className="conatiner px-6 pr-7 pt-3 mx-auto flex items-center justify-between">
        <NavLink className="logo relative" to="">
          <img className="h-16 w-16 " src="./images/logo.png" alt="#" />
          <p className="absolute top-4 left-16 s:invisible sm:visible">
            Edumall
          </p>
        </NavLink>
        <div className="lg:w-2/5 bg-[#383838] rounded-2xl md:w-1/3 s:w-32">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block p-4 pl-10 w-full text-xl text-white bg-[#383838] rounded-2xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tìm kiếm khóa học"
                required
              />
            </div>
          </form>
        </div>
        <div className="flex justify-center gap-5">{renderStatus()}</div>
      </div>
    </div>
  );
};

export default HeaderHome;
