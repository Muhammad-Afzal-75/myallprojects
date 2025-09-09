import React, { useEffect } from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
import { IconButton } from '@mui/material';
import gsap from 'gsap';
export default function Experience() {
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
        tl.to("#front",{
            opacity:1,
            duration:0.5,
        })
        
    },[])
  return (
    <div className='bg-[#1F2544] h-screen pb-5'>
      <div className='text-center text-white mt-10'>
            <p id='intro1' className='text-[10px] text-slate-400 text-sans opacity-0'>My Abilities</p>
            <p id='name' className='opacity-0 text-lg font-sans font-bold text-slate-300 mb-4'>My Experience</p>
        </div>
        {/* ---------------------------Abilities---------------------------------- */}
        <div className='flex justify-center gap-16 mt-6'> 
        <div className='text-slate-200  flex justify-center gap-7'>
            {/*----------------------------front-end-------------------------------------------*/}
            <div id='front' className='opacity-0 rounded-2xl bg-[#2D3250] text-center p-3'>
            {/* <p className='text-lg font-sans font-bold text-slate-300'>Frontend</p>
            <p className='text-lg font-sans font-bold text-slate-300'>Development</p> */}
            
            <div className='flex lg:gap-24 md:gap-20 min-[320px]:gap-6 p-5'>

                <div className='flex '>
                    <div>
                    <IconButton><VerifiedIcon className='text-slate-300'/></IconButton>
                    </div>
                    <div>
                    <p className='font-semibold'>HTML</p>
                    <p className='font-thin text-sm'>intermediate</p>
                    </div>
                </div>

                <div className='flex'>
                    <div>
                    <IconButton><VerifiedIcon className='text-slate-300'/></IconButton>
                    </div>
                    <div>
                    <p className='font-semibold'>CSS</p>
                    <p className='font-thin text-sm'>intermediate</p>
                    </div>
                </div>

            </div>
{/*------------------------------2nd line----------------------------------------*/}

<div className='flex lg:gap-24 md:gap-20 min-[320px]:gap-6 p-5'>

<div className='flex '>
    <div>
    <IconButton><VerifiedIcon className='text-slate-300'/></IconButton>
    </div>
    <div>
    <p className='font-semibold'>Javascript</p>
    <p className='font-thin text-sm'>Advanced</p>
    </div>
</div>

<div className='flex'>
    <div>
    <IconButton><VerifiedIcon className='text-slate-300'/></IconButton>
    </div>
    <div>
    <p className='font-semibold'>Git</p>
    <p className='font-thin text-sm'>intermediate</p>
    </div>
</div>

</div>

{/*------------------------------3rd line------------------------------------*/}
<div className='flex lg:gap-24 md:gap-20 min-[320px]:gap-6 p-5'>

<div className='flex '>
    <div>
    <IconButton><VerifiedIcon className='text-slate-300'/></IconButton>
    </div>
    <div>
    <p className='font-semibold'>Tailwind</p>
    <p className='font-thin text-sm'>Advanced</p>
    </div>
</div>

<div className='flex'>
    <div>
    <IconButton><VerifiedIcon className='text-slate-300'/></IconButton>
    </div>
    <div>
    <p className='font-semibold'>React</p>
    <p className='font-thin text-sm'>Advanced</p>
    </div>
</div>

</div>
{/*-------------------------------------------------------------------*/}
                 </div>      
        </div>

        <div className='text-slate-200  flex justify-center gap-7'>
            {/*----------------------------Back-end-------------------------------------------*/}
            <div id='front' className='opacity-0 rounded-2xl bg-[#2D3250] text-center p-3'>
            {/* <p className='text-lg font-sans font-bold text-slate-300'>Backend</p>
            <p className='text-lg font-sans font-bold text-slate-300'>Development</p> */}
            
            <div className='flex lg:gap-24 md:gap-20 min-[320px]:gap-6 p-5'>

                <div className='flex '>
                    <div>
                    <IconButton><VerifiedIcon className='text-slate-300'/></IconButton>
                    </div>
                    <div>
                    <p className='font-semibold'>Node js</p>
                    <p className='font-thin text-sm'>intermediate</p>
                    </div>
                </div>

                <div className='flex'>
                    <div>
                    <IconButton><VerifiedIcon className='text-slate-300'/></IconButton>
                    </div>
                    <div>
                    <p className='font-semibold'>Express js</p>
                    <p className='font-thin text-sm'>intermediate</p>
                    </div>
                </div>

            </div>
{/*------------------------------2nd line----------------------------------------*/}

<div className='flex lg:gap-24 md:gap-20 min-[320px]:gap-6 p-5'>

<div className='flex '>
    <div>
    <IconButton><VerifiedIcon className='text-slate-300'/></IconButton>
    </div>
    <div>
    <p className='font-semibold'>Mongo DB</p>
    <p className='font-thin text-sm'>intermediate</p>
    </div>
</div>

<div className='flex'>
    <div>
    <IconButton><VerifiedIcon className='text-slate-300'/></IconButton>
    </div>
    <div>
    <p className='font-semibold'>Redux</p>
    <p className='font-thin text-sm'>intermediate</p>
    </div>
</div>

</div>

{/*------------------------------3rd line------------------------------------*/}
<div className='flex lg:gap-24 md:gap-20 min-[320px]:gap-6 p-5'>

<div className='flex '>
    <div>
    <IconButton><VerifiedIcon className='text-slate-300'/></IconButton>
    </div>
    <div>
    <p className='font-semibold'>Bootstrap</p>
    <p className='font-thin text-sm'>intermediate</p>
    </div>
</div>

<div className='flex'>
    <div>
    <IconButton><VerifiedIcon className='text-slate-300'/></IconButton>
    </div>
    <div>
    <p className='font-semibold'>Material Ui</p>
    <p className='font-thin text-sm'>intermediate</p>
    </div>
</div>

</div>
{/*-------------------------------------------------------------------*/}
                 </div>


                
        </div>

        </div>
        
    </div>
  )
}
