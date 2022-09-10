import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import LoadingPage from "../../Components/LoadingPage/LoadingPage";
import { loginAction } from "../../Slices/auth";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    //mode: cách validation
    mode: "onTouched",
  });
  const navigate = useNavigate();
  const { render, setRender } = useState(true);
  const dispatch = useDispatch();
  const { user, isLoading, error } = useSelector((state) => state.auth);
  const onSubmit = (value) => {
    dispatch(loginAction(value));
    setRender(!render);
  };
  console.log(user);
  const onError = (error) => {
    console.log(error);
  };
  if (isLoading) {
    return <LoadingPage />;
  }
  if (user) {
    if (user.maLoaiNguoiDung === "QuanTri") {
      navigate("/dashboard");
      // } else if (location?.state?.idSchedule) {
      //   navigate(`/bookticket/${location?.state?.idSchedule}`);
      // } else {
    } else {
      navigate("/");
    }
  }
  return (
    <div className="mt-36 w-1/3 h-105 rounded-2xl bg-white mx-auto mb-10">
      <h1 className="text-center text-3xl font-bold  pt-5">ĐĂNG NHẬP</h1>
      {error && (
        <span className="text-red-600 block text-center mt-3">
          Tài khoản hoặc Mật khẩu không chính xác.
        </span>
      )}
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="mb-6 mx-5 mt-10">
          <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
            Tài Khoản
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            {...register("taiKhoan", {
              required: {
                value: true,
                message: "Tài khoản không được để trống",
              },
              // pattern: /^[a-zA-Z0-9]{5,}$/,
              // pattern: {
              //   value: /^[a-zA-Z0-9]{5,}$/,
              //   message: "Tài khoản không đúng định dạng",
              // },
            })}
          ></input>
          {errors.taiKhoan && (
            <span className="text-red-400"> {errors.taiKhoan.message}</span>
          )}
        </div>
        <div className="mb-6 mx-5">
          <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
            Mật Khẩu
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="password"
            {...register("matKhau", {
              required: {
                value: true,
                message: "Mật khẩu không được để trống",
              },
              // pattern: /^[a-zA-Z0-9]{5,}$/,
              // pattern: {
              //   value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              //   message: "Mật khẩu không đúng định dạng",
              // },
            })}
          ></input>
          {errors.maKkhau && (
            <span className="text-red-400">{errors.matKhau.message}</span>
          )}
        </div>
        <div className="flex justify-center"> 
          <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
           Đăng nhập
          </button>
        </div>
        
      </form>
      <div className="mx-5 mt-5 flex justify-center">
        <p className="text-[#00459F]">Bạn chưa có tài khoản?</p>
        <NavLink className="ml-3 hover:text-gray-600" to="/register">
          Đăng ký
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
