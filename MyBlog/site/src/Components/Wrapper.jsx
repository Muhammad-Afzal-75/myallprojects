import React from 'react'
import a1 from '../images/a1.jpeg'
import a2 from '../images/a2.jpeg'
import a3 from '../images/a3.jpeg'


function Wrapper() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-7">
                    <div className="card" >

                        <div style={{ overflow: 'hidden' }}>
                            <img src={a1} className="card-img-top post-thumb " alt="..." />
                        </div>


                        <div className="card-body text-center bg-black">
                            <span className='Health'>Health</span>
                            <h2 class="post-title"><a href="#">Discovering Sources of Inspiration</a></h2>
                            <div className="card-text">
                                <p className='m-0' >
                                    It bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen. Its dissimilar invitation ten has discretion unreserved. Had you him humoured jointure ask expenses learning.…
                                </p>
                                <span className='authr'>by Sora Blogging TipsFebruary 25, 2023</span>

                            </div>

                        </div>
                    </div>

                </div>
                <div className="col-md-5">
                    <div className="row gap-4">
                        <div className="col md-12">
                            <div className="card " style={{position:'relative'}}>
                                <div style={{ overflow: 'hidden' }}>
                                    <img src={a2} className="card-img-top post-thumb " alt="..." />
                                </div>
                                <div className="text-body px-4 py-4">
                                <span className='Health'>Health</span>
                                <h4 class="post-title " ><a href="#">Master the Fundamentals, Master Design</a></h4>

                                </div>

                            </div>


                        </div>
                        <div className="col-md-12">
                            <div className="card">
                                <div style={{ overflow: 'hidden' }}>
                                    <img src={a3} className="card-img-top post-thumb " alt="..." />
                                </div>
                                <div className="text-body px-4 py-4">
                                <span className='Health'>LifeStyle</span>
                                <h4 class="post-title " ><a href="#">The More Creativity You Use, The More You...</a></h4>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wrapper