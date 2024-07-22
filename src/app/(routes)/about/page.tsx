'use client'

import React, { useRef } from 'react'
import CustomImage from '@/components/CustomImage'
import Picsdots from '@/components/Picsdots'
import ReactPlayer from 'react-player'

const VIDEO_PATH = 'https://www.youtube.com/watch?v=lD5xcE60pK0&ab_channel=TeleZ%C3%BCriOffiziell'

const Page: React.FC = () => {
  const playerRef = useRef<ReactPlayer>(null);

  return (
    <>
      <section className="pt-16 lg:pt-24 pb-16 lg:pb-24 bg-emerald-50">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-1/2 px-4">
              <div className="mt-10 lg:mt-0">
                {/* <h2 className="mb-6 text-4xl font-extrabold text-emerald-700 sm:text-5xl lg:text-left">
                  About Us
                </h2> */}
                <h3 className="mb-6 text-2xl font-semibold text-emerald-600 sm:text-3xl lg:text-left">
                  Welcome to the first capsule hotel in the heart of Zurich!
                </h3>
                <span className="block mb-4 text-lg font-semibold text-emerald-600">
                  Why Choose Us
                </span>
                <p className="mb-8 text-lg leading-relaxed text-emerald-700 lg:text-left">
                  In many city centres around the world it is becoming increasingly difficult for travellers to find moderately priced, eco-friendly, and cosy accommodation. Zurich, one of Europe’s most attractive cities, is no exception. <br /><br />
                  Now Green Marmot, the first capsule hotel in the heart of Zurich, has created the ideal solution to this problem. Based on a pioneering idea from Japan, Green Marmot offers guests the ideal place to rest their heads in one of the city’s best locations. <br /><br />
                  Guests sleep in comfortable capsules equipped with the finest cotton sheets and use modern, spacious bathrooms. A vast array of bustling cafés, bars, nightclubs, and restaurants are on your doorstep. Just step outside and you are a few metres from the river and Zurich’s famous Grossmünster. The city awaits you.
                </p>
                <button className="px-6 py-3 mt-4 text-lg font-semibold text-white bg-emerald-700 rounded-lg shadow hover:bg-emerald-800">
                  Learn More
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center p-12">
              <Picsdots />
            </div>  
          </div>
        </div>
        <div className="flex justify-center p-12">
          <div className="w-full max-w-3xl rounded-2xl shadow-lg overflow-hidden">
            <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} width="100%" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Page