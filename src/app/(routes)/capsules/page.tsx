'use client'

import React, { useRef } from 'react'
import ReactPlayer from "react-player";
import Carousels from '@/components/Carousels'
import SwiperComp from '@/components/SwiperComp'

const VIDEO_PATH = 'https://www.youtube.com/watch?v=IUskDZXw_sw&t=15s&ab_channel=GreenMarmotCapsuleHotel'

const Page: React.FC = () => {
  const playerRef = useRef<ReactPlayer>(null);

  return (
    <section className="pt-20 lg:pt-28 pb-20 lg:pb-28 bg-emerald-50 flex items-center justify-center">
      <div className="max-w-6xl px-6 lg:px-8">
        {/* <h3 className="mb-8 mt-10 text-3xl font-extrabold text-emerald-700 sm:text-5xl text-center lg:text-left">
          Capsules
        </h3> */}

       

        <Carousels />

        <hr className="mx-auto bg-emerald-600 my-10 h-1.5 rounded opacity-80" />

        <SwiperComp />

        <hr className="mx-auto bg-emerald-600 my-10 h-1.5 rounded opacity-80" />
        
        <h3 className="relative mb-10 text-2xl font-semibold text-emerald-600 sm:text-3xl text-center lg:text-left lg:max-w-2xl lg:ml-0 mx-auto">
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-emerald-300 rounded-full"></span>
          Capsules are the new and smart way to sleep in a city. Based on a pioneering idea from Japan, they are the eco-friendly answer to overcrowded, expensive city centres.
        </h3>

        <p className="mb-10 text-lg leading-relaxed text-emerald-700 lg:text-left">
          Climb into your own cosy and private capsule, snuggle down under sheets made of the finest organic Egyptian cotton, on modern, thick mattresses. Sleep deeply and comfortably just like a marmot in his den.
          <br /><br />
          The hotel offers both single and double bed capsules. The singles measure 212cm x 111cm x 109cm (length/width/height) and the doubles 212cm x 179cm x 109cm. They are all built of eco-friendly natural wood. The bedding in the capsules is of the highest quality.
          <br /><br />
          All capsules have fast Wi-Fi, lighting, a mirror, a folding table and are air-conditioned. There are three separate areas: one for women, one for men and a shared area for doubles or groups. Capsules for people with special needs are also available.
          <br /><br />
          The capsule hotel concept is the answer for the modern, green traveller on a low to moderate budget. Guests are in the very centre of the city, with easy, immediate access to all the sights, restaurants, nightlife and culture that Zurich has to offer.
          <br /><br />
          At the same time, by sleeping overnight in the comfortable capsules, guests pay less than in a regular hotel and are sure that they are reducing their carbon footprint.
          <br /><br />
          There are spacious, modern, women’s and men’s bathrooms with modern showers and amenities and guests can store their belongings in central, easily accessible lockers in the hotel.
          <br /><br />
          As the hotel is surrounded by bars, restaurants and cafés there are none in the hotel itself. Just step outside and take your pick of all that Zurich has to offer.
        </p>

        <div className="flex justify-center pb-12 rounded-2xl">
          <div className="w-full max-w-3xl rounded-2xl shadow-lg overflow-hidden">
            <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} width="100%" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page