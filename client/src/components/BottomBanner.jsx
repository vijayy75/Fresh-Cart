import React from 'react'
import { assets, features } from '../assets/assets'

const BottomBanner = () => {
  return (
    <div className='relative mt-24'>
      <img src={assets.bottom_banner_image2} alt="banner" className='rounded-md w-full hidden md:block'/>
      <img src={assets.bottom_banner_image_sm2} alt="banner" className='rounded-md w-full md:hidden'/>

      <div className='absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24'>
        <div>
            <h1 className='text-white text-2xl md:text-3xl font-semibold text-primary mb-6'>Why We Are the Best?</h1>
            {features.map((feature, index)=>(
                <div key={index} className='flex items-center gap-4 mt-2'>
                    <img src={feature.icon} alt={feature.title} className='md:w-11 w-9' />
                    <div>
                       <h3 className=' text-white text-lg md:text-xl font-semibold'>{feature.title}</h3>
                        <p className='text-yellow-200 text-gray-500/70 text-xs md:text-sm'>{feature.description}</p> 
                    </div>
                    
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default BottomBanner
