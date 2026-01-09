import React, { useState } from 'react'
import javaImg from '../Works/ui.png'
import frontendImg from '../Works/ui.png'
import fullstackImg from '../Works/ui.png'

const servicesData = {
  java: {
    title: 'Java Developer',
    desc: 'Building backend applications using Java with strong OOP principles, clean architecture, and efficient problem-solving.',
    points: ['Core Java', 'OOP Concepts', 'Data Structures', 'Backend Logic'],
    image: javaImg,
  },
  frontend: {
    title: 'Frontend Developer',
    desc: 'Designing and developing responsive, accessible, and user-friendly web interfaces.',
    points: ['React.js', 'Tailwind CSS', 'Responsive Design', 'UI/UX Focus'],
    image: frontendImg,
  },
  fullstack: {
    title: 'Full-Stack Developer',
    desc: 'Developing complete web applications with scalable backend and modern frontend integration.',
    points: ['MERN Stack', 'REST APIs', 'Authentication', 'Deployment'],
    image: fullstackImg,
  },
}

const Work = () => {
  const [active, setActive] = useState('java')

  return (
    <section className="bg-white " id="Works">
      <div className="container mx-auto px-4 md:px-6">

        {/* TITLE */}
        <h1 className="text-center font-ubuntu text-3xl md:text-4xl lg:text-6xl font-bold text-black mb-12 md:mb-20">
          WHAT I DO
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* IMAGE */}
          <div className="flex justify-center lg:sticky lg:top-32">
            <img
              src={servicesData[active].image}
              alt={servicesData[active].title}
              className="
                w-full
                max-w-[320px]
                sm:max-w-[380px]
                md:max-w-[420px]
                lg:max-w-[480px]
                rounded-xl
                transition-all duration-500
              "
            />
          </div>

          {/* CONTENT */}
          <div className="relative">

            {/* vertical divider – desktop only */}
            <div className="hidden lg:block absolute left-[-32px] top-0 h-full w-[2px] bg-black" />

            {Object.keys(servicesData).map((key) => (
              <div
                key={key}
                onClick={() => setActive(key)}
                className={`
                  cursor-pointer
                  mb-10
                  mx-5
                  pb-8
                  border-b
                  transition-all duration-300
                  ${active === key ? 'border-black' : 'border-black/30'}
                `}
              >
                <div className="flex justify-between items-center ">

                <h2 className="font-ubuntu text-xl md:text-2xl lg:text-3xl font-bold text-black">
                  {servicesData[key].title}
                </h2>
                <h1>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-out-up-right-icon lucide-circle-arrow-out-up-right"><path d="M22 12A10 10 0 1 1 12 2"/><path d="M22 2 12 12"/><path d="M16 2h6v6"/></svg>
                </h1>
                </div>

                {active === key && (
                  <div className="mt-4 text-black max-w-xl">
                    <p className="mb-4 leading-7 text-sm md:text-base">
                      {servicesData[key].desc}
                    </p>
                    <ul className="list-disc ml-5 space-y-2 text-sm md:text-base">
                      {servicesData[key].points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
  