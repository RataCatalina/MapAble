import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { FaExclamation } from "react-icons/fa";


const Index = () => {
  const videoRefs = useRef([]);

  const handlePlay = (index) => {
  videoRefs.current.forEach((video, i) => {
    if (video && i !== index) {
      video.pause();
      video.currentTime = 0;
      video.load(); 

    }
  });
};

  return (
    <section className='bg-img h-screen'>
    <section className=" flex items-start md:items-center justify-center pt-[50%] md:pt-0 px-0.5 md:px-0">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        observer={true}
        observeParents={true}
        loop={true}
        simulateTouch={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
       
        modules={[Pagination, Navigation]}
        className="mySwiper  relative w-full h-[230px] md:w-[65vw] md:h-[550px]  object-cover md:my-10 z-50 ">

        {['/videos/IMG_4850.mp4', '/videos/IMG_4734.mp4', '/videos/IMG_4738.mp4'].map((src, index) => {
  const posters = ['/images/AnastasiaS.jpg', '/images/ElenaR.jpg', '/images/MarinaH.jpg'];
  return (
    <SwiperSlide key={index} className='flex justify-center'>
      <div className="flex items-center justify-center w-dvw h-[230px] md:h-[515px] md:w-[60vw] ">
        <video
          src={src}
          poster={posters[index]}
          controls
          className="w-full h-full object-cover rounded-sm shadow-md  "
          ref={(el) => (videoRefs.current[index] = el)}
          onPlay={() => handlePlay(index)}/>
      </div>
    </SwiperSlide>
  );
})}
      </Swiper>
    </section>
    
    <div className='relative md:-right-11/12 md:bottom-30 cursor-pointer -right-4/5 pt-18 md:pt-0'>
    <div className="bg-[#57C785] w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-lg shadow-[#57C785] hover:md:w-[104px] hover:md:h-[104px] hover:w-20 hover:h-20 duration-75 " >
      <button className='text-white md:text-4xl text-2xl'><FaExclamation /></button>
    </div>
    </div>
     

  </section>

  );
};

export default Index;
