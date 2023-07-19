import React from 'react'
import ContactForm from '../components/contact'

const page = () => {
  return (
 <>
  <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] overflow-hidden bg-emerald-50">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center p-6 -mx-3 sm:-mx-4">
                  
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page