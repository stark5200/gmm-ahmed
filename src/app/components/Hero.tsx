import React from 'react'

const Hero = () => {
  return (

<div className="hero min-h-screen custom-img" >

  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-6xl font-sans text-accent font-black">Green Marmot</h1>
      <p className="mb-5 shadow-lg text-white font-sans">We are delighted to have you as our guest and are committed to providing you with a comfortable and memorable stay.</p>
      <button className="btn btn-accent font-sans">Book Now</button>
    </div>
  </div>
</div>

  )
}

export default Hero