import axiosClient from "./axiosClient";

const courseAPI = {
    getCourseShowing: () => {
        return axiosClient.get("QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01");

    },
    deleteCourse: (maKhoaHoc) => {
        return axiosClient.delete("QuanLyKhoaHoc/XoaKhoaHoc", {
            params: { maKhoaHoc }
        })
    },
    createCourse: (courseData) => {
        return axiosClient.post("QuanLyKhoaHoc/ThemKhoaHoc", courseData)
    },
    updateCourse: (courseData) => {
        return axiosClient.put("QuanLyKhoaHoc/CapNhatKhoaHoc", courseData)
    }
}
export default courseAPI;