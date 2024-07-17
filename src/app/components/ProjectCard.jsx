import React from 'react'
import Link from 'next/link';
import GitIcon from '../../../public/githubprojects.svg';
import Image from 'next/image';


function ProjectCard({ imgUrl, title, description }) {
  return (
<div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#868686] bg-opacity-10 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href='https://vercel.com'
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
          </Link>

          <Link
            href='https://github.com'
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
          <Image 
            src={GitIcon}
            alt="Github icon"
          />
          </Link>
        </div>
      </div>
      <div className="text-black rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard