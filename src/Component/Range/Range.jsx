import React from 'react'
import LinearProgress from '@mui/material/LinearProgress'
const Range = () => {
  return (
    <div>
         <div className="mx-auto flex w-[90%] md:w-[65%] ">
                     <h1 className="mx-auto mr-5 font-ubuntu md:text-xl font-bold text-[#000]">
                        CREATIVITY<span className="ml-1">:</span>
                     </h1>
                     <LinearProgress
                        variant="determinate"
                        value={85}
                        color="inherit"
                        className="mt-2 md:mt-1 w-[100%] py-1 md:py-2"
                     />
                     <p className="ml-1 font-medium">85%</p>
                  </div>
                  <div className="mx-auto mt-2 flex w-[90%] md:w-[65%] pl-1">
                     <h1 className="mr-5 font-ubuntu  md:text-xl font-bold text-[#000]">
                        FRONTEND<span className="ml-1">:</span>
                     </h1>
                     <LinearProgress
                        variant="determinate"
                        value={90}
                        color="inherit"
                        className="mt-2 md:mt-1 w-[100%] py-1 md:py-2"
                     />
                     <p className="ml-1 font-medium">90%</p>
                  </div>
                  <div className="mx-auto mt-2 flex w-[90%] md:w-[65%] pl-4">
                     <h1 className="mr-5 font-ubuntu md:text-xl font-bold text-[#000]">
                        BACKEND<span className="ml-1">:</span>
                     </h1>
                     <LinearProgress
                        variant="determinate"
                        value={60}
                        color="inherit"
                        className="mt-2 md:mt-1 w-[100%] py-1 md:py-2"
                     />
                     <p className="ml-1 font-medium">60%</p>
                  </div>
            
    </div>
  )
}

export default Range