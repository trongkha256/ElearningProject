import React from 'react'

const MyProduct = () => {
  return (
    <div className='mt-7 mx-10 pb-7 bg-[#fbeccd]'>
        <h1 className='text-2xl pt-7 mb-5 font-bold text-center text-[#082346]'>Sản phẩm của chúng tôi</h1>
        <div className='flex justify-center gap-2'>
            <div className='mx-10 w-1/3'>
            <div className='text-center'>
                   <img src="https://storage.googleapis.com/topica-media/5fe9593697b2784d3877eb27/product/619ca3506d05dc00250105f3" alt="#"
                   className='w-32 h-14 mx-auto' /> 
                </div>
                <div className='text-center'>
                    <p className='mt-3.5 text-xl font-bold text-[#082346]'>Đồng hành cùng bạn trên hành trình phát triển bản thân</p>
                </div>
                <div className='text-center'>
                    <p className='text-xs mt-2'>Chúng tôi đem đến thư viện kiến thức và kỹ năng trực tuyến được thiết kế một cách chuyên sâu và linh hoạt để đáp ứng tối đa nhu cầu học tập của bạn.</p>
                </div>
            </div>
            <div className='mx-10 w-1/3'> 
                <div className='text-center'>
                   <img src="https://storage.googleapis.com/topica-media/5fe9593697b2784d3877eb27/product/619ca34a6d05dc00250105f2" alt="#"
                   className='w-32 h-14 mx-auto' /> 
                </div>
                <div className='text-center'>
                    <p className='mt-3.5 text-xl font-bold text-[#082346]'>Mở rộng giới hạn tiếng Anh của bạn</p>
                </div>
                <div className='text-center'>
                    <p className='text-xs mt-2'>Với TOPICA Native, chúng tôi mang đến cho bạn trải nghiệm học tiếng Anh giao tiếp có một không hai.</p>
                </div>
            </div>
            <div className='mx-10 w-1/3'>
            <div className='text-center'>
                   <img src="https://storage.googleapis.com/topica-media/5fe9593697b2784d3877eb27/product/619ca3556d05dc00250105f4" alt="#"
                   className='w-32 h-14 mx-auto' /> 
                </div>
                <div className='text-center'>
                    <p className='mt-3.5 text-xl font-bold text-[#082346]'>Đón đầu tương lai của nền giáo dục Việt Nam tiên tiến</p>
                </div>
                <div className='text-center'>
                    <p className='text-xs mt-2'>Thông qua sự hợp tác với các trường đại học hàng đầu, chúng tôi đem đến cho bạn trải nghiệm học tập tốt nhất với nguồn tri thức chất lượng cao và giảng viên đáng tin cậy trên nền tảng dạy và học sáng tạo của TOPICA.</p>
                </div>
            </div>
               
        </div>
    </div>
  )
}

export default MyProduct