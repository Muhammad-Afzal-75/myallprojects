import React, { useState } from 'react'
import Nav from './component/Nav'
import Welcome from './component/Welcome'
import About from './component/About'
import Experience from './component/Experience'
import Recent_work from './component/Recent_work'
import Contact from './component/Contact'
import { useRef } from 'react'
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  const ref = useRef(null);

  return(
<>
<div ref={ref}  className='main bg-[#1F2544] h-full w-screen relative text-white'>
      
    <Nav reference={ref}/> 

    <Routes>
    <Route path='/' element={<Welcome/>}/>
    
    <Route path='about' element={<About />}/>
    
    <Route path='experience' element={<Experience/>}/>

    <Route path='recent_work' element={<Recent_work/>}/>
    
    <Route path='contact' element={<Contact/>}/>

    </Routes>

    </div>
    </>

  ) 
  
}

export default App

