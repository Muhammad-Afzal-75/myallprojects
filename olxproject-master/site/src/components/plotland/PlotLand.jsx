import React from 'react'
import land1 from '../../assets/image/land1.jpeg'
import land2 from '../../assets/image/land2.jpeg'
import land3 from '../../assets/image/land3.jpeg'
import land4 from '../../assets/image/land4.jpeg'
import { FaRegHeart } from "react-icons/fa";
function PlotLand() {
    const plotcard = [
        {
            id: 1,
            path: land1,
            price: "90",
            icon: <FaRegHeart />,
            description: "realme gt master edition",
            address: "mall road lahore",
        },
        {
            id: 2,
            path: land2,
            price: "90",
            icon: <FaRegHeart />,
            description: "realme gt master edition",
            address: "mall road lahore",
        },
        {
            id: 3,
            path: land3,
            price: "90",
            icon: <FaRegHeart />,
            description: "realme gt master edition",
            address: "mall road lahore",
        },
        {
            id: 4,
            path: land4,
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
                    <h1>Land & Plots</h1>
                </div>
                <div className='d-flex gap-3' >
                    {
                        plotcard.map(item => {
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

export default PlotLand
