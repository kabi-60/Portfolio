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
  
  { img: sign, title: 'Sign Language Detector', category: 'Tensor FLow · React' },
  { img: alumni, title: 'Alumni Connect', category: 'Alumni Platform · MERN' },
  { img: dairy, title: 'Dairy Optmizer', category: 'Dairy Optimization · MERN' },
  { img: teragrid, title: 'TeraGrid', category: 'Student · MERN' },
  { img: job, title: 'Job Portal', category: 'Job Portal · MERN' },
  { img: quiz1, title: 'Panda Quiz ', category: 'E-learning ·React' },
  { img: pass, title: 'Password Generator', category: 'React · Utility' },
  { img: beta, title: 'Beta Bliss', category: 'Ecommerce · MERN' },
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
    <div className="relative">

      {/* SLIDER */}
      <div
        ref={sliderRef}
        className="flex gap-16 overflow-x-hidden scroll-smooth"
      >
        {projects.map((p, i) => (
          <div key={i} className="min-w-[500px]">

            {/* IMAGE */}
            <div className="rounded-lg ">
              <img
                src={p.img}
                alt={p.title}
                className="w-full rounded-lg h-[350px] w-[500px] object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="text-sm text-black/50 mt-1">{p.category}</p>

              <div className="mt-4">
                <span className="inline-flex items-center gap-2 text-sm font-semibold border-b border-black pb-1 cursor-pointer">
                  VIEW PROJECT <span>→</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM ARROWS */}
      <div className="mt-20 flex justify-center gap-8">
        <button
          onClick={() => scroll('left')}
          // className="h-10 w-10 flex items-center justify-center rounded-full border border-black font-bold text-4xl"
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-left-icon lucide-circle-arrow-left"><circle cx="12" cy="12" r="10"/><path d="m12 8-4 4 4 4"/><path d="M16 12H8"/></svg>
        </button>

        <button
          onClick={() => scroll('right')}
          // className="h-10 w-10 flex items-center justify-center rounded-full border border-black font-bold text-4xl"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-right-icon lucide-circle-arrow-right"><circle cx="12" cy="12" r="10"/><path d="m12 16 4-4-4-4"/><path d="M8 12h8"/></svg>
        </button>
      </div>

    </div>
  )
}

export default ProjectSlider
