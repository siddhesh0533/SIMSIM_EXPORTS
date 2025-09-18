import React from 'react'
import video from '../assets/watermarked_preview.mp4'

const Home = () => {
  return (
    <>
      <div className="relative w-full h-[calc(100vh-13vh)] overflow-hidden">
        <video className='absolute top-0 left-0 w-full h-full object-cover' src={video} autoPlay loop muted playsInline />
        <div className="relative z-10 flex items-center justify-center h-full bg-black/40">
          <h1 className="text-black text-7xl font-bold">Welcome to SIMSIM EXPORTS</h1>
        </div>
      </div>

    </>
  )
}

export default Home
