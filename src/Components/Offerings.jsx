import React from 'react'
import Title from './Title'
import Card from './Card'
import { clothing, electronics, ready_to_eat, ready_to_make } from '../assets/assets'

const Offerings = () => {
    return (
        <div className='h-screen'>
            <div className='text-center py-10 text-5xl h-2/12'>
                <Title text1={'OUR'} text2={'OFFERINGS'} />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 p-10 h-10/12'>
                <Card image={clothing} title='CLOTHING'/>
                <Card image={ready_to_eat} title='READY TO EAT'/>
                <Card image={ready_to_make} title='READY TO MAKE'/>
                <Card image={electronics} title='ELECTRONICS'/>
            </div>
        </div>
    )
}

export default Offerings
