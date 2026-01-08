import React from 'react'
import SkillCard from './SkillCard'
import AboutCard from './AboutCard'

const About = () => {
  return (
    <div className='mt-44 '>
        <div className="grid grid-cols-2">
            <div className='border ml-5 w-[2500px]'>

      <AboutCard/>
            </div>
      <div className='space-y-5'>
      <h1 className="font-semibold text-left text-5xl text-[#171717] ">
          About Me
        </h1>
        <h1 className=" font-bold text-[#171717] text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            magni inventore sint iure ea libero minima doloribus est quasi
            cupiditate doloremque, corporis tempore? Nesciunt alias praesentium
            adipisci, illo tenetur odio!
          </h1>
      </div>
        
      </div>
    </div>
  )
}

export default About
