import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#4c90f8] text-black'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-5xl font-bold inline border-b-4 border-purple-700'>About</p>
            </div>
            <div></div>
            </div>
             <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
                <p>Hi. I'm Juan, nice to meet you. Please take a look around.</p>
            </div>
            <div>
                <p> My attention to detail, problem-solving abilities, and dedication to continuous learning empower me to tackle complex coding tasks with enthusiasm.
                     With a collaborative mindset and a determination to thrive in the ever-evolving world of web development,
                      I am excited to embark on this journey and make a meaningful impact in the industry.</p>
            </div>
             </div>
        </div>
    </div>
  )
}

export default About