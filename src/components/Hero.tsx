'use client';

import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (

<div className="hero min-h-screen CustomImage" >

  <div className="hero-overlay bg-opacity-70"></div>

  <div className="hero-content text-center text-emerald-600">
    <div className="max-w-md">
      <h1 className="mb-5 text-6xl font-sans text-emerald-600 font-black">Green Marmot</h1>
      <p className="mb-5 shadow-lg text-xl text-stone-200 font-sans">
        We are delighted to have you as our guest and are committed to providing you with a comfortable and memorable stay.
      </p>
      <Link href="https://hotels.cloudbeds.com/reservation/phlLjw">
        <button className="btn btn-success hover:bg-accent font-verdana">Book Now</button>
      </Link>
    </div>
  </div>

</div>

  )
}

export default Hero