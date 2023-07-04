import React from 'react'
import Image from 'next/image'
import CustomImage from '../components/CustomImage'

const page = () => {
  return (
    <>
      <section className="p-20 bg-accent min-h-screen">
        <div className="m-20 flex justify-center" >
          {/* <CustomImage source="/pictures/13_Kapselhotel.jpg"  /> */}
          <div className="">
            <Image
              src={"/pictures/13_Kapselhotel.jpg"}
              alt=""
              width={150}
              height={150}
              className="w-full rounded-xl border-4 border-slate-700 m-5"
            />
          </div>
          
        </div>
      </section>
    </>
  )
}

export default page