import Link from 'next/link';
import React from 'react';


function NavLink({ href, title }: any ) {
  
  return (
    <Link 
       href={href} 
       className='block py-2 pl-3 pr-4 text-[#626577] rounded sm:text-lx md:p-0 hover:text-black'>
        {title}
    </Link>
  )
}

export default NavLink;