/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const HomeGallerySwiperComponent = ({ slides }) => {
  return (
    <Swiper
      breakpoints={{
        640: {
          slidesPerView: 2,
          centeredSlides: true,
        },
        480: {
          slidesPerView: 1,
          centeredSlides: false,
        },
      }}
      spaceBetween={20}
      speed={2000}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      navigation={true}
      modules={[Autoplay, Navigation]}
    >
      {slides.map((item) => (
        <>
          <SwiperSlide className="m-0">
            <div
              style={{ backgroundImage: `url(${item.image})` }}
              className="w-full h-full bg-cover bg-center text-white"
            >
              <div className="flex flex-col justify-end h-full p-8">
                <h1 className="text-white font-bold text-5xl my-6">SHST</h1>
                <p className="text-white font-bold text-xl">
                  School of Health Science and Technology
                </p>
              </div>
            </div>
          </SwiperSlide>
        </>
      ))}
    </Swiper>
  );
};

export default HomeGallerySwiperComponent;
