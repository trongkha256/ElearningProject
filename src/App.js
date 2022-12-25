import "./App.css";

import ErrorBoundary from "./Components/ErrorBoudary/ErrorBoudary";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeTemplate from "./Templates/HomeTemplate";
import SignIn from "./Pages/SignIn/SignIn.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import HomePage from "./Pages/Homepage/HomePage.jsx";
import CourseDetail from "./Pages/CourseDetail/CourseDetail";
import { AccoutInfo } from "./Pages/AccountInfo/AccoutInfo";
import { useSelector } from "react-redux";
import Cart from "./Pages/Cart/Cart";
import AdminHome from "./Components/Admin/Pages/AdminHome/AdminHome";
import ManageCourses from "./Components/Admin/Pages/ManageCourses/ManageCourses";
import ManageUsers from "./Components/Admin/Pages/ManageUsers/ManageUsers";
import ContentDetail from "./Pages/ContentDetail/ContentDetail";

function App() {
  const { user } = useSelector((state) => state.auth);
  let check = true;
  if (user != null) {
    if (user.maLoaiNguoiDung === "GV") {
      check = false;

    }
  }
  //ahsghasgasg
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          {!check ? (
            <Route path="" element={<HomeTemplate />}>
              <Route path="quanLyKhoaHoc" element={<ManageCourses />}></Route>
              <Route path="quanLyNguoiDung" element={<ManageUsers />}></Route>
              {user && (
                <Route
                  path="account-info/:taiKhoan"
                  element={<AccoutInfo />}
                ></Route>
              )}
              <Route index element={<AdminHome />}></Route>
              <Route path="*" element={<Navigate to={""} />}></Route>
            </Route>
          ) : (
            <Route path="" element={<HomeTemplate />}>
              {!user && <Route path="login" element={<SignIn />}></Route>}
              {!user && <Route path="register" element={<SignUp />}></Route>}
              <Route path="course/:id" element={<CourseDetail />}></Route>
              <Route path="DanhMuc/:id" element={<ContentDetail />}></Route>
              {user && (
                <Route
                  path="account-info/:taiKhoan"
                  element={<AccoutInfo />}
                ></Route>
              )}
              {user && <Route path="cart" element={<Cart />}></Route>}
              <Route index element={<HomePage />}></Route>
              <Route path="*" element={<Navigate to={""} />}></Route>
            </Route>
          )}
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
