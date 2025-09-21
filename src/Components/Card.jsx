import React from 'react'

const Card = ({ image, title }) => {
    return (
        <div className='relative border border-gray-300 rounded-xl shadow-md flex items-center justify-center bg-white cursor-pointer overflow-hidden transition-transform duration-300 ease-in-out
      hover:scale-105 hover:shadow-2xl'>

            <img src={image} alt="offering" className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
                <h2 className="text-white text-4xl font-semibold">{title}</h2>
            </div>

        </div>
    )
}

export default Card
