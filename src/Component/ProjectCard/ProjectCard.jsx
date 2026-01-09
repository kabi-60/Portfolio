import React, { useRef } from 'react'
import beta from '../Project/beta.png'
import debit from '../Project/debit.png'
import pass from '../Project/generator.png'
import quiz from '../Project/quiz.png'
import agency from '../Project/agency.png'
import quiz1 from '../Project/quiz1.png'
import teragrid from '../Project/teragrid.png'
import dairy from '../Project/dairy.png'
import alumni from '../Project/alumni.png'
import job from '../Project/job.png'
import sign from '../Project/sign.png'

const projects = [
  { img: sign, title: 'Sign Language Detector', category: 'TensorFlow · React' },
  { img: alumni, title: 'Alumni Connect', category: 'Alumni Platform · MERN' },
  { img: dairy, title: 'Dairy Optimizer', category: 'MERN Stack' },
  { img: teragrid, title: 'TeraGrid', category: 'Student Platform · MERN' },
  { img: job, title: 'Job Portal', category: 'Job Portal · MERN' },
  { img: quiz1, title: 'Panda Quiz', category: 'E-learning · React' },
  { img: pass, title: 'Password Generator', category: 'React · Utility' },
  { img: beta, title: 'Beta Bliss', category: 'E-commerce · MERN' },
  { img: debit, title: 'Debit Card Live', category: 'React · Tailwind' },
  { img: quiz, title: 'Quiz Game', category: 'React · UI' },
  { img: agency, title: 'Agency Website', category: 'HTML · Tailwind' },
]

const ProjectSlider = () => {
  const sliderRef = useRef(null)

  const scroll = (dir) => {
    const width = sliderRef.current.offsetWidth
    sliderRef.current.scrollBy({
      left: dir === 'left' ? -width : width,
      behavior: 'smooth',
    })
  }

  return (
    <section className="relative">

      {/* SLIDER */}
      <div
        ref={sliderRef}
        className="
          flex gap-6
          overflow-x-auto
          scroll-smooth
          scrollbar-hide
          px-4
          md:px-10
        "
      >
        {projects.map((p, i) => (
          <div
            key={i}
            className="
              flex-shrink-0
              w-[85%]
              sm:w-[70%]
              md:w-[45%]
              lg:w-[32%]
            "
          >
            {/* IMAGE */}
            <div className="rounded-xl overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="
                  w-[500px]
                  h-[220px]
                  sm:h-[260px]
                  md:h-[280px]
                  lg:h-[300px]
                  object-cover
                "
              />
            </div>

            {/* TEXT */}
            <div className="mt-4">
              <h2 className="text-lg md:text-xl font-semibold">
                {p.title}
              </h2>
              <p className="text-sm text-black/60 mt-1">
                {p.category}
              </p>

              <div className="mt-3">
                <span className="inline-flex items-center gap-2 text-sm font-semibold border-b border-black pb-1 cursor-pointer">
                  VIEW PROJECT <span>→</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ARROWS */}
      <div className="mt-10 flex justify-center gap-6">
        <button
          onClick={() => scroll('left')}
          className="rounded-full border border-black p-3 hover:bg-black hover:text-white transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <button
          onClick={() => scroll('right')}
          className="rounded-full border border-black p-3 hover:bg-black hover:text-white transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default ProjectSlider
