import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Skill from './Components/Skill'
import About from './Components/About'

const App = () => {
  return (
    <div className='container mx-auto'>
      <Navbar/>
      <Home/>
      <About/>
      <Skill/>
    </div>
  )
}

export default App
