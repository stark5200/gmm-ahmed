import React from 'react'
import Map from '@/components/Map'

const Page: React.FC = () => {
  return (
    <section className="pt-20 lg:pt-28 pb-20 lg:pb-28 bg-emerald-50 flex items-center justify-center">
      <div className="max-w-6xl px-6 lg:px-8">

        <div className="flex justify-center pb-12 rounded-2xl overflow-hidden">
          <Map />
        </div>

        <hr className="mx-auto bg-emerald-600 my-10 h-1.5 rounded opacity-80" />

        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full px-4 lg:w-2/3 xl:w-1/2">
            <h2 className="mb-10 text-3xl font-bold text-emerald-600 sm:text-4xl text-center lg:text-left">
              Welcome to the first capsule hotel in the heart of Zurich!
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/5 xl:w-3/4">
            <p className="mb-8 text-lg leading-relaxed text-emerald-700 text-center lg:text-left">
              Step out of your hotel, stroll along the beautiful Limmat river or take a boat trip on the lake of Zurich. Take in the magnificent snow-capped mountains which form the background to the lake. <br /><br />
              Admire the architecture of the Grossmünster and the beautiful Chagall windows, shop in Zurich’s world class shopping areas, visit the opera house, or just sit in a café by the river and watch the world go by. <br /><br />
              All these activities and many more are available within walking distance of the Green Marmot. Zurich and Switzerland on your doorstep. <br /><br />
              The Green Marmot is situated right at the heart of Zurich, in the old town, the perfect location for visiting the city. Guests are just a few steps away from restaurants, bars, nightclubs and cafés, from the river and lake, from key tourist attractions and from Zurich’s favourite mode of transport, the tram. <br /><br />
              You are also within a few minutes of the city’s two train stations where you can hop on a train to discover the rest of Switzerland. Those beautiful mountains or one of the other picturesque towns and cities in the country. <br /><br />
              So don’t hesitate. Book your capsule in the centre of Zurich and try out the smart city sleep-over. <br /><br />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page