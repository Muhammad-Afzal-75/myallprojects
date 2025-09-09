import React, { useEffect } from 'react'
import about_pic from "../component/myimg.png"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router';
import gsap from 'gsap';

export default function About() {
    const navigate = useNavigate();
    useEffect(()=>{
        const tl=gsap.timeline()
        tl.to("#intro1",{
                opacity:1,
                duration:0.5,
             })
             tl.to("#about",{
                opacity:1,
                duration:0.7,
             })
             tl.to("#pic",{
                opacity:1,
                duration:0.3,
             })
             tl.to("#experience",{
                opacity:1,
                duration:0.7,
             })
    },[])
  return (
    <div className='bg-[#1F2544] h-screen pb-5'>
        <div className='text-center text-white my-10'>
            <p id='intro1' className='text-[10px] text-slate-400 text-sans opacity-0'>My intro</p>
            <p id='about' className='text-lg font-sans font-bold text-slate-300 opacity-0'>About Me</p>
        </div>
        <div className='flex justify-center gap-14'>
            <div id='pic' className='img_cont opacity-0 hidden md:block'>
                <img src={about_pic} alt="" className='h-72 w-auto '/>
            </div>
            <div id='experience' className='text_cont opacity-0'>
            <div  className='flex md:gap-14 min-[310px]:gap-2'>
                <div className='bg-[#2D3250] px-8 py-2 rounded-lg text-center'>
                    <IconButton>
                    <WorkspacePremiumIcon className='text-slate-300'/>
                    </IconButton>
                    <p className=' font-mono font-bold text-sm text-slate-200'>Experience</p>
                    <p className='text-[10px] text-slate-400'>Fresher</p>
                </div>
                <div className='bg-[#2D3250] px-8 py-2 rounded-lg text-center'>
                    <IconButton>
                    <HeadsetMicIcon className='text-slate-300'/>
                    </IconButton>
                    <p className=' font-mono font-bold text-sm text-slate-200'>Support</p>
                    <p className='text-[10px] text-slate-400'>24/7</p>
                </div>
            </div>
            <p className='text-slate-400 mt-8 w-96'>Hi! I'm a passionate MERN Stack Developer with a strong foundation in building scalable web applications using MongoDB, Express.js, React, and Node.js. I love turning ideas into reality through clean, efficient code and intuitive user interfaces. Whether it's developing RESTful APIs, handling complex backend logic, or crafting smooth front-end experiences, I enjoy solving problems and continuously learning new technologies.

 

Let’s build something awesome together!</p>
            <button  onClick={() => { navigate("/contact") }} className='bg-slate-700 p-3 text-slate-200 rounded-lg mt-8 hover:shadow-sm hover:shadow-slate-200'>Contact Me</button>
            </div>
        </div>
    </div>
  )
}
