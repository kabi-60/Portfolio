import React from 'react'

const ProgressBar = () => {
   return (
      <div className="mt-5 grid grid-cols-3 gap-10 px-10">
         <div className="relative mx-auto    size-20 md:size-28  ">
            <svg
               className="size-full"
               width="36"
               height="36"
               viewBox="0 0 36 36"
               xmlns="http://www.w3.org/2000/svg"
            >
               {/* <!-- Background Circle --> */}
               <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-black "
                  stroke-width="2"
               ></circle>
               {/* <!-- Progress Circle inside a group with rotation --> */}
               <g className="origin-center -rotate-90 transform">
                  <circle
                     cx="18"
                     cy="18"
                     r="16"
                     fill="none"
                     className="stroke-current text-[#b2b2b2] "
                     stroke-width="2"
                     stroke-dasharray="100"
                     stroke-dashoffset="85"
                  ></circle>
               </g>
            </svg>
            {/* <!-- Percentage Text --> */}
            <div className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
               <span className="text-center md:text-2xl font-bold text-gray-800 ">
                  80%
               </span>
            </div>
            <h1 className="md:text-medium text-sm text-center font-ubuntu font-semibold md:font-bold">
               HTML
            </h1>
         </div>
         <div className="relative mx-auto  size-20 md:size-28  ">
            <svg
               className="size-full"
               width="36"
               height="36"
               viewBox="0 0 36 36"
               xmlns="http://www.w3.org/2000/svg"
            >
               {/* <!-- Background Circle --> */}
               <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-black "
                  stroke-width="2"
               ></circle>
               {/* <!-- Progress Circle inside a group with rotation --> */}
               <g className="origin-center -rotate-90 transform">
                  <circle
                     cx="18"
                     cy="18"
                     r="16"
                     fill="none"
                     className="stroke-current text-[#b2b2b2]"
                     stroke-width="2"
                     stroke-dasharray="100"
                     stroke-dashoffset="90"
                  ></circle>
               </g>
            </svg>
            {/* <!-- Percentage Text --> */}
            <div className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
               <span className="text-center md:text-2xl font-bold text-gray-800 ">
                  85%
               </span>
            </div>
            <h1 className="md:text-medium text-sm text-center font-ubuntu font-semibold md:font-bold">
               CSS
            </h1>
         </div>
         <div className="relative mx-auto  size-20 md:size-28  ">
            <svg
               className="size-full"
               width="36"
               height="36"
               viewBox="0 0 36 36"
               xmlns="http://www.w3.org/2000/svg"
            >
               {/* <!-- Background Circle --> */}
               <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-black "
                  stroke-width="2"
               ></circle>
               {/* <!-- Progress Circle inside a group with rotation --> */}
               <g className="origin-center -rotate-90 transform">
                  <circle
                     cx="18"
                     cy="18"
                     r="16"
                     fill="none"
                     className="stroke-current text-[#b2b2b2] "
                     stroke-width="2"
                     stroke-dasharray="100"
                     stroke-dashoffset="75"
                  ></circle>
               </g>
            </svg>
            {/* <!-- Percentage Text --> */}
            <div className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
               <span className="text-center md:text-2xl font-bold text-gray-800 ">
                  70%
               </span>
            </div>
            <h1 className="md:text-medium text-sm text-center font-ubuntu font-semibold md:font-bold">
               JAVA SCRIPT
            </h1>
         </div>
         <div className="relative mx-auto  size-20 md:size-28  ">
            <svg
               className="size-full"
               width="36"
               height="36"
               viewBox="0 0 36 36"
               xmlns="http://www.w3.org/2000/svg"
            >
               {/* <!-- Background Circle --> */}
               <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="700 stroke-current text-black"
                  stroke-width="2"
               ></circle>
               {/* <!-- Progress Circle inside a group with rotation --> */}
               <g className="origin-center -rotate-90 transform">
                  <circle
                     cx="18"
                     cy="18"
                     r="16"
                     fill="none"
                     className="stroke-current text-[#b2b2b2] "
                     stroke-width="2"
                     stroke-dasharray="100"
                     stroke-dashoffset="90"
                  ></circle>
               </g>
            </svg>
            {/* <!-- Percentage Text --> */}
            <div className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
               <span className="text-center md:text-2xl font-bold text-gray-800 ">
                  85%
               </span>
            </div>
            <h1 className="md:text-medium text-sm text-center font-ubuntu font-semibold md:font-bold">
               TAILWIND CSS
            </h1>
         </div>
         <div className="relative mx-auto  size-20 md:size-28  ">
            <svg
               className="size-full"
               width="36"
               height="36"
               viewBox="0 0 36 36"
               xmlns="http://www.w3.org/2000/svg"
            >
               {/* <!-- Background Circle --> */}
               <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-black"
                  stroke-width="2"
               ></circle>
               {/* <!-- Progress Circle inside a group with rotation --> */}
               <g className="origin-center -rotate-90 transform">
                  <circle
                     cx="18"
                     cy="18"
                     r="16"
                     fill="none"
                     className="stroke-current text-[#b2b2b2]"
                     stroke-width="2"
                     stroke-dasharray="100"
                     stroke-dashoffset="80"
                  ></circle>
               </g>
            </svg>
            {/* <!-- Percentage Text --> */}
            <div className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
               <span className="text-center md:text-2xl font-bold text-gray-800 ">
                  75%
               </span>
            </div>
            <h1 className="md:text-medium text-sm text-center font-ubuntu font-semibold md:font-bold">
               REACT JS
            </h1>
         </div>

      </div>
   )
}

export default ProgressBar
