"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";




type NavLinks = {
  title: string;
  path: string;
}

const navLinks: NavLinks[] = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  }

]  

export default function NavBar() {

    const [ navBarOpen, setNavBarOpen] = useState<boolean>(false);


    return (
              <nav className='fixed mx-auto top-0 left-0 right-0 z-10'>
                  <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
                      <Link href={"/"} 
                            className='text-2xl md:text-5xl text-[#626577] font-normal'
                            
                      >LOGO
                      
                      </Link>
                      <div className='mobile-menu block md:hidden'>
                        {
                          !navBarOpen ? (
                            <button onClick={() => setNavBarOpen(true) } 
                                    className='flex items-center px-3 py-2 border rounded
                                    border-slate-200 text-slate-400 hover:text-black hover:border-black'>
                              <Bars3Icon className='h-5 w-5'/>
                            </button>
                          ) : (  
                            <button onClick={() => setNavBarOpen(false) }  
                                  className='flex items-center px-3 py-2 border rounded
                            border-slate-200 text-slate-400 hover:text-back hover:border-black'>
                            <XMarkIcon className='h-5 w-5'/>
                          </button>
                          )
                        }

                      </div>
                      <div className='menu hidden md:block md:w-auto' id='navbar'>
                        <ul className='flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0'>
                          {
                            navLinks.map((link, index) => (
                              <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                      {
                        navBarOpen ? <MenuOverlay links={navLinks}/> : null
                      }
                  </div>
              </nav>
    )
}
