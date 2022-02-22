import React from 'react'
import {BsPlayFill} from 'react-icons/bs'

const Hero = () => {
  return (
    <div className='w-full flex flex-col md:justify-start justify-center items-start p-10 mt-10'>
      <h1 className='text-white text-6xl font-bold'>Godzeila</h1>
      <p className='text-white text-md font-bold sm:w-9/12 mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem iure officia molestiae totam suscipit, veniam dolor animi est temporibus hic facere aperiam ad asperiores aliquid. Fugit velit placeat aliquam illum?</p>

      <button className='text-white bg-transparent py-3 px-5  mt-5 border-[2px] border-white rounded-full'><BsPlayFill /> Watch Now</button>
    </div>
  )
}

export default Hero