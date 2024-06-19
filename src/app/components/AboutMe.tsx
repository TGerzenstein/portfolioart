import React from 'react';
import Image from 'next/image';
//import { useState, useTransition } from 'react';
//import TabButton from './TabButton';


type Course = {
    selectTab: string;
    active: boolean;
    id: number;
}



function AboutMe() {

  /* const [tab, setTab] = useState('education');
  //Hook
  const [isPending, startTransition] = useTransition()
    */

 /*  function handleSelectTab(nextTab) {
      startTransition(() =>{
        setTab(nextTab);
 
    });
  } */
  
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
          <p className='text-base text-[#27293B] lg:text-lg'>
            Detail-oriented, analytical, and self-driven programmer with extensive 
            experience building user-facing applications. Efficient and knowledgeable 
            coder with skills in HTML, CSS, PHP, and JavaScript programming languages. 
            Coordinated and collaborative team player with attention to detail, 
            graphic design skills, and ability to contribute to code base improvement 
            initiatives and UX improvement projects.
          </p>
          <div className='flex flex-row mt-8'>
{/*            <TabButton selectTab={() => handleSelectTab("education")} active={tab === "education"}>
            Education
            </TabButton> */}

            <span className='mr-3  text-[#27293B] hover:text-[#626577] border-b border-gray-800'>
              Education</span>
            <span className='mr-3  text-[#27293B] hover:text-[#626577]'>
              Certification</span>
            <span className='mr-3  text-[#27293B] hover:text-[#626577]'>
              Skills</span>
            <span className='mr-3  text-[#27293B] hover:text-[#626577]'>
              Experiencie</span>
          </div>
        </div>
        </div>
    </section>

  )
}

export default AboutMe