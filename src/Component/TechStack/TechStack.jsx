import React from 'react'
import html from '../Skills/html.png'
import css from '../Skills/css.png'
import js from '../Skills/js.png'
import java from '../Skills/java.png'
import sql from '../Skills/mysql.png'
import react from '../Skills/react.png'
import c from '../Skills/c-.png'
import node from '../Skills/node.png'
import mongo from '../Skills/mongo.png'
import next from '../Skills/next.png'
import express from '../Skills/ex.png'
const TechStack = () => {
  return (
    <div>
             <h1 className="text-center font-ubuntu text-xl font-bold text-[#000]">
                  PROGRAMMING LANGUAGE <span className='text-2xl'>🖥️</span>
               </h1>
               <div className="mx-auto my-14 grid grid-cols-3 md:grid-cols-4 gap-5 md:gap-16 px-10"  data-aos="fade-right">
                  <div className="mx-auto">
                     <img src={html} alt="" className="h-[40px] sm:h-[50px]" />
                     <p className="text-center md:text-xl font-semibold md:font-medium">HTML</p>
                  </div>
                  <div className="mx-auto">
                     <img src={css} alt="" className="h-[40px] sm:h-[50px]" />
                     <p className="text-center md:text-xl font-semibold md:font-medium">CSS</p>
                  </div>
                  <div className="mx-auto">
                     <img src={js} alt="" className="mx-auto h-[40px] sm:h-[50px]" />
                     <p className="text-center md:text-xl font-semibold md:font-medium">
                        JAVA SCRIPT
                     </p>
                  </div>
                  <div className="mx-auto">
                     <img src={java} alt="" className="h-[40px] sm:h-[50px]" />
                     <p className="text-center md:text-xl font-semibold md:font-medium">JAVA</p>
                  </div>
                  <div className="mx-auto">
                     <img src={sql} alt="" className="h-[40px] sm:h-[50px]" />
                     <p className="text-center md:text-xl font-semibold md:font-medium">MY SQL</p>
                  </div>
                  <div className="mx-auto">
                     <img src={react} alt="" className="h-[40px] sm:h-[50px]" />
                     <p className="text-center md:text-xl font-semibold md:font-medium">REACT JS</p>
                  </div>
                  <div className="mx-auto">
                     <img src={c} alt="" className="h-[40px] sm:h-[50px]" />
                     <p className="text-center md:text-xl font-semibold md:font-medium">C++</p>
                  </div>
                  <div className="mx-auto">
                     <img src={node} alt="" className="h-[60px] " />
                     <p className="text-center md:text-xl font-semibold md:font-medium">NODE JS</p>
                  </div>
                  <div className="mx-auto">
                     <img src={mongo} alt="" className="h-[60px] " />
                     <p className="text-center md:text-xl font-semibold md:font-medium">MONGODB</p>
                  </div>
                  <div className="mx-auto">
                     <img src={next} alt="" className="h-[60px] " />
                     <p className="text-center md:text-xl font-semibold md:font-medium">NEXT JS</p>
                  </div>
                  <div className="mx-auto">
                     <img src={express} alt="" className="mx-auto h-[60px]" />
                     <p className="text-center md:text-xl font-semibold md:font-medium">
                        EXPRESS JS
                     </p>
                  </div>
               </div>
    </div>
  )
}

export default TechStack