import cool from "@/assets/icons/cool.png";
import cool2 from "@/assets/icons/cool2.png";
import cool3 from "@/assets/icons/cool3.png";
import cool4 from "@/assets/icons/cool4.png";
import cool5 from "@/assets/icons/cool5.png";
import bg_img from "@/assets/icons/slider-back.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const slides = [
  {
    image: cool,
    text: "Этот ПК создан для тех, кто хочет максимум FPS без компромиссов в качестве картинки.",
  },
  {
    image: cool2,
    text: "Идеальный баланс производительности и тишины — для игр, стриминга и работы.",
  },
  {
    image: cool3,
    text: "Продуманная сборка с запасом по мощности, чтобы апгрейд был не обязателен ещё долгие годы.",
  },
  {
    image: cool4,
    text: "Яркий дизайн, чистая кабельная сборка и стабильность под любыми нагрузками.",
  },
  {
    image: cool5,
    text: "Идеальный баланс производительности и тишины — для игр, стриминга и работы.",
  },
];

export const Slider = () => {
  return (
    <section className="w-full bg-neutral-900 py-10">
      <div className="w-full max-w-7xl mx-auto">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 5000 }}
          loop
          modules={[Navigation, Autoplay]}
          className="w-full mx-auto"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div
                className="w-full rounded-3xl overflow-hidden relative min-h-[260px] md:min-h-[320px] lg:min-h-[360px] flex items-center"
                style={{
                  backgroundImage: `url(${bg_img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 w-full flex items-center justify-between px-6 md:px-12 py-8 gap-6">
                  <div className="max-w-xl text-white">
                    <p className="text-lg md:text-2xl font-semibold leading-snug">
                      {slide.text}
                    </p>
                  </div>

                  <div className="flex-1 flex justify-end">
                    <img
                      src={slide.image}
                      alt={`pc-${i}`}
                      className="max-h-[260px] md:max-h-[320px] lg:max-h-[340px] object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
