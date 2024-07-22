'use client';
import Image from 'next/image';
import Link from 'next/link';
import background from '/public/pictures/double_capsule1.jpg';

export default function Home() {
  return (
    <div className="relative h-screen">
      <Image
        src={background}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute z-0"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50">
        <h1
          className="text-6xl font-bold text-center sm:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] to-[#ffffff]"
        >
          GREEN MARMOT
        </h1>
        <p className="mt-4 text-2xl font-semibold text-center sm:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#d4f5e0] to-[#ffffff]">
          CAPSULE HOTEL
        </p>
        <Link href="https://hotels.cloudbeds.com/reservation/phlLjw">
          <button className="btn btn-success px-4 py-4 mt-8  text-green-300 bg-transparent border-2 border-white hover:bg-green-300 hover:text-green-600">
            BOOK NOW
          </button>
        </Link>
      </div>
    </div>
  );
}