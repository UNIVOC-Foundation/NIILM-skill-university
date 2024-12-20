import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import { campusData } from "../../../data/homepage/campusData";

const HeroSwiperComponent = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      speed={2000}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
    >
      {campusData.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="w-full h-[28rem]">
            <img src={item.imageUrl} className="object-cover w-full h-full" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSwiperComponent;
