import React from 'react'
import './Header.css'

const Header = () => {
   return (
      <section className="header container sticky top-[610px] z-50  mx-auto hidden md:block h-0 ">
         <div className=" mx-auto ">
            <nav className="border-1 mx-auto  flex md:w-[85%] lg:w-[65%] xl:w-[50%] justify-center rounded-full border-2 bg-white px-10 py-4  font-ubuntu shadow-lg shadow-black">
               <a href="#Home" className="a mr-14 text-[15px]  text-[#000] ">
                  HOME
               </a>
   
               <a href="#Works" className="a mr-14      text-[15px]  text-[#000] ">
                  WORKS
               </a>

               <a href="#Skills" className="a mr-14 text-[15px]  text-[#000] ">
                  SKILLS
               </a>

               <a
                  href="#Project"
                  id=""
                  className="a  text-[15px]  text-[#000] outline-transparent "
               >
                  PROJECTS
               </a>
            </nav>
         </div>
      </section>
   )
}

export default Header
