import React from 'react'
import { type ReactNode } from 'react';


type InfoBoxProps = { 
  selectTab: () => void, 
  active: boolean, 
  children: React.ReactNode }
 
  
export default function TabButton({ active, selectTab, children}: InfoBoxProps)  {
  
  const buttonClasses = active ? 'text-blue border-b' : 'text-[#ADB7BE]'

  return (  
       <button onClick={selectTab}>
          <p className={`mr-3  text-[#27293B] hover:text-[#626577]  ${buttonClasses}`}>
            {children}
          </p>
      </button>
  )
}

