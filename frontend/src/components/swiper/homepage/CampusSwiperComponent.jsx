import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import { campusData } from "../../../data/homepage/campusData";

const CampusSwiperComponent = () => {
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
      navigation={true}
      modules={[Autoplay, Navigation]}
    >
      {campusData.map((item) => (
        <SwiperSlide key={item.id}>
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${item.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col h-full justify-end text-white p-16">
              <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
              <p className="text-lg font-semibold w-3/5">{item.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CampusSwiperComponent;
