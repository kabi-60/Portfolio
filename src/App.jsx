import React from 'react'
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Skills from './Component/Skills/Skills'
import Works from './Component/Works/Works'
import Project from './Component/Project/Project'
import Footer from './Component/Footer/Footer'
// import {Card, CardFooter, Image, Button} from "@nextui-org/react";


const App = () => {
   return (
      <div>
         <Header />
         <Home />
            <Skills />
            {/* <About /> */}
             <Project/>
            <Works/>
             <Footer/> 
         {/* <Card /> */}
      </div>
   )
}

export default App
