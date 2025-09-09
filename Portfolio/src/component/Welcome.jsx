import React, { useEffect, useState } from 'react'
import welpic from "../component/myimg.png"
import { useNavigate } from 'react-router';
import gms_pdf from './MUHAMMAD-AFZAL.pdf';
import gsap from 'gsap';

export default function Welcome() {
  const navigate = useNavigate();
  
  useEffect(()=>{
    const tl =gsap.timeline()
    tl.to("#intro1",{
      
      opacity:1,
      duration:0.5,
    })
    tl.to("#name",{
      
      opacity:1,
      duration:0.5,
    })
    tl.to("#develp",{
     
      opacity:1,
      duration:0.5,
    })
    tl.to("#button",{
     
      opacity:1,
      duration:0.5,
    })
    tl.to("#pic",{
      opacity:1,
      duration:0.5,
    })
    

  },[])
  
  
  return (
    <div className='bg-[#1F2544] h-screen pb-5'>
        <div className='text-center mt-10'>
            <p id='intro1' className=' text-sm font-extrabold p-2 text-slate-100 opacity-5'>Hello, I'm</p>
            <p id='name' className=' text-3xl p-2 font-bold font-serif text-slate-400 opacity-0 '>Afzal jutt</p>
            <p id='develp' className='intro1 text-[13px] text-slate-200 opacity-0'>MERN Stack Developer</p>
            <div id='button' className='my-5 opacity-0'> 
                <a href={gms_pdf} download className="px-4 py-2 border border-slate-400 rounded-lg mx-2 text-sm text-slate-400 font-serif">Download CV</a>
                <button onClick={() => { navigate("about") }} className='px-4 py-2 border border-slate-400 rounded-lg text-sm text-slate-700 font-serif bg-slate-200 '>About</button>
                
                
            </div>
            <div id='pic' className='opacity-0 bg-gradient-to-t from-[#0A1D56] to-[#492E87] h-auto lg:w-[24vw] md:w-[28vw] min-[310px]:w-[60vw] align-middle m-auto rounded-t-full mt-10'>
                <img src={welpic} alt="" className=' h-[18rem] mx-auto w-auto pt-8'/>
            </div>
        </div>

    </div>
  )
}

