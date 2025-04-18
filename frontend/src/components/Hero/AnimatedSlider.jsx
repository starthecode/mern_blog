import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import React from 'react';
import { LeftCard } from './LeftCard';
// import imgG from '../../assets/imgs/gradient_dark.png';

import { Navigation, Pagination } from 'swiper/modules';
import MarqueeBanner from '../MarqueeBanner';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';

export default function AnimatedSlider({ data }) {
  return (
    <section
      className="m-auto relative sm:py-0 md:py-0 lg:pt-24 pb-3 overflow-hidden z-10"
      style={{
        backgroundImage: `url(/assets/uploads/back-image.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="ml-auto mr-auto h-full max-w-full px-5 sm:px-5 md:px-24 2xl:px-56">
        <div className="relative">
          <Swiper
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            pagination={true}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {data.map((item, index) => (
              <SwiperSlide
                className={`keen-slider__slide item ${
                  item?.addVideo ? 'mt-28' : ''
                } p-10 border-t border-t-white`}
                key={index}
                style={{
                  backgroundImage: `url(${item?.sliderImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="grid h-full items-start w-full max-w-3xl relative z-20">
                  <div className="flex h-full flex-col items-center col-span-2 justify-center sm:py-0 md:py-0 lg:mt-0 lg:items-start">
                    <LeftCard item={item} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Prev/Next Buttons */}
          <div className="swiper_buttons custom-prev  absolute top-1/2 -left-16 transform -translate-y-1/2 z-30 cursor-pointer">
            <button className="text-white bg-junglegreen-500 px-3 py-2 rounded-full">
              <IoMdArrowRoundBack size={15} />
            </button>
          </div>
          <div className="swiper_buttons custom-next absolute top-1/2 -right-16 transform -translate-y-1/2 z-30 cursor-pointer">
            <button className="text-white bg-junglegreen-500 px-3 py-2 rounded-full">
              <IoMdArrowRoundForward size={15} />
            </button>
          </div>
        </div>
      </div>
      <MarqueeBanner />
    </section>
  );
}
