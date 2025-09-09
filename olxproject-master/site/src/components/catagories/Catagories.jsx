import React from 'react'
import img1 from '../../assets/image/img1.png'
import img2 from '../../assets/image/img2.png'
import img3 from '../../assets/image/img3.png'
import img4 from '../../assets/image/img4.png'
import img5 from '../../assets/image/img5.png'
import img6 from '../../assets/image/img6.png'
import img7 from '../../assets/image/img7.png'
import img8 from '../../assets/image/img8.png'
import img9 from '../../assets/image/img9.png'
import img10 from '../../assets/image/img10.png'
import img11 from '../../assets/image/img11.png'
import img12 from '../../assets/image/img12.png'
import img13 from '../../assets/image/img13.png'
import img14 from '../../assets/image/img14.png'

function Catagories() {
    const catagories = [
        {
            id: 1,
            path: img1,
            tittle: "Animals"
        },
        {
            id: 2,
            path: img2,
            tittle: "Bikes"
        },
        {
            id: 3,
            path: img3,
            tittle: "Books"
        },
        {
            id: 4,
            path: img4,
            tittle: " Agriculture"
        },
        {
            id: 5,
            path: img5,
            tittle: "Electronics "
        },
        {
            id: 6,
            path: img6,
            tittle: "Fashion"
        },
        {
            id: 7,
            path: img7,
            tittle: "Furniture"
        },
        {
            id: 8,
            path: img8,
            tittle: "Jobs"
        },
        {
            id: 9,
            path: img9,
            tittle: "Kids"
        },
        {
            id: 10,
            path: img10,
            tittle: "Mobiles"
        },
        {
            id: 11,
            path: img11,
            tittle: "Proporty For Rent"
        },
        {
            id: 12,
            path: img12,
            tittle: "Proporty For Sale"
        },
        {
            id: 13,
            path: img13,
            tittle: "Services"
        },
        {
            id: 14,
            path: img14,
            tittle: "Vehicles"
        },
    ]
    return (
        <>
            <div className='container'>
                <div>
                    <div className='mt-5'>
                        <h1>All categories</h1>
                    </div>
                    <div className='d-flex flex-wrap p-1 gap-5 mt-4'>
                        {catagories.map(item => (
                            <div key={item.id}>
                                <div className=''>
                                    <div className='d-flex justify-content-center align-items-center flex-column gap-2'><img src={item.path} width={'100px'} alt="" />
                                        <p className=''>{item.tittle}</p>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>



            </div>

        </>
    )
}

export default Catagories
