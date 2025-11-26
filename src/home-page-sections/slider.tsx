import slider6 from "@/assets/icons/slider6.png";
import slider5 from "@/assets/icons/slider5.png";
import slider4 from "@/assets/icons/slider4.png";
import slider3 from "@/assets/icons/slider3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const images = [slider3, slider4, slider5, slider6];

export const Slider = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10">
      <div className="w-full max-w-7xl mx-auto">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 4000 }}
          loop={true}
          modules={[Navigation, Autoplay]}
          className="w-full mx-auto"
        >
          {images.map((src, i) => (
            <SwiperSlide
              key={i}
              className="flex items-center justify-center w-full"
            >
              <img
                src={src}
                alt={`photo${i}`}
                className="rounded-2xl w-full max-h-[512px] object-contain"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
