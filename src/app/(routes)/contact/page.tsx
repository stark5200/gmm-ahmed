import React from 'react'
import ContactForm from '@/components/contact'

const Page: React.FC = () => {
  return (
    <section className="pt-20 lg:pt-28 pb-20 lg:pb-28 bg-emerald-50 flex items-center justify-center ">
      <div className="max-w-6xl px-6 lg:px-8">
        <p className="mb-10 leading-relaxed text-emerald-700 text-center lg:text-left font-mono">
          We are happy to help you with any questions you might have. <br /><br />
          Email us directly at <a href="mailto:info@greenmarmot.com" className="text-emerald-600 underline">info@greenmarmot.com</a>.<br /><br />
          Call us at Tel <a href="tel:+41445007680" className="text-emerald-600 underline">+41 44 500 76 80</a>.
        </p>      
        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Page