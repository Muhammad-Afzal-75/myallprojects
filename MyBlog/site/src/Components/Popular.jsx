import React from 'react'
import img1 from '../images/a4.jpg'
import img2 from '../images/a5.jpg'
import img3 from '../images/a6.jpg'
import img4 from '../images/a7.jpg'
import img5 from '../images/a8.jpg'
import img6 from '../images/a9.jpg'
function Popular() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-2   ">
                    <div className="card1 " style={{ position: 'relative' }}>
                        <div  style={{ overflow: 'hidden' }}>
                            <img  src={img1}  alt="..." />
                            <div className="text-body ">
                            <span className='Healthh'>Health</span>


                        </div>
                        </div>
                        

                    </div>
                </div>
                <div className="col-12 col-md-2">
                    <div className="card1 " style={{ position: 'relative' }}>
                        <div style={{ overflow: 'hidden' }}>
                            <img src= {img2}  alt="..." />
                        </div>
                        <div className="text-body ">
                            <span className='Healthh'>Health</span>


                        </div>

                    </div>
                </div>
                <div className="col-12 col-md-2">
                    <div className="card1 " style={{ position: 'relative' }}>
                        <div style={{ overflow: 'hidden' }}>
                            <img src= {img3}  alt="..." />
                        </div>
                        <div className="text-body">
                            <span className='Healthh'>Health</span>


                        </div>

                    </div>
                </div>
                <div className="col-12 col-md-2">
                    <div className="card1 " style={{ position: 'relative' }}>
                        <div style={{ overflow: 'hidden' }}>
                            <img src= {img4}  alt="..." />
                        </div>
                        <div className="text-body ">
                            <span className='Healthh'>Health</span>


                        </div>

                    </div>
                </div>
                <div className="col-12 col-md-2">
                    <div className="card1 " style={{ position: 'relative' }}>
                        <div style={{ overflow: 'hidden' }}>
                            <img src= {img5}  alt="..." />
                        </div>
                        <div className="text-body ">
                            <span className='Healthh'>Health</span>


                        </div>

                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card1 " style={{ position: 'relative' }}>
                        <div style={{ overflow: 'hidden' }}>
                            <img src= {img6}  alt="..." />
                        </div>
                        <div className="text-body ">
                            <span className='Healthh'>Health</span>


                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Popular