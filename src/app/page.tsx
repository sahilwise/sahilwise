'use client'
import Image from 'next/image'
import Footer from "./components/Footer";
import { MousePointer2 } from 'lucide-react';
import { LogoScroll } from './components/logo-scroll';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#232323] text-white flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 md:p-6">
        <span className="text-white/60 text-lg md:text-xl">Sahilwise</span>
        <div className="flex gap-4 md:gap-6">
          <a href="#" className="text-white/60 hover:text-white/75 transition-colors">Home</a>
          <a href="#" className="text-white/60 hover:text-white/75 transition-colors">Apps</a>
          <a href="#" className="text-white/60 hover:text-white/75 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-start relative px-4 md:px-8">


        {/* Web Designer Tag */}

        <div className="absolute left-4 md:left-1/4 sm:top-20 top-96 md:top-1/4 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
          <div className="relative">
            <div className="bg-gradient-to-bl from-[#FE4E28] via-[#FE5D2B] to-[#e76446] text-[#fff] px-3 py-1.5 md:px-4 md:py-2 rounded-lg sm:text-md text-xs font-medium md:text-base">
              Software Engineer
            </div>
            <div className="absolute sm:-top-7 sm:left-48 -top-5 left-36 transform h-2 w-2 rotate-90">
              <MousePointer2 size={22} color='#FE4E28' fill="#FE4E28" />
            </div>
          </div>
        </div>

        {/* Avatar */}
        <div className="mb-12 md:mb-16 sm:mt-24 mt-4 md:mt-0">
          <div className="w-28 h-28  sm:w-28 sm:h-28 border-4 shadow-2xl border-[#3D3D3D] rounded-full">
            <div className="w-full h-full bg-[#2C2C2C] rounded-full flex items-center justify-center text-sm md:text-base">
              <Image
                src={'/sahilwise.png'}
                alt='sahilwise'
                width={450}
                height={450}
                className='rounded-full'

              />
            </div>
          </div>
        </div>

        {/* Greeting */}
        <div className="absolute right-4 md:right-1/4 top-32 md:top-1/3 md:transform md:translate-x-1/2 md:-translate-y-1/2">
          <div className="relative">
            <div className="bg-gradient-to-tl from-[#A3A3A3] via-[#A3A3A3] to-[#A3A3A3] text-[#fff] px-3 py-1.5 md:px-4 md:py-2 rounded-lg sm:text-md text-xs font-medium md:text-base">
              Hi, I&apos;m Sahilwise
            </div>
            <div className="absolute sm:-top-6 -top-5 sm:-left-8 -left-5 transform h-2 w-2 -rotate-75">
              <MousePointer2 size={22} color='#A3A3A3' fill="#A3A3A3" />
            </div>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center px-4 md:px-0 bg-gradient-to-tl from-[#4E4E4E] via-[#fff] to-[#4E4E4E] bg-clip-text text-transparent">
          <h1 className="text-2xl tracking-tight sm:text-5xl font-normal mb-2 md:mb-4">
            Digital Designer
          </h1>
          <div className="flex items-center justify-center text-2xl sm:text-5xl">
            <span className="mr-2 font-normal md:mr-2">and</span>
            <span className="font-normal">Creative Developer</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="w-full max-w-5xl flex justify-center text-white/40 mt-8 md:mt-16 text-lg">
          {/* <div className='px-5'>
            <p className="mb-1 md:mb-2 text-center text-[#474747]">Location</p>
            <a href="mailto:hey@sahilwise.me" className="hover:text-white text-[#808080] text-center transition-colors">
              Kolkata / Remote
            </a>
          </div> */}
          <div className="px-5">
            <p className="mb-1 md:mb-2 text-center text-[#474747]">Contact</p>
            <a target='_blank' href="mailto:hey@sahilwise.com" className="hover:text-white text-[#808080] text-center transition-colors">
              hey@sahilwise.com
            </a>
          </div>
        </div>


        <div className="flex flex-col sm:mt-16 mt-20 items-center justify-center">
          <div className="w-full sm:max-w-4xl max-w-sm px-4 md:px-6">
            <LogoScroll />
          </div>
        </div>


      </main>
      <Footer homepage={true} />
    </div>
  )
}

