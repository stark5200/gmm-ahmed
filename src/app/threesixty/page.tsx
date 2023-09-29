import React from 'react'

const page = () => {
  return (
    <div className="bg-emerald-50 p-10">
      <div className="bg-emerald-50 p-10">

        <h2 className="mb-8 mt-10 lg:ml-5 text-4xl font-bold text-emerald-600 sm:text-4xl text-center lg:text-left">
          360 View
        </h2>
        <hr className="mx-auto  bg-emerald-600 m-10 h-1.5 rounded opacity-80" />

        <div>
          <iframe width="100%" height="560" title="360 View" src="https://tour-de.metareal.com/apps/player?asset=bb783986-966e-4695-94e9-3d2cef2cec85&starting=tour&autostart=false" frameborder="0" allow="xr-spatial-tracking *; accelerometer *; magnetometer *; gyroscope *" allowvr="yes" allowfullscreen="yes"></iframe>

        </div>
      </div>
    </div>
  )
}

export default page