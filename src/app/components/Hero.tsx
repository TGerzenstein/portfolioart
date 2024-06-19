"use client";

import React from 'react';
import Image from 'next/image';

import { TypeAnimation } from 'react-type-animation';


function Hero() {
  return (
    <section className='lg:py-16'>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold mb-4">
            <span className='bg-clip-text'> 
            Hello I am {" "}
            <br />
            <TypeAnimation
              sequence={[
                'Emma',
                1000, 
                'Web depeloper',
                1000,
                'SQL developer',
                1000,
                'Designer',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
            />
            </span>
          </h1>
          <p className='text-[#27293B] text-base sm:text-lg mb-6 lg:text-xl'>
            Competent and dedicated executive web designer with 4+ years of 
            experience in designing and developing websites and web apps for 
            the computer network. 
          </p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gray-900 text-white 
                               outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active'>
              Hire me
            </button>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 mt-3 bg-white
                          outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderB'>
              Download CV
            </button>
          </div> 
        </div>
        <div className='col-span-4 place-self-center mt-6'>
          <div className='w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image 
            src="/developer.png"
            alt='women in computer'
            width={300}
            height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero