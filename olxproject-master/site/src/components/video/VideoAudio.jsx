import React from 'react'
import video1 from '../../assets/image/video1.jpeg'
import video2 from '../../assets/image/video2.jpeg'
import video3 from '../../assets/image/video3.jpeg'
import video4 from '../../assets/image/video4.jpeg'
import { FaRegHeart } from "react-icons/fa";
function VideoAudio() {
    const videocard = [
        {
            id: 1,
            path: video1,
            price: "90",
            icon: <FaRegHeart />,
            description: "realme gt master edition",
            address: "mall road lahore",
        },
        {
            id: 2,
            path: video2,
            price: "90",
            icon: <FaRegHeart />,
            description: "realme gt master edition",
            address: "mall road lahore",
        },
        {
            id: 3,
            path: video3,
            price: "90",
            icon: <FaRegHeart />,
            description: "realme gt master edition",
            address: "mall road lahore",
        },
        {
            id: 4,
            path: video4,
            price: "90",
            icon: <FaRegHeart />,
            description: "realme gt master edition",
            address: "mall road lahore",
        }
     
     
    ]
    
  return (
    <>
       <div className='container'>
                <div>
                    <h1>Video-Audios</h1>
                </div>
                <div className='d-flex gap-3' >
                    {
                        videocard.map(item => {
                            return <div className="card" style={{ width: "22rem" }}>
                                <img src={item.path} className="card-img-top" height={'200px'} alt="..." />
                                <div className="card-body">
                                    <div className='d-flex justify-content-between'><p>{item.price}</p>
                                    <div><p>{item.icon}</p></div></div>
                                    <div>{item.description}</div>
                                    <p>{item.address}</p>
                                    
                                </div>
                            </div>

                        })
                    }
                </div>
            </div>

    </>
  )
}

export default VideoAudio
