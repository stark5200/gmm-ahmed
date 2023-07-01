import React from 'react'

const Carousels = () => {
  return (
    <div className='bg-white'>
    <div className="container mx-auto ">
      <div className="grid-cols-3 p-20 space-y-2 bg-white lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
        <div className="w-full rounded">
          <img src="https://greenmarmot.com/images/capsules/2_Kapselhotel.jpg"
            alt="image" />
        </div>
        <div className="w-full col-span-2 row-span-2 rounded">
          <img src="https://greenmarmot.com/images/capsules/1_Kapselhotel.jpg"
            alt="image" />
        </div>
        <div className="w-full rounded">
          <img src="https://greenmarmot.com/images/capsules/3_Kapselhotel.jpg"
            alt="image" />
        </div>
        <div className="w-full rounded">
          <img src="https://greenmarmot.com/images/capsules/62_Kapselhotel.jpg"
            alt="image" />
        </div>
        <div className="w-full rounded">
          <img src="https://greenmarmot.com/images/capsules/61_Kapselhotel.jpg"
            alt="image" />
        </div>
        <div className="w-full rounded">
          <img src="https://greenmarmot.com/images/capsules/10_Kapselhotel.jpg"
            alt="image" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Carousels