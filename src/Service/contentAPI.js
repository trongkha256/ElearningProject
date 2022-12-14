import axiosClient from "./axiosClient";

const contentAPI = {
    getContentShowing: () => {
        return axiosClient.get("QuanLyKhoaHoc/LayDanhMucKhoaHoc");

    },
    getCourseContent: (contentId)=>{
        return axiosClient.get(`QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${contentId}&MaNhom=GP01`);
    }
}
export default contentAPI;