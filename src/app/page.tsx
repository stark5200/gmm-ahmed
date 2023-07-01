import Image from 'next/image'
import Hero from './components/Hero'
import Carousels from './components/Carousels';

export default function Home() {
  return (
    <div>
      <Hero />
      <Carousels />
    </div>
  )
}
