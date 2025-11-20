import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';


const slidesData = [
  { url: "https://i.ibb.co/b5kHHXrH/Cream-and-Maroon-Minimalist-Modern-Pet-Care-Essentials-Presentation.png" },
  { url: "https://i.ibb.co/bgCQtmh3/4.png" },
  { url: "https://i.ibb.co/Df2YzCZt/8.png" },
  { url: "https://i.ibb.co/0NvKHyf/Cream-and-Maroon-Minimalist-Modern-Pet-Care-Essentials-Presentation-1.png" },
  { url: "https://i.ibb.co/bMwQvRcV/Cream-and-Maroon-Minimalist-Modern-Pet-Care-Essentials-Presentation-2.png" },
];

const SwiperCarouselLogic = () => {
  return (
    <div className="w-full">
      <div className="h-40 sm:h-80 md:h-[440px] lg:h-[560px] bg-white rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200">
        <Swiper
          modules={[Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          effect={'fade'}
          loop={true}
          navigation={true}
          pagination={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="mySwiper w-full h-full"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index} className="relative">
              <img
                src={slide.url}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover block"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperCarouselLogic;
