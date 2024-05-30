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
          <p className='text-black mb-4 max-w-md'>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam alias harum impedit accusamus ipsa sit odio totam laborum nesciunt hic, voluptatibus, atque enim soluta a et fugit, quae temporibus expedita.

          </p>
          <div className="socials flex flex-row gap-2">
            <Link href="https://github.com/" >
              <Image 
                src={GithubIcon}
                alt="Github icon"
              />
            
            </Link>
            <Link href="https://www.linkedin.com" >
              <Image 
                src={LinkedinIcon}
                alt="Linkedin icon"
              />
            </Link>
            <Link href="https://x.com/" >
              <Image 
                src={TwitterX}
                alt="Twitterx icon"
              />
            </Link>
          </div>
        </div>
    </section>
  )
}

export default EmailSection