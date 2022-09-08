import axiosClient from "./axiosClient";

const courseAPI = {
    getCourseShowing: () => {
        return axiosClient.get("QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01");

    },
}
export default courseAPI;