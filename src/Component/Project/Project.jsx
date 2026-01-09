import React from 'react'
import ProjectSlider from '../ProjectCard/ProjectCard'

const Project = () => {
  return (
    <section className="bg-white mb-10" id="Project">
      <div className="max-w-[1400px] mx-auto px-6">

        <h1 className="text-center font-ubuntu  my-20  text-4xl lg:text-6xl font-extrabold text-[#000]">
          PROJECTS
        </h1>


        <ProjectSlider />
      </div>
    </section>
  )
}

export default Project
