import React from 'react'
import ContactForm from '../components/contact'

const page = () => {
  return (
 <>
  <section className="pt-30 lg:pt-[120px] pb-20 lg:pb-[90px] overflow-hidden bg-emerald-50 flex items-center justify-center">
    
      <div className="max-w-6xl p-10">
      <h2 className="mb-10 text-4xl font-bold text-emerald-600 sm:text-4xl text-center lg:text-left">
          Contact Us
        </h2>
      
        <p className="m-10 pt-10 text-l font-bold leading-8 text-emerald-600 text-center lg:text-left">

        We are happy to help you with any questions you might have. <br /> <br />

        email us directly at info@greenmarmot.com. <br /> 

          call us at Tel +41 44 500 76 80

                </p>
              
              <ContactForm />
            </div>
      </section>
    </>
  )
}

export default page

