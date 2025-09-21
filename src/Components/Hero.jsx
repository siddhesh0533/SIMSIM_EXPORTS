import React from 'react'
import { video } from '../assets/assets'

const Hero = () => {
    return (
        <div className='h-[calc(100vh-15vh)] w-full flex flex-col'>
            {/* Section Container */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-20 py-10 bg-white">
                {/* Left Side - Heading */}
                <div className="md:w-2/3">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#0c1f30] leading-tight">
                        Connecting Businesses<br />Across Continents
                    </h1>
                </div>

                {/* Right Side - Tagline */}
                <div className="md:w-1/3 mt-6 md:mt-0 text-right">
                    <p className="text-lg md:text-xl font-semibold text-[#0c1f30]">
                        Connecting Fashion &<br /> Flavors Across Borders
                    </p>
                </div>
            </div>

            {/* Video Section */}
            <div className="relative w-full flex-1 overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>
        </div>
    )
}

export default Hero
