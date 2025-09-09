import React from 'react'

const Hotel = ({  title, text, btntext,imgsrc}) => {
  return (
    <>
      <div className='hotelCards'>
        <img src={imgsrc} alt="" width="300px" height="300px"/>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className='btn'>
            <button>{btntext}</button>
        </div>

      </div>
    </>
  )
}

export default Hotel
