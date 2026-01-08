import React from 'react'

const Footer = () => {
   return (
      <footer class="container mx-auto rounded-lg bg-white shadow-lg">
         <div class="mx-auto w-full p-4 md:py-8">
            <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700 " />
            <div class="flex items-center justify-between">
               <a
                  href="https://flowbite.com/"
                  class="mb-4 flex items-center"
               >
                  <span class="mt-5 text-lg md:text-2xl font-bold text-black">
                     Kabi <span className="text-[10px]">🟠</span>
                  </span>
               </a>
               <span class=" text-sm  text-black sm:text-center ">
                  © 2024{' '}
                  <a href="https://flowbite.com/" class="hover:underline">
                     Kabi
                  </a>
                  . All Rights Reserved.
               </span>
            </div>
            {/* <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
         </div>
      </footer>
   )
}

export default Footer
