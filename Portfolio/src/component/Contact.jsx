import { IconButton } from '@mui/material'
import React, { useEffect } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import gsap from 'gsap';

export default function Contact() {
  useEffect(()=>{
    const tl=gsap.timeline()
    tl.to("#intro",{
      opacity:1,
      duration:0.7,
    })
    tl.to("#name",{
      opacity:1,
      duration:0.7,
    })
    tl.to("#talk",{
      opacity:1,
      duration:0.7,
    })
    tl.to("#box",{
      opacity:1,
      duration:0.7,
    })
  },[])
  return (
    <div className='bg-[#1F2544] h-screen pb-5'>
        <div className='text-center text-white my-10'>
            <p id='intro' className='opacity-0 text-[10px] text-slate-400 text-sans'>Get in touch</p>
            <p id='name' className='opacity-0 text-lg font-sans font-bold text-slate-300'>Contact Me</p>
        </div>
        <div className='main  flex justify-center '>
            <div className='talk '>
             <p id='talk' className='opacity-0 font-sans font-semibold text-center text-slate-200'>Talk to me</p>
{/*----------------------left 1st cont------------------------------*/}
             <div id='box' className='opacity-0 bg-[#2D3250] rounded-lg text-center px-20 py-3 mt-4 min-[310px]:px-10'>
                <IconButton><EmailIcon className='text-slate-200'/></IconButton>
                <p className='font-sans font-semibold text-slate-200'>Email</p>
                <p className='text-slate-300 text-[12px]'>afzalofficial.dev@gmail.com</p>
                {/* <div className='flex text-center justify-center'>
                <p className='text-slate-500 text-[12px]'>Write me</p>
                <IconButton className='h-1'><PlayArrowIcon className='text-slate-200 '/></IconButton>
                </div> */}
             </div>
             {/*----------------------left 2nd cont------------------------------*/}
             <div id='box' className='opacity-0 bg-[#2D3250] rounded-lg text-center px-20 py-3 mt-4 min-[310px]:px-10'>
                <IconButton><WhatsAppIcon className='text-slate-200'/></IconButton>
                <p className='font-sans font-semibold text-slate-200'>Whatsapp</p>
                <p className='text-slate-300 text-[12px]'>+92 307 0701703</p>
                {/* <div className='flex text-center justify-center'>
                <p className='text-slate-500 text-[12px]'>Write me</p>
                <IconButton className='h-1'><PlayArrowIcon className='text-slate-200 '/></IconButton>
                </div> */}
             </div>
             {/*----------------------left 3rd cont------------------------------*/}
             <div id='box' className='opacity-0 bg-[#2D3250] rounded-lg text-center px-20 py-3 mt-4 min-[310px]:px-10'>
                <IconButton><LinkedInIcon className='text-slate-200'/></IconButton>
                <p className='font-sans font-semibold text-slate-200'>Linkden</p>
                <a href="http://www.linkedin.com/in/muhammad-afzal-818636311" className='text-slate-300 text-[12px]'>http://www.linkedin.com/in/muhammad-afzal-818636311</a>
                {/* <div className='flex text-center justify-center'>
                <p className='text-slate-500 text-[12px]'>Write me</p>
                <IconButton className='h-1'><PlayArrowIcon className='text-slate-200 '/></IconButton>
                </div> */}
             </div>


            </div>
            {/* <div className='text'>
             <p className='font-sans font-semibold text-center text-slate-200'>Write Me your Message</p>
             <form action="">
             <div>
                

            <div class=" px-3 mt-3">
            <label class="text-slate-400 text-xs mb-2 pt-5 " >
            Name
            </label>
            <input class="appearance-none block w-[30vw] bg-[#1F2544] text-slate-400 border border-slate-200 rounded-lg py-3 px-4 leading-tight focus:outline-none " id="name" type="text" placeholder="Enter name"/>
            </div>

            <div class=" px-3 mt-3">
            <label class="text-slate-400 text-xs mb-2 pt-5 " >
            Mail
            </label>
            <input class="appearance-none block w-full bg-[#1F2544] text-slate-400 border border-slate-200 rounded-lg py-3 px-4 leading-tight focus:outline-none " id="name" type="text" placeholder="Enter Email"/>
            </div>
            <div class=" px-3 mt-3">
            <label class="text-slate-400 text-xs mb-2 pt-5 " >
            Message
            </label>
            <textarea className=" h-36 appearance-none block w-full bg-[#1F2544] text-slate-400 border border-slate-200 rounded-lg py-3 px-4 leading-tight focus:outline-none " id="name" type="" placeholder="Write ur Message"></textarea>
            </div>
            <button className='bg-slate-300 p-2 rounded-lg m-3 text-slate-600'>Send Message</button>



            </div>
             </form>
             
            </div> */}
        </div>
    </div>
  )
}
