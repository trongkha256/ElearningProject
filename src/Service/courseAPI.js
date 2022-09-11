import axiosClient from "./axiosClient";

const courseAPI = {
    getCourseShowing: () => {
        return axiosClient.get("QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01");

    },
    getCourseDetail: (courseId)=>{
        return axiosClient.get(`https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${courseId}`)
    }
}
export default courseAPI;