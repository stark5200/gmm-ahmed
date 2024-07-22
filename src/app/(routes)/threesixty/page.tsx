import React from 'react'

const page = () => {
  return (
    <section className="pt-30 lg:pt-[120px] pb-20 lg:pb-[90px] overflow-hidden bg-emerald-50 ">
        <div className="max-w-6xl p-10 mx-auto">
        <div className="flex justify-center pb-12">
          <iframe width="100%" height="600" title="360 View" src="https://tour-de.metareal.com/apps/player?asset=bb783986-966e-4695-94e9-3d2cef2cec85&starting=tour&autostart=false" frameBorder="0" allow="xr-spatial-tracking *; accelerometer *; magnetometer *; gyroscope *" allowFullScreen={true} ></iframe>

        </div>
        {/* allowvr="yes", frame{border/Border} deprecated or something  */}
      </div>
    </section>
  )
}

export default page