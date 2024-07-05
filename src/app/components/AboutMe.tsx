"use client";

import React from 'react';
import Image from 'next/image';
import { useState, useTransition } from 'react';
import TabButton from './TabButton';


const DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li>Certified Information Systems Auditor</li>
        <li>Project Management Professional</li>
        <li>Microsoft Certified: Azure Administrator</li>
        <li>Google Certified</li>
      </ul>
    )
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className='list-disc pl-2'>
        <li>Frontend Web Developer</li>
        <li>Junior Frontend Software Engineer</li>
        <li>Lead User Interface Designer</li>
        <li>Full Stack JavaScript Developer</li>
      </ul>
    )
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>Responsive Web Design</li>
        <li>JavaScript Frameworks</li>
        <li>Cross-Browser Compatibility</li>
        <li>CSS Preprocessors</li>
      </ul>
    )
  }
]


function AboutMe() {

  const [tab, setTab] = useState<string>('education');
  const [isPending, startTransition] = useTransition();
    

  function handleSelectTab(id: string) {
      startTransition(() =>{
        setTab(id);
      console.log("se selecciona --->", id);
    });
  } 

  const tabContent = DATA.find((t) => t.id === tab)?.content || <p>No content available</p>;
  
  return (
    <section> 
        <div className='text-black md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>       
          <Image
            src="/pc.jpeg"
            alt="computer"
            width={300}
            height={300}
          /> 
          <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-black mb-4'>About me</h2>
            <p className='text-base text-[#27293B] lg:text-lg'>
              Detail-oriented, analytical, and self-driven programmer with extensive 
              experience building user-facing applications. Efficient and knowledgeable 
              coder with skills in HTML, CSS, PHP, and JavaScript programming languages. 
              Coordinated and collaborative team player with attention to detail, 
              graphic design skills, and ability to contribute to code base improvement 
              initiatives and UX improvement projects.
            </p>
            <div className='flex flex-row justify-start mt-8'>
              <TabButton selectTab={() => handleSelectTab("education")} 
                         active={ tab === "education"}>
                Education
              </TabButton> 
              <TabButton selectTab={() => handleSelectTab("certification")} 
                         active={ tab === "certification"}>
                Certification
              </TabButton> 
              <TabButton selectTab={() => handleSelectTab("skills")} 
                         active={ tab === "skills"}>
                Skills
              </TabButton>

            </div>
            <div className="mt-8">
               {tabContent} 
            </div>
          </div>
        </div>
    </section>
  )
}

export default AboutMe