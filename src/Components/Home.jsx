import React from "react";
import arrow from "../assets/arrow.png";
import curved from "../assets/curved.png";
import star from "../assets/Star.png";
import kabi from "../assets/kabi.png";
import insta from '../assets/insta.svg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'

const Home = () => {
  return (
    <div className="mt-5">
      <div className="flex justify-center ">
        <img src={arrow} alt="" className="ml-24" />
      </div>
      <div className="flex justify-center">
        <button className="px-5 border-[#171717] hover:bg-[#577e80]  hover:border-[#577e80] hover:text-white border-2 font-semibold  rounded-full py-2 text-[#171717]">
          Hello!
        </button>
      </div>
      <div className="grid  justify-center mt-16 relative">
        <h1 className="mx-auto font-semibold text-8xl text-[#171717] ">
          I'm <span className="text-[#577e80] uppercase">kabi</span>,
        </h1>

        <h1 className="font-semibold text-8xl text-[#171717] ">
          Full Stack Developer
        </h1>
        <div className="absolute -bottom-10 left-[17%]">
          <img src={arrow} className="size-16 -rotate-180 " alt="" />
        </div>
      </div>
      <div className="flex justify-between mt-24">
        <div className="">
          <h1 className="font-mono text-[#171717] font-extrabold text-9xl">
            ❝
          </h1>
          <h1 className="w-96 -mt-16 font-bold text-[#171717] text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            magni inventore sint iure ea libero minima doloribus est quasi
            cupiditate doloremque, corporis tempore? Nesciunt alias praesentium
            adipisci, illo tenetur odio!
          </h1>
        </div>
        <div className="flex justify-between">
          <div className="relative">
            <img src={curved} className="" alt="" />
            <div className="absolute top-[70%] left-[25%] z-50 ">
              <div className="bg-white/15 rounded-full p-3  border-2 flex space-x-5">
                <h1 className="bg-[#577e80] text-white text-lg font-semibold px-8 py-5 rounded-full">
                  Portfolio
                </h1>
                <h1 className=" text-[#171717] hover:bg-[#577e80] hover:text-white text-lg font-bold px-8 py-5 rounded-full">
                  Hire Me
                </h1>
              </div>
            </div>
            <div className="absolute top-[70%] -right-[30%] z-50 ">
              <div className="p-3  flex space-x-5">
               <img src={insta} className="size-10" alt="" />
               <img src={github} className="size-10" alt="" />
               <img src={linkedin} className="size-10" alt="" />

              </div>
            </div>
          </div>
        </div>
        <div className="">
          <ul className="flex">
            <li>
              <img src={star} className="size-10" alt="" />
            </li>
            <li>
              <img src={star} className="size-10" alt="" />
            </li>
            <li>
              <img src={star} className="size-10" alt="" />
            </li>
            <li>
              <img src={star} className="size-10" alt="" />
            </li>
            <li>
              <img src={star} className="size-10" alt="" />
            </li>
          </ul>
          <h1 className="text-[#171717] text-end text-5xl font-bold">
            3 <span className="text-4xl">Years</span>
          </h1>
          <h1 className="text-[#171717] text-end text-lg font-extrabold">
            Experince
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
