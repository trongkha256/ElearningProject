import axiosClient from "./axiosClient";

const contentAPI = {
    getContentShowing: () => {
        return axiosClient.get("QuanLyKhoaHoc/LayDanhMucKhoaHoc");

    },
    getCourseContent: (contentId)=>{
        console.log(contentId)
        return axiosClient.get(`QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${contentId}&MaNhom=GP01`);
    }
}
export default contentAPI;