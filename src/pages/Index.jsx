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
    <section className="bg-img h-[100svh] flex items-start md:items-center justify-center pt-[50%] md:pt-0">
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
        className="mySwiper relative w-full h-[230px] md:w-[65vw] md:h-[550px]  object-cover md:my-10 z-50 ">

        {['/videos/IMG_4850.mp4', '/videos/IMG_4734.mp4', '/videos/IMG_4738.mp4'].map((src, index) => {
  const posters = ['/images/AnastasiaS.jpg', '/images/ElenaR.jpg', '/images/MarinaH.jpg'];
  return (
    <SwiperSlide key={index}>
      <div className="flex items-center justify-center w-full h-[230px] md:h-[515px] md:w-[60vw] mx-5">
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

    {/* <div>
      <button><FaExclamation /></button>
    </div> */}

    </section>

  );
};

export default Index;
