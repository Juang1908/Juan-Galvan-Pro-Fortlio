import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#4c90f8]'>

    {/* Container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-2xl sm:text-4xl text-purple-800'>Hi, my name is</p>
        <h1 className='text-5xl sm:text-7xl font-bold text-white'>Juan Galvan</h1>
        <h2 className='text-5xl sm:text-7xl font-bold text-gray-600'>I'm a Junior Full Stack Developer</h2>
        <p className='text-gray-800 py-4 max-w-[700px]'>A passionate and driven junior full stack web developer.
         With a deep-rooted fascination for all things web-related, 
         I have honed my skills in both front-end and back-end development to create captivating and functional online experiences.
          Armed with a strong foundation in HTML, CSS, JavaScript, and familiarity with frameworks such as React and Node.js, 
          I am eager to take on new challenges and contribute to innovative projects.</p>
    <div>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-800 hover:border-purple-800'>View Work 
        <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-4'/>
            </span>
        </button>
    </div>
    </div>
    </div>
  )
}

export default Home