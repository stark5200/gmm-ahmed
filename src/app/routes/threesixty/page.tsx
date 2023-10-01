import React from 'react'

const page = () => {
  return (
    <section className="pt-30 lg:pt-[120px] pb-20 lg:pb-[90px] overflow-hidden bg-emerald-50 ">
        <div className="max-w-6xl p-10 mx-auto">

        <h2 className="mb-8 mt-10 lg:ml-5 text-4xl font-bold text-emerald-600 sm:text-4xl text-center lg:text-left">
          360 View
        </h2>
        <hr className="mx-auto  bg-emerald-600 m-10 h-1.5 rounded opacity-80" />

        <div className="flex justify-center pb-12">
          <iframe width="100%" height="600" title="360 View" src="https://tour-de.metareal.com/apps/player?asset=bb783986-966e-4695-94e9-3d2cef2cec85&starting=tour&autostart=false" frameborder="0" allow="xr-spatial-tracking *; accelerometer *; magnetometer *; gyroscope *" allowvr="yes" allowFullscreen="yes"></iframe>

        </div>

      </div>
    </section>
  )
}

export default page