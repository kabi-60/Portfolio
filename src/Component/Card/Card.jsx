import React from 'react'

const Card = () => {
  return (
    <div>
         <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-8 px-5 my-10' data-aos="fade-right">
                  
                  {/* <WorkCard/>
                   */}
                     <div className='mx-auto my-auto border rounded-xl shadow-lg md:w-3/4'>

                   <div className='bg-black h-[150px] w-[150px] mx-auto my-5 ' style={{borderRadius:"48% 52% 49% 51% / 81% 76% 24% 19% "}}>
                     <p className='text-center text-white  py-12 text-6xl'><i class="fa-brands fa-figma"></i></p>
                   </div>
                   <div className='my-5'>

                   <h1 className='text-center font-ubuntu text-xl font-bold mt-3'>FIGMA TOOL</h1>
                   <p className='text-center font-ubuntu text-md font-medium mt-1 px-16'>In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque.</p>
                   </div>
                     </div>
                 
                     <div className='mx-auto my-auto border rounded-xl shadow-lg  md:w-3/4'>

                   <div className='bg-black h-[150px] w-[150px] mx-auto my-5 ' style={{borderRadius:"48% 52% 49% 51% / 81% 76% 24% 19% "}}>
                     <p className='text-center text-white  py-12 text-6xl'><i class="fa-solid fa-layer-group"></i></p>
                   </div>
                   <div className='my-5'>

                   <h1 className='text-center font-ubuntu text-xl font-bold mt-3'>WEB DESIGN</h1>
                   <p className='text-center font-ubuntu text-md font-medium mt-1 px-16'>In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque.</p>
                   </div>
                     </div>
                 
                     <div className='mx-auto my-auto border rounded-xl shadow-lg  md:w-3/4'>

                   <div className='bg-black h-[150px] w-[150px] mx-auto my-5 ' style={{borderRadius:"48% 52% 49% 51% / 81% 76% 24% 19% "}}>
                     <p className='text-center text-white  py-12 text-6xl'><i class="fa-solid fa-pen-ruler"></i></p>
                   </div>
                   <div className='my-5'>

                   <h1 className='text-center font-ubuntu text-xl font-bold mt-3'>WEB DEVELOPMENT</h1>
                   <p className='text-center font-ubuntu text-md font-medium mt-1 px-16'>In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque.</p>
                   </div>
                     </div>
                     <div className='mx-auto my-auto xl:hidden border rounded-xl shadow-lg  md:w-3/4'>

                   <div className='bg-black h-[150px] w-[150px] mx-auto my-5 ' style={{borderRadius:"48% 52% 49% 51% / 81% 76% 24% 19% "}}>
                     <p className='text-center text-white  py-12 text-6xl'><i class="fa-solid fa-palette"></i></p>
                   </div>
                   <div className='my-5'>

                   <h1 className='text-center font-ubuntu text-xl font-bold mt-3'>APP DESIGN & DEVELOPMENT</h1>
                   <p className='text-center font-ubuntu text-md font-medium mt-1 px-16'>In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque.</p>
                   </div>
                     </div>

                     
                 
                 
                   
            </div>
    </div>
  )
}

export default Card