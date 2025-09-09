import React from 'react'

export default function WorkBox(props) {
  return (
    <div className='bg-[#2D3250] rounded-lg p-4 '>
                    <img src={props.pic} alt="" className='h-[25vh] w-auto rounded-lg m-auto'/>
                    <p className='pt-3 font-sans font-semibold text-slate-200'>{props.namm}</p>
                    <p className='pt-2 font-sans text-slate-400 text-[9px] w-[17rem]'>{props.des}</p>
   </div>
  )
}
