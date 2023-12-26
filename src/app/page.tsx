/*import Image from 'next/image'*/
import Hero from '@/components/Hero'
import Carousels from '@/components/Carousels';

export default function Home() {
  return (
    <div className="bg-emerald-50 items-center justify-center">
      <Hero />
      <div className="max-w-6xl p-5 flex items-center justify-center mx-auto">
      
        <Carousels />
      </div>
    </div>
  )
}
