import React from 'react'
import hero from '../../assets/image/hero.jpg'

function Hero() {
    return (
        < div className='container'>
            <div
                id="carouselExampleAutoplaying"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={hero} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={hero} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={hero} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev"
                >
                   
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next"
                >
                   
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </div>
    )
}

export default Hero
