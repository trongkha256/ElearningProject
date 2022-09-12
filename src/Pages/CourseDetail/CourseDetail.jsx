import { Rating } from "flowbite-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import LoadingPage from "../../Components/LoadingPage/LoadingPage";
import { addToCart } from "../../Slices/cart";
import { getCourseDetail } from "../../Slices/courseDetail";

const CourseDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate=useNavigate();

  /*eslint-disable*/
  useEffect(
    () => {
      dispatch(getCourseDetail(id))
    }

    , []);
  const { course, isLoading } = useSelector((state) => state.courseDetail);

  const {user}=useSelector((state)=> state.auth)

  const handleAddCart=(courseItem)=>{
    if (!user){
      navigate('/login')
    }
    else{
      dispatch(addToCart(courseItem))
    }

  }
  if (isLoading) {
    return <LoadingPage />
  }

  return <div className="mt-28 mx-10 container mb-10  max-w-6xl bg-[#ffffff]">
    <div className="flex justify-start pt-5 pb-5">
      <div className="ml-20">
        <img src={course.hinhAnh} alt={course.biDanh} className="w-80 h-80" />
      </div>
      <div className="flex flex-col ml-5">
        <div className="text-2xl font-bold text-[#082346] ">
          {course.tenKhoaHoc}
        </div>
        <div className="text-red-700 mt-5">
          <p className="inline-block font-bold text-[#082346] mr-2">Lượt Xem: </p>
          {course.luotXem}
        </div>
        <div className="text-red-700 mt-5">
          <p className="inline-block font-bold text-[#082346] mr-2">Ngày tạo: </p>
          {course.ngayTao}
        </div>
        <div className="text-red-700 mt-5">
          <p className="inline-block font-bold text-[#082346] mr-2">Số lượng học viên: </p>
          {course.soLuongHocVien}
        </div>
        <div
          onClick={() => handleAddCart(course)}
          className="hover:cursor-pointer py-2 mt-5 px-8 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          +Cart
          <i className="fa fa-shopping-cart text-white text-sm"></i>
        </div>

      </div>

      <div>

      </div>
    </div>
    <div className="mt-5 ml-20">
      <h1 className="text-2xl font-bold text-[#082346] ">Lợi ích từ khoá học</h1>
      <div>
        {course.moTa}
      </div>
    </div>
    <div className="mt-5 ml-20">
      <h1 className="text-2xl font-bold text-[#082346] ">Giảng viên</h1>
      <div className="flex justify-start mt-5">
        <div>
          <img
            className="rounded-full w-48 h-40  inline-block"
            src="https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"
            alt='#'
          />
        </div>
        <div className="flex flex-col justify-center text-center text-2xl font-bold ml-10 align-middle">
          Nguyen Van A
        </div>
      </div>
    </div>
    <div className="mt-5 ml-20 pb-10">
      <h1 className="text-2xl font-bold text-[#082346] mt-5">Đánh giá từ học viên</h1>
      <Rating>
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star filled={false} />
        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          4.95 out of 5
        </p>
      </Rating>
      <p className="text-sm font-medium mb-5 text-gray-500 dark:text-gray-400">
        1,745 global ratings
      </p>
      <Rating.Advanced percentFilled={70}>
        5 star
      </Rating.Advanced>
      <Rating.Advanced percentFilled={17}>
        4 star
      </Rating.Advanced>
      <Rating.Advanced percentFilled={8}>
        3 star
      </Rating.Advanced>
      <Rating.Advanced percentFilled={4}>
        2 star
      </Rating.Advanced>
      <Rating.Advanced percentFilled={1}>
        1 star
      </Rating.Advanced>
    </div>
  </div>;
};

export default CourseDetail;
