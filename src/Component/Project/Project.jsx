import React from 'react'
import ProjectSlider from '../ProjectCard/ProjectCard'

const Project = () => {
  return (
    <section className="bg-white py-28" id="Project">
      <div className="max-w-[1400px] mx-auto px-6">

        <h1 className="text-center text-5xl lg:text-6xl font-extrabold mb-6">
          PROJECTS
        </h1>

        <p className="text-center text-black/60 mb-20">
          Selected works showcasing frontend, full-stack and UI focused projects.
        </p>

        <ProjectSlider />
      </div>
    </section>
  )
}

export default Project
