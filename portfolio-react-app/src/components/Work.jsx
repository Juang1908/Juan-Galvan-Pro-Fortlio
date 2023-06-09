import React from 'react'
import Team from '../assets/team-gen.jpg';
import Scheduler from '../assets/scheduler-view.jpg';
import MarketP from '../assets/market-place.jpg'
import ColorCh from '../assets/color-changings.jpg';
import TextE from '../assets/text-editor.jpg';
import Live from '../assets/live.jpg';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen  text-black bg-[#4c90f8]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-5xl font-bold inline border-b-4 text-black border-purple-700'>Work</p>
                <p className='py-6'>// Checkout some of my most recent work</p>
            </div>

        {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    
                    {/* Grid Item*/}
                <div style={{ backgroundImage: `url(${Team})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md 
                flex justify-center text-center items-center mx-auto content-div'
                >

                    {/* Hover Effects*/}
                  <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        React Js Application
                   </span>
                    <div className='pt-8 text-center'>
                        <a href="https://github.com/Juang1908/Oil-Field-Employee-Tracker">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/Juang1908/Oil-Field-Employee-Tracker">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                  </div> 
                </div>
                     {/* Grid Item*/}
                     <div style={{ backgroundImage: `url(${Scheduler})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md 
                flex justify-center text-center items-center mx-auto content-div'
                >

                    {/* Hover Effects*/}
                  <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        React Js Application
                   </span>
                    <div className='pt-8 text-center'>
                        <a href="https://juang1908.github.io/Daily-Work-Schedule/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/Juang1908/Daily-Work-Schedule">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                  </div> 
                </div>
                 {/* Grid Item*/}
                 <div style={{ backgroundImage: `url(${MarketP})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md 
                flex justify-center text-center items-center mx-auto content-div'
                >

                    {/* Hover Effects*/}
                  <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        React Js Application
                   </span>
                    <div className='pt-8 text-center'>
                        <a href="https://listup-marketplace.herokuapp.com/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/Juang1908/list-up-marketplace">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                  </div> 
                </div>
                     {/* Grid Item*/}
                     <div style={{ backgroundImage: `url(${ColorCh})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md 
                flex justify-center text-center items-center mx-auto content-div'
                >

                    {/* Hover Effects*/}
                  <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        React Js Application
                   </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                  </div> 
                </div>
                 {/* Grid Item*/}
                 <div style={{ backgroundImage: `url(${TextE})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md 
                flex justify-center text-center items-center mx-auto content-div'
                >

                    {/* Hover Effects*/}
                  <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        React Js Application
                   </span>
                    <div className='pt-8 text-center'>
                        <a href="https://text-editor-1.herokuapp.com/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/Juang1908/Progressive-Web-Applications--PWA-Text-Editor">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                  </div> 
                </div>
                     {/* Grid Item*/}
                     <div style={{ backgroundImage: `url(${Live})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md 
                flex justify-center text-center items-center mx-auto content-div'
                >

                    {/* Hover Effects*/}
                  <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        React Js Application
                   </span>
                    <div className='pt-8 text-center'>
                        <a href="https://juang1908.github.io/random-live-user-fetch/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/Juang1908/random-live-user-fetch">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-900 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                  </div> 
                </div>
            </div>

        </div>
    </div>
  )
}

export default Work