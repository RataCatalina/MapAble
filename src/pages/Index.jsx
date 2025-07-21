import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


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
    <section className="bg-img h-screen flex items-center justify-center">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        observer={true}
        observeParents={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-[60vw] h-[550px] object-cover my-10 z-50"
      >
        {['/videos/IMG_4850.mp4', '/videos/IMG_4734.mp4', '/videos/IMG_4738.mp4'].map((src, index) => {
  const posters = ['/images/AnastasiaS.jpg', '/images/ElenaR.jpg', '/images/MarinaH.jpg'];
  return (
    <SwiperSlide key={index}>
      <div className="flex items-center justify-center h-[500px] w-[60vw]">
        <video
          src={src}
          poster={posters[index]}
          controls
          className="w-full h-full object-cover rounded-sm shadow-md"
          ref={(el) => (videoRefs.current[index] = el)}
          onPlay={() => handlePlay(index)}
        />
      </div>
    </SwiperSlide>
  );
})}
      </Swiper>
    </section>
  );
};

export default Index;
