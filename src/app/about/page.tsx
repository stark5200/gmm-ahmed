import React from 'react'
import CustomImage from '../components/CustomImage'
import Picsdots from '../components/Picsdots'

const page = () => {
  return (
    <>
    <section className="pt-10 lg:pt-[120px] pb-12 lg:pb-[90px] overflow-hidden bg-emerald-50">
      
        <div className="container pt-10 max-w-6xl mx-auto">
  
          <div className="flex flex-wrap items-center justify-between mx-4">

            
            
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <h2 className="mb-8 mt-10 lg:ml-5 text-4xl font-bold text-emerald-600 sm:text-5xl lg:text-left">
                  About Us
                </h2>
                <h3 className="mb-8 text-2xl font-bold text-emerald-600 sm:text-4xl">
                  Welcome to the first capsule hotel in the heart of Zurich!
                </h3>
                <span className="block mb-2 text-lg font-semibold text-emerald-600">
                  Why Choose Us
                </span>
                <p className="mb-8 pt-10 text-xl font-bold leading-8 text-emerald-600 text-center lg:text-left">
                  In many city centres around the world it is becoming increasingly difficult for travellers to find moderately priced, eco-friendly and cosy accommodation. Zurich, one of Europe’s most attractive cities, is no exception. <br /> <br />

                  Now Green Marmot, the first capsule hotel in the heart of Zurich, has created the ideal solution to this problem. Based on a pioneering idea from Japan, Green Marmot offers guests the ideal place to rest their heads in one of the city’s best locations. <br /> <br />

                  Guests sleep in comfortable capsules equipped with finest cotton sheets and use modern, spacious bathrooms. A vast array of bustling cafés, bars, nightclubs and restaurants are on your doorstep. Just step outside and you are a few metres from the river and Zurich’s famous Grossmünster. The city awaits you <br /> <br />
                </p>
                <a
                  href="/#"
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-normal text-center text-emerald-600 rounded-lg bg-emerald-50 hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  Book Now
                </a>
              </div>
            </div>

            <Picsdots />
          </div>
        </div>
      </section>
    </>
  )
}

export default page