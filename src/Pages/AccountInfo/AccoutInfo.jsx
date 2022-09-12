import { Table } from "flowbite-react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LoadingPage from "../../Components/LoadingPage/LoadingPage";
import { getAcountDetail } from "../../Slices/acountDetail";

export const AccoutInfo = () => {
  const { taiKhoan } = useParams();
  console.log(taiKhoan);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAcountDetail(taiKhoan));
    //eslint-disable-next-line
  }, []);
  const { user, isLoading ,error} = useSelector((state) => state.acountDetail);
  if (isLoading || user==null) {
    return <LoadingPage />;
  }
  console.log(user,error);
  return (
    <div className="mt-28 mx-10 container mb-10  max-w-6xl bg-[#ffffff]">
      <div className="flex justify-start pt-5 pb-5">
        <div className="ml-20">
          <img src="https://i.pravatar.cc/32" alt="avt" className="w-80 h-80" />
        </div>
        <div className="flex flex-col ml-5">
          <div className="text-2xl font-bold text-[#082346] ">
            {user.hoTen}
          </div>
          <div className="text-red-700 mt-5">
            <p className="inline-block font-bold text-[#082346] mr-2">
              Email:{" "}
            </p>
            {user.email}
          </div>
          <div className="text-red-700 mt-5">
            <p className="inline-block font-bold text-[#082346] mr-2">
              Tên tài khoản:{" "}
            </p>
            {user.taiKhoan}
          </div>
          <div className="text-red-700 mt-5">
            <p className="inline-block font-bold text-[#082346] mr-2">
              Số điện thoại:{" "}
            </p>
            {user.soDT}
          </div>
        </div>

        <div></div>
      </div>
      <div className="mt-5 ml-20">
        <h1 className="text-2xl font-bold text-[#082346] ">
          Chi tiết khóa học ghi danh
        </h1>
      </div>
      <div className="mt-5 mb-10 pb-10 ml-20">
        <Table>
          <Table.Head>
            <Table.HeadCell>
              Mã khóa học

            </Table.HeadCell>
            <Table.HeadCell>
              Tên khóa học
            </Table.HeadCell>
            <Table.HeadCell>
              Ngày tạo
            </Table.HeadCell>
            <Table.HeadCell>
              Price
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {user.chiTietKhoaHocGhiDanh.map((course) =>
              <Table.Row key={course.maKhoaHoc} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {course.maKhoaHoc}
                </Table.Cell>
                <Table.Cell>
                  {course.tenKhoaHoc}
                </Table.Cell>
                <Table.Cell>
                  {course.ngayTao}
                </Table.Cell>
                <Table.Cell>
                  $2
                </Table.Cell>

              </Table.Row>
            )}

          </Table.Body>
        </Table>
      </div>
    </div>
  );
};
