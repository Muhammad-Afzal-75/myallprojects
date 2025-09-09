import React from 'react'
import tab1 from '../../assets/image/tab1.jpeg'
import tab2 from '../../assets/image/tab2.jpeg'
import tab3 from '../../assets/image/tab3.jpeg'
import tab4 from '../../assets/image/tab4.jpeg'
import { FaRegHeart } from "react-icons/fa";
function Tablets() {
    const tablecard = [
        {
            id: 1,
            path: tab1,
            price: "90",
            icon: <FaRegHeart />,
            description: "realme gt master edition",
            address: "mall road lahore",
        },
        {
            id: 2,
            path: tab2,
            price: "90",
            icon: <FaRegHeart />,
            description: "realme gt master edition",
            address: "mall road lahore",
        },
        {
            id: 3,
            path: tab3,
            price: "90",
            icon: <FaRegHeart />,
            description: "realme gt master edition",
            address: "mall road lahore",
        },
        {
            id: 4,
            path: tab4,
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
                    <h1>Tablets</h1>
                </div>
                <div className='d-flex gap-3' >
                    {
                        tablecard.map(item => {
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

export default Tablets
