import React, { useEffect } from 'react'
import chat from "./2023-12-18.png"
import textgm from "./textgm.png"
import todo from "./todo.png"
import parallax from "./Parallax.png"
import newsgm from "./newsgm.png"
import catering from "./Catering2.png"
import band from "./band1.png"
import Architect from "./Arcitect.png"
import Anadearmas from "./Anadearmas.png" 
import Academia from "./Academia.png"
import AbSons from './AbSons.png'
import Edurite from './EduriteCons.png'
import Icouncel from './Icouncel.png'
import { useNavigate } from 'react-router-dom';

import gsap from 'gsap'
import WorkBox from './WorkBox'
export default function Recent_work() {

  const navigate =useNavigate();

    useEffect(()=>{
        const tl=gsap.timeline()
        tl.to("#intro1",{
            opacity:1,
            duration:0.5,
        })
        tl.to("#name",{
            opacity:1,
            duration:0.7,
        })
        tl.to("#work",{
            opacity:1,
            duration:1,
        })
    },[])
  return (
    <div className='bg-[#1F2544] h-full pb-5'>
        <div className='text-center text-white my-10'>
            <p id='intro1' className='opacity-0 text-[10px] text-slate-400 text-sans'>My Portfolio</p>
            <p id='name' className='opacity-0 text-lg font-sans font-bold text-slate-300'>Recent Works</p>
        </div>
        <div  id='work' className='opacity-0 flex gap-12 justify-center '>
           <a href="https://abdullahsons.netlify.app/"> <WorkBox namm="Abdullah Sons" des="Abdullah Sons: Quality rubber seal manufacturers ensuring durability and precision engineering." pic={AbSons}/>  </a> 
           <a href="https://edurite-consulting.com/">  <WorkBox namm="Edurite Consulting" des="Edurite Consulting: Expert foreign study visa guidance for global education success" pic={Edurite}/></a> 
            <WorkBox namm="Icouncel" des="Icouncel Expert foreign study visa guidance for global education success" pic={Icouncel}/>
        </div>
        <div id='work' className='opacity-0 flex gap-12 justify-center mt-8 mb-0'>
            <WorkBox namm="Chatify" des="An Encrypted Chat app used to Communicate with Friends & Family" pic={chat}/>
            <WorkBox namm="Text-Gm App" des="A text editor app used to edit text in different manner & having multiple toggle themes" pic={textgm}/>
            <WorkBox namm="Todo App" des="A todo list reminder app used for storing Activities" pic={todo}/>
        </div>
        {/*-------------------------2nd row 2_1-----------------------------------------*/}
        <div id='work' className='opacity-0 flex gap-12 justify-center mt-8 mb-0'>
            <WorkBox namm="Parallax App" des="A parallax app used to create immersive user experiences by utilizing layered scrolling effects" pic={parallax}/>
            <WorkBox namm="News-Gm App" des="A news app which provide facility to watch latest news" pic={newsgm}/>
            <WorkBox namm="Catering App" des="A catering app which provide facility to streamlines event planning by offering customizable menus, real-time availability, and seamless booking" pic={catering}/>
        </div>
        {/* ----------------------------------------------3rd row--------------------------------------------- */}
        <div id='work' className='opacity-0 flex gap-12 justify-center mt-8 mb-0'>
        <WorkBox namm="Academia of Development" des="An Software-House Web application which provide facility to students to enroll in different cources offered by Software house" pic={Academia}/>
        <WorkBox namm="Arctitect App" des="An architect firm app which simplifies project management with intuitive design tools, collaborative features, and seamless document sharing." pic={Architect}/>
        <WorkBox namm="Animated page" des="An animated page that use Sherry js for amazing Animation " pic={Anadearmas}/>
        </div>

    </div>
  )
}
