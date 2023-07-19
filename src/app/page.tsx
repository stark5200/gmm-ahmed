import Image from 'next/image'
import Hero from './components/Hero'
import Carousels from './components/Carousels';

export default function Home() {
  return (
    <div className="bg-emerald-50">
      <Hero />
      <Carousels />
    </div>
  )
}
