import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className='bg-[#171717] my-5 py-3 rounded-full'>
            <div className='flex justify-between mx-3'>
                <div className='flex items-center '>
                    <ul className='flex text-white text-lg '>
                        <li className='hover:bg-[#577e80] hover:font-bold px-10 py-4 rounded-full'>Home </li>
                        <li className='hover:bg-[#577e80] hover:font-bold px-10 py-4 rounded-full'>About </li>
                        <li className='hover:bg-[#577e80] hover:font-bold px-10 py-4 rounded-full'>Service </li>
                    </ul>
                </div>
                <div className='flex items-center  space-x-5'>
                <img src={logo} alt="" />
                <h1 className='text-white uppercase font-extrabold text-2xl  '>kabi</h1>
                </div>
                <div className='flex items-center'>

                <ul className='flex text-white text-lg '>

                        <li className='hover:bg-[#577e80] hover:font-bold px-10 py-4 rounded-full'>Resume </li>
                        <li className='hover:bg-[#577e80] hover:font-bold px-10 py-4 rounded-full'>Project </li>
                        <li className='hover:bg-[#577e80] hover:font-bold px-10 py-4 rounded-full'>Contact </li>
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default Navbar
