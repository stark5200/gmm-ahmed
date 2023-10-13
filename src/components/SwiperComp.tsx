'use client'
//Sliding pattern

import Image from 'next/image'

// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import { images } from "@/lib/images"

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperComp = () => {

  return (
    <section className='py-12'>
      <div className='container'>
        <Swiper
          navigation
          pagination={{ type: 'fraction' }}
          modules={[Navigation, Pagination]}
          onSwiper={swiper => console.log(swiper)}
          className='h-96 w-full rounded-lg'
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center justify-center'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className='block h-full w-full object-cover'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <p> Slides </p>
      </div>
    </section>
  )
}

export default SwiperComp