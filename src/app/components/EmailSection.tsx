import React from 'react';
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import TwitterX from "../../../public/twitterx.svg";
import Link from 'next/link';
import Image from 'next/image';

function EmailSection() {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
        <div>
          <h5 className='text-xl font-bold text-black my-2'>Let is connect</h5>
          <p className='text-[#27293B] mb-4 max-w-md'>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam alias harum impedit accusamus ipsa sit odio totam laborum nesciunt hic, voluptatibus, atque enim soluta a et fugit, quae temporibus expedita.

          </p>
          <div className="socials flex flex-row gap-2">
            <Link href="https://github.com/" className='focus:scale-110 hover:scale-110' >
              <Image 
                src={GithubIcon}
                alt="Github icon"
              />
            
            </Link>
            <Link href="https://www.linkedin.com" className='focus:scale-110 hover:scale-110' >
              <Image 
                src={LinkedinIcon}
                alt="Linkedin icon"
              />
            </Link>
            <Link href="https://x.com/" className='focus:scale-110 hover:scale-110' >
              <Image 
                src={TwitterX}
                alt="Twitterx icon"
              />
            </Link>
          </div>
        </div>
        <div>
          <form action="" className='flex flex-col'>
             <div className='mb-6'>
                <label htmlFor='email' className='text-[#27293B] block mb-2 text-sm font-medium'>Your email</label>
                <input type="email"
                        id='email'
                        required
                        placeholder='yourname@gmail.com' 
                        className='bg-[#f8f8f8] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm block rounded-lg w-full p-2.5'
                />
             </div>
             <div className='mb-6'>
                <label htmlFor='subject' className='text-[#27293B] block mb-2 text-sm font-medium'>Subject</label>
                <input type="text"
                        id='subject'
                        required
                        placeholder='Text here!' 
                        className='bg-[#f8f8f8] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm block rounded-lg w-full p-2.5'
                
                />
             </div>
             <div className="mb-6">
               <label htmlFor="message"
                      className='text-[#27293B] block text-sm mb-2 font-medium'>Message</label>
               <textarea name="message" 
                         id="message" 
                         className='bg-[#f8f8f8] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm block rounded-lg w-full p-2.5'
                         
                         placeholder='Text your message, please...'
                         />
                         
             </div>
             <button
                  type='submit'
                  className=' bg-gray-900 text-white font-medium py-2.5 px-5 rounded-lg w-full'
             >
              Submit
             </button>
          </form>
        </div>
    </section>
  )
}

export default EmailSection