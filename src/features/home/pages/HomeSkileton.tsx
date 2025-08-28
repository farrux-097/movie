import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HomeSkeleton = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={"auto"}
      className="mySwiper"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <SwiperSlide
          key={i}
          className="w-[240px] sm:w-[320px] md:w-[420px] lg:w-[540px]"
        >
          <div className="animate-pulse">
            <div className="w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[520px] bg-[#282828] rounded-2xl lg:rounded-[40px]"></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default memo(HomeSkeleton);
