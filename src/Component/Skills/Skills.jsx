import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import ProgressBar from '../ProgressBar/ProgressBar'
import Range from '../Range/Range'
import TechStack from '../TechStack/TechStack'

const Skills = () => {
   return (
      <section className="container mx-auto md:my-7 md:py-9 w-[100%]"  id="Skills">
         
         <div className="mx-auto">
            <h1 className="text-center font-ubuntu  text-4xl lg:text-6xl font-bold text-[#000]">
               MY SKILLS
            </h1>
         
         </div>
         <div className="lg:flex">
            <div className="my-10 lg:w-[50%]" >
               <TechStack />
            </div>
            <div className="mx-auto my-5 lg:my-10  lg:w-[50%] "  data-aos="fade-right" data-aos-offset="100">
               <h1 className="text-center font-ubuntu text-xl font-bold text-[#000]">
                  RANGE <span className="text-2xl">🚀</span>
               </h1>
               <div className="mx-auto my-5 lg:my-10"  >
                  <Range />
               </div>
               {/* progress bar */}

               <h1 className="text-center font-ubuntu text-xl font-bold text-[#000]">
                  PROGRAMMING SKILLS <span className="text-2xl">📈</span>
               </h1>

               <ProgressBar  />
            </div>
         </div>
      </section>
   )
}

export default Skills
