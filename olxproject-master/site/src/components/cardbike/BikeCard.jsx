import React, { useEffect, useState } from 'react'
// import bike1 from '../../assets/image/bike1.jpeg'
// import bike2 from '../../assets/image/bike2.jpeg'
// import bike3 from '../../assets/image/bike3.jpeg'
// import bike4 from '../../assets/image/bike4.jpeg'
import { FaRegHeart } from "react-icons/fa";
import axios from 'axios'

function BikeCard() {
    const [bikecard, setBikecard] = useState([]);
    // const bikecard = [
    //     {
    //         id: 1,
    //         path: bike1,
    //         price: "90",
    //         icon: <FaRegHeart />,
    //         description: "realme gt master edition",
    //         address: "mall road lahore",
    //     },
    //     {
    //         id: 2,
    //         path: bike2,
    //         price: "90",
    //         icon: <FaRegHeart />,
    //         description: "realme gt master edition",
    //         address: "mall road lahore",
    //     },
    //     {
    //         id: 3,
    //         path: bike3,
    //         price: "90",
    //         icon: <FaRegHeart />,
    //         description: "realme gt master edition",
    //         address: "mall road lahore",
    //     },
    //     {
    //         id: 4,
    //         path: bike4,
    //         price: "90",
    //         icon: <FaRegHeart />,
    //         description: "realme gt master edition",
    //         address: "mall road lahore",
    //     }
     
     
    // ]
    useEffect(() => {
        
        axios.get('http://localhost:4001/post/allpost')
            .then(res => {
                console.log(res.data.posts);
                setBikecard(res.data.posts);
            });

    }, [])
    
  return (
    <>
       <div className='container'>
                <div>
                    <h1>Bikes & Motorcycles</h1>
                </div>
                <div className='d-flex gap-3' >
                    {
                        bikecard.map(item => {
                            return <div className="card" style={{ width: "22rem" }}>
                                <img src={item.imageUrl} className="card-img-top" height={'200px'} alt="..." />
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

export default BikeCard
