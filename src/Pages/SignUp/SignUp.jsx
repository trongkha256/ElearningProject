import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import LoadingPage from "../../Components/LoadingPage/LoadingPage";
import { registerAction } from "../../Slices/registerAuth";
import { NavLink } from "react-router-dom";

// Register fields: taiKhoan, matKhau, email, hoTen, soDT

// validation schema
// const schema = object({
//   taiKhoan: string().required("Tài khoản không được để trống"),
//   matKhau: string().required("Mật khẩu không được để trống"),
//   email: string()
//     .required("Email không được để trống")
//     .email("Email không đúng định dạng"),
//   hoTen: string().required("Họ tên không được để trống"),
//   soDT: string().required("Số điện thoại không được để trống"),
//   maNhom: string("GP01"),
// });

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      soDT: "",
      maNhom: "GP01",
    },
    //mode: cách validation
    mode: "onTouched",
    // mode: "onTouched",
    // // cấu hình validation bằng yup schema
    // resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const { user, isLoading, error } = useSelector((state) => state.registerAuth);

  const onSubmit = (values) => {
    dispatch(registerAction(values));
  };
  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="mt-36 w-1/3 h-full rounded-2xl bg-white mx-auto mb-10">
      <h1 className="text-center text-3xl font-bold pt-5">Đăng Ký</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6 mx-5 mt-10">
          <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
            Tài Khoản
          </label>
          <input
            type="text"
            {...register("taiKhoan")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          />
          {errors.taiKhoan && (
            <span className="text-red-400">{errors.taiKhoan?.message}</span>
          )}
        </div>
        <div className="mb-6 mx-5 mt-10">
          <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
            Mật Khẩu
          </label>
          <input
            type="password"
            {...register("matKhau")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("matKhau", {
              required: {
                value: true,
                message: "Mật khẩu không được để trống",
              },
              // pattern: /^[a-zA-Z0-9]{5,}$/,
              // pattern: {
              //   value: /^[a-zA-Z0-9]{5,}$/,
              //   message: "Tài khoản không đúng định dạng",
              // },
            })}
          />
          {errors.matKhau && (
            <span className="text-red-400">{errors.matKhau?.message}</span>
          )}
        </div>
        <div className="mb-6 mx-5 mt-10">
          <labe
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
            l
          >
            Email
          </labe>
          <input
            type="email"
            {...register("email")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("email", {
              required: {
                value: true,
                message: "Email không được để trống",
              },
              // pattern: /^[a-zA-Z0-9]{5,}$/,
              // pattern: {
              //   value: /^[a-zA-Z0-9]{5,}$/,
              //   message: "Tài khoản không đúng định dạng",
              // },
            })}
          />
          {errors.email && (
            <span className="text-red-400">{errors.email?.message}</span>
          )}
        </div>
        <div className="mb-6 mx-5 mt-10">
          <labe
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
            l
          >
            Họ Tên
          </labe>
          <input
            type="text"
            {...register("hoTen")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("hoTen", {
              required: {
                value: true,
                message: "Họ tên không được để trống",
              },
              // pattern: /^[a-zA-Z0-9]{5,}$/,
              // pattern: {
              //   value: /^[a-zA-Z0-9]{5,}$/,
              //   message: "Tài khoản không đúng định dạng",
              // },
            })}
          />
          {errors.hoTen && (
            <span className="text-red-400">{errors.hoTen?.message}</span>
          )}
        </div>
        <div className="mb-6 mx-5 mt-10">
          <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
            Số Điện Thoại
          </label>
          <input
            type="text"
            {...register("soDT")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("soDT", {
              required: {
                value: true,
                message: "Số điện thoại không được để trống",
              },
              // pattern: /^[a-zA-Z0-9]{5,}$/,
              // pattern: {
              //   value: /^[a-zA-Z0-9]{5,}$/,
              //   message: "Tài khoản không đúng định dạng",
              // },
            })}
          />
          {errors.soDT && (
            <span className="text-red-400">{errors.soDT?.message}</span>
          )}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-white mb-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Đăng Ký
          </button>
        </div>
      </form>
      {error && (
        <span className="text-red-600 block text-center mb-10">
          Tài khoản đã tồn tại. Vui lòng nhập tài khoản khác.
        </span>
      )}
      {user && (
        <div className="mx-5 pb-5">
          <span className="text-red-600 block text-center mt-3">
            Đăng ký thành công.
          </span>
          <div className="flex justify-center">
            <p className="text-[#00459F]">Đăng nhập tại đây! </p>
            <NavLink className="ml-3 hover:text-gray-600" to="/login">
              Đăng nhập
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
