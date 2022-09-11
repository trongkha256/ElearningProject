import React from "react";
const teachers=[
    {
      id: 1,
        hoTen: "Hieu Nguyen"
    },
    {
      id: 2,
        hoTen: "Phuong Huynh"
    },
    {
      id: 3,
        hoTen: "Dan Nguyen"
    },
    {
      id: 4,
        hoTen: "Phuoc Nguyen"
    }
]


const Teacher = () => {

  return (
    <div className="container mx-auto max-w-6xl my-10 ">
      <h1 className="text-center text-3xl font-bold mb-1">
      Giảng viên tiêu biểu
      </h1>
      <p className="text-center text-sm mb-10 ">Đội ngũ giảng viên hàng đầu Việt Nam</p>
        <div className="flex justify-center">
          {teachers.map((teacher) => {
            return (
                <div key={teacher.id}>
                    <div className="mx-10">
                    <img
                    className="rounded-full w-48 h-40  inline-block"
                    src="https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"
                    alt='#'
                  />
                    </div>
                    <div className="text-center font-bold">
                        {teacher.hoTen}
                    </div>
                  
                </div>
                
            );
          })}
        </div>

    </div>
  );
};

export default Teacher;
