import React , { useRef } from 'react'
import ReactPlayer from "react-player";
import Image from 'next/image'
import CustomImage from '../components/CustomImage'
import Carousels from '../components/Carousels'
const VIDEO_PATH = 'https://www.youtube.com/watch?v=IUskDZXw_sw&t=15s&ab_channel=GreenMarmotCapsuleHotel'

const page = () => {
  return (
    <div className="bg-emerald-50 p-10">
      <div className="bg-emerald-50 p-10">

      <h2 className="mb-8 mt-10 lg:ml-5 text-4xl font-bold text-emerald-600 sm:text-4xl text-center lg:text-left">
            Capsules
          </h2>
        <Carousels/>
      <hr className="mx-auto  bg-emerald-600 m-10 h-1.5 rounded opacity-80" />

      <h2 className="m-10 pt-10 text-3xl font-bold text-emerald-600 sm:text-4xl text-center lg:text-left">
      Capsules are the new and smart way to sleep in a city. Based on a pioneering idea from Japan, they are the eco-friendly answer to overcrowded, expensive city centres. <br /> <br />
                </h2>

      <p className="mb-8 pt-10 text-xl font-bold leading-8 text-emerald-600 text-center lg:text-left">

Climb in to your own cosy and private capsule, snuggle down under sheets made of finest organic Egyptian cotton, on modern, thick mattresses. Sleep deeply and comfortably just like a marmot in his den. <br /> <br />

The hotel offers both single and double bed capsules. The singles measure 212cm x 111cm x 109cm (length/ width/ height) and the doubles 212cm x 179cm x 109cm. They are all built of eco-friendly natural wood. The bedding in the capsules is of the highest quality.<br /> <br />

All capsules have fast Wi-Fi, lighting, a mirror, a folding table and are air-conditioned. There are three separate areas: one for women, one for men and a shared area for doubles or groups. Capsules for people with special needs are also available.<br /> <br />

The capsule hotel concept is the answer for the modern, green traveller on a low to moderate budget. Guests are in the very centre of the city, with easy, immediate access to all the sights, restaurants, nightlife and culture that Zurich has to offer.<br /> <br />

At the same time, by sleeping overnight in the comfortable capsules, guests pay less than in a regular hotel and are sure that they are reducing their carbon footprint.<br /> <br />

There are spacious, modern, women’s and men’s bathrooms with modern showers and amenities and guests can store their belongings in central, easily accessible lockers in the hotel.<br /> <br />

As the hotel is surrounded by bars, restaurants and cafés there are none in the hotel itself. Just step outside and take your pick of all that Zurich has to offer.<br /> <br />
                </p>
      </div>

      <div>
        <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
      </div>

    </div>
  )
}

export default page

