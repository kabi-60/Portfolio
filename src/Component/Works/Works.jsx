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
  const [active, setActive] = useState('java') // 👈 default

  return (
    <section className="bg-white py-24" id='Works'>
      <div className="container mx-auto px-6">

        {/* TITLE */}
        <h1 className="text-center font-ubuntu text-4xl lg:text-6xl font-bold text-black mb-20">
          WHAT I DO
        </h1>

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT – SINGLE IMAGE */}
          <div className="flex justify-center sticky top-32">
            <img
              src={servicesData[active].image}
              alt={servicesData[active].title}
              className="w-[90%] lg:w-[75%] rounded-md transition-all duration-500"
            />
          </div>

          {/* RIGHT – 3 CONTENT SECTIONS */}
          <div className="relative">

            {/* vertical divider */}
            <div className="hidden lg:block absolute left-[-40px] top-0 h-full w-[2px] bg-black" />

            {Object.keys(servicesData).map((key) => (
              <div
                key={key}
                onClick={() => setActive(key)}
                className={`cursor-pointer mb-14 pb-10 border-b transition-all duration-300 ${
                  active === key ? 'border-black' : 'border-black/40'
                }`}
              >
                <h2 className="font-ubuntu text-2xl lg:text-3xl font-bold text-black">
                  {servicesData[key].title}
                </h2>

                {active === key && (
                  <div className="mt-6 text-black max-w-xl">
                    <p className="mb-5 leading-7">
                      {servicesData[key].desc}
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
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
