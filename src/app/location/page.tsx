import React from 'react'
import Map from '../components/Map'

const page = () => {
  return (
    <>
      <section className="pt-30 lg:pt-[120px] pb-20 lg:pb-[90px] overflow-hidden bg-accent flex items-center justify-center">

        <div className="container">

          <h2 className="mb-8 text-4xl font-bold text-dark sm:text-4xl p-10">
            Location
          </h2>

          <Map />

          <br />

          <div className="flex flex-wrap items-center justify-between ">    
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-20 lg:mt-10">

                
                <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl">
                  Welcome to the first capsule hotel in the heart of Zurich!
                </h2>
                <span className="block mb-2 text-lg font-semibold text-accent">
                  Why Choose Us
                </span>

                <p className="mb-8 text-base text-body-color">
                  Step out of your hotel, stroll along the beautiful Limmat river or take a boat trip on the lake of Zurich. Take in the magnificent snow-capped      mountains which form the background to the lake. Admire the architecture of the Grossmünster and the beautiful Chagall windows, shop in Zurich’s world class shopping areas, visit the opera house, or just sit in a café by the river and watch the world go by. All these activities and many more are available within walking distance of the Green Marmot. Zurich and Switzerland on your doorstep.

                  The Green Marmot is situated right at the heart of Zurich, in the old town, the perfect location for visiting the city. Guests are just a few steps away from restaurants, bars, nightclubs and cafés, from the river and lake, from key tourist attractions and from Zurich’s favourite mode of transport, the tram.

                  You are also within a few minutes of the city’s two train stations where you can hop on a train to discover the rest of Switzerland. Those beautiful mountains or one of the other picturesque towns and cities in the country.

                  So don’t hesitate. Book your capsule in the centre of Zurich and try out the smart city sleep-over.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page