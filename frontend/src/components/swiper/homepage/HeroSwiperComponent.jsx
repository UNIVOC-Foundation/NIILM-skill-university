/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";

const HeroSwiperComponent = ({ slides }) => {
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
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="w-full h-full"
    >
      {slides.map((item, index) => (
        <SwiperSlide
          key={index}
          className="w-full h-[50vh] md:h-[70vh] lg:h-[90vh]" // Adjust height for responsiveness
        >
          <img
            src={item.image}
            alt={item.alt || "Slide Image"}
            className="w-full h-full object-cover" // Ensure it scales proportionally
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSwiperComponent;
