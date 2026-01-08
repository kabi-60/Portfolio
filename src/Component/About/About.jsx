import React, { useEffect } from 'react'
import bg from '../About/bg4.jpg' // change to clean portrait if possible
import instagram from '../About/instagram.png'
import linkedin from '../About/linkedin.png'
import project from '../About/project.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <section className="container mx-auto py-16 px-5" id="About">
      <div className="flex flex-col xl:flex-row items-center gap-12">

        {/* IMAGE SECTION */}
        <div data-aos="fade-right">
          <img
            src={bg}
            alt="Kabilash"
            className="h-[420px] lg:h-[520px] rounded-2xl object-cover shadow-lg"
          />
        </div>

        {/* CONTENT SECTION */}
        <div className="xl:w-[55%]" data-aos="fade-left">
          <h1 className="font-ubuntu text-4xl lg:text-6xl font-bold mb-3">
            ABOUT ME
          </h1>

          <p className="font-ubuntu text-lg font-medium text-gray-700 mb-6">
            FULL STACK WEB DEVELOPER
          </p>

          <p className="text-gray-600 leading-7 mb-8">
            I’m a Full Stack Web Developer with hands-on experience in building
            responsive and scalable web applications. I focus on writing clean,
            maintainable code and creating user-friendly interfaces.
            <br /><br />
            I enjoy learning new technologies and turning ideas into real-world
            products.
          </p>

          {/* BASIC INFO */}
          <div className="grid md:grid-cols-2 gap-4 text-sm lg:text-base mb-8">
            <p><strong>Name:</strong> Kabilash M</p>
            <p><strong>College:</strong> SKCET, Coimbatore</p>
            <p><strong>Location:</strong> Coimbatore, Tamil Nadu</p>
            <p>
              <strong>Email:</strong>{' '}
              <a
                href="mailto:kabilashi29@gmail.com"
                className="text-blue-600"
              >
                kabilashi29@gmail.com
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{' '}
              <a
                href="https://github.com/kabi-60"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                github.com/kabi-60
              </a>
            </p>
            <p><strong>Projects:</strong> 30+</p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-5 mb-8">
            <span className="font-ubuntu font-bold">FOLLOW ME:</span>
            <a href="#" className="hover:scale-110 transition">
              <img src={instagram} alt="Instagram" className="h-[32px]" />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <img src={linkedin} alt="LinkedIn" className="h-[32px]" />
            </a>
          </div>

          {/* PROJECT ICON */}
          <div className="flex items-center gap-4 mb-10">
            <img src={project} alt="Projects" className="h-[50px]" />
            <h2 className="font-ubuntu text-lg font-bold">
              30+ Completed Projects
            </h2>
          </div>

          {/* CV BUTTON */}
          <button className="bg-black text-white px-8 py-2 rounded hover:bg-white hover:text-black border border-black transition">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
