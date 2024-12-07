import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#232323] text-white flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 md:p-6">
        <span className="text-white/60 text-lg md:text-xl">Sahilwise</span>
        <div className="flex gap-4 md:gap-6">
          <a href="#" className="text-white/60 hover:text-white transition-colors">Home</a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">Apps</a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-start relative px-4 md:px-8">
        {/* Web Designer Tag */}
        <div className="absolute left-4 md:left-1/4 top-20 md:top-1/4 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
          <div className="relative inline-flex items-center">
            <span className="bg-[#FF5C38] text-black px-3 py-1.5 md:px-4 md:py-2 rounded-md text-sm md:text-base font-medium">
              Software Engineer
            </span>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              className="absolute -right-5 md:-right-6 text-[#FF5C38]"
            >
              <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Avatar */}
        <div className="mb-12 md:mb-16 mt-24 md:mt-0">
          <div className="w-24 h-24  md:w-28 md:h-28 border-2 p-2 border-[#3D3D3D] rounded-lg">
            <div className="w-full h-full bg-[#2C2C2C] rounded-lg flex items-center justify-center text-sm md:text-base">
              <Image
                src={'/sahilwise.png'}
                alt='sahilwise'
                width={130}
                height={130}
                className='rounded-lg'

              />
            </div>
          </div>
        </div>

        {/* Greeting */}
        <div className="absolute right-4 md:right-1/4 top-32 md:top-1/3 md:transform md:translate-x-1/2 md:-translate-y-1/2">
          <div className="relative">
            <div className="bg-[#999] text-[#000000] px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-md font-medium md:text-base">
              Hi, I&apos;m Sahilwise
            </div>
            <div className="absolute -top-1 right-3 w-2 h-2 bg-[#999] transform rotate-45" />
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center px-4 md:px-0">
          <h1 className="text-4xl sm:text-3xl md:text-5xl font-bold mb-2 md:mb-4">
            Digital Designer
          </h1>
          <div className="flex items-center justify-center text-3xl sm:text-4xl md:text-5xl">
            <span className="text-white/30 mr-2 font-bold md:mr-4">and</span>
            <span className="font-bold text-white/60">Creative Developer</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="w-full max-w-5xl flex justify-center text-white/40 mt-8 md:mt-16 text-lg">
          <div className='px-5'>
            <p className="mb-1 md:mb-2 text-center text-[#474747]">Contact</p>
            <a href="mailto:hey@sahilwise.me" className="hover:text-white text-[#808080] text-center transition-colors">
              hey@sahilwise.com
            </a>
          </div>
          <div className="px-5">
            <p className="mb-1 md:mb-2 text-center text-[#474747]">Location</p>
            <a target='_blank' href="https://maps.app.goo.gl/6u9qComLkuGXr3S18" className="hover:text-white text-[#808080] text-center transition-colors">
            Kolkata / Remote
            </a>
            </div>
        </div>
      </main>
    </div>
  )
}

