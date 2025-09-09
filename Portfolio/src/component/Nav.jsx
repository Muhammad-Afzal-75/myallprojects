import React, { useEffect } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router';
import { motion } from "framer-motion"
import gsap from 'gsap';

export default function Nav({ reference }) {
  const navigate = useNavigate();
  useEffect(()=>{
const tl = gsap.timeline()
tl.to("#nav",{
x:430,
duration:0,
})
tl.to("#nav",{
  opacity:1,
  duration:1.5,
})
  },["#button"])
  return (
    <div className='text-white flex justify-between relative '>
      <div className='logo lg:mx-36 md:mx-6 min-[320px]:mx-32 p-3 '>
        <p className='italic font-serif '>AFZAL JUTT</p>
      </div>
      <motion.div drag dragConstraints={reference} id='nav' className="opacity-0 main_nav bg-[#2D3250] flex-col gap-5 p-3 px-5 rounded-3xl shadow-black shadow-md absolute">
        <IconButton id='button' onClick={() => { navigate("/") }}><HomeIcon className='text-white' /></IconButton>
        <IconButton id='button' onClick={() => { navigate("about") }}> <PersonIcon className='text-white' /></IconButton>
        <IconButton id='button' onClick={() => { navigate("experience") }}><PersonalVideoIcon className='text-white' /></IconButton>
        <IconButton id='button' onClick={() => { navigate("recent_work") }}><BusinessCenterIcon className='text-white' /></IconButton>
        <IconButton id='button' onClick={() => { navigate("contact") }}><MessageIcon className='text-white' /></IconButton>
      </motion.div>

      {/* <motion.div
        whileHover={{ scale: 1.2, rotate: 360 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%"
        }} className="dark mx-36 p-3">
        <IconButton><Brightness3Icon className='text-white' /></IconButton>
      </motion.div> */}

      {/* const container = {
      hidden: { opacity: 1, scale: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2
        }
      }
    }
      
    const item = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1
      }
    }*/}

    </div>
  )
}
