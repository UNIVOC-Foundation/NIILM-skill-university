import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { featuresData } from "../../../data/wisepage/featuresData";

const FeatureSwiperComponent = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={0}
      speed={2000}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
    >
      {featuresData.map(({ id, title, description, icon }) => {
        const Icon = icon;

        return (
          <SwiperSlide key={id} className="py-12">
            <div className="flex flex-col text-white items-center">
              <Icon className="w-24 h-24" />
              <span className="text-4xl font-bold my-4">{title}</span>
              <span className="text">{description}</span>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default FeatureSwiperComponent;
