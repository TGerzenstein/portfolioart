import React from 'react';
import Image from 'next/image';

function AboutMe() {
  return (
    <section>
        <div className='text-black md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>       
          <Image
            src="/pc.jpeg"
            alt="computer"
            width={300}
            height={300}
          />
        <div>
          <h2 className='text-4xl font-bold text-black mb-4'>About me</h2>
          <p className='text-base lg:text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Deleniti accusamus unde rerum delectus in, molestias temporibus 
             quaerat at, molestiae dolorum eius vero aliquam tempore nisi 
             non obcaecati cumque quibusdam vitae.
          </p>
          <div className='flex flex-row mt-8'>

          </div>
        </div>
        </div>
    </section>

  )
}

export default AboutMe