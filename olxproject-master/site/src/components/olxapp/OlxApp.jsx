import React from 'react'
import olxapp from '../../assets/image/olxapp.jpg'
import app1 from "../../assets/image/app1.svg"
import app2 from '../../assets/image/app2.svg'
import app3 from '../../assets/image/app3.svg'
function OlxApp() {
    return (
        < div className='mt-5'>
            <div className='d-flex justify-content-center'>
                <img src={olxapp} alt="" />
                <div className=' border-end  p-3 ms-4 '><h1>TRY THE OLX APP</h1>
                    <p className='mt-4'>Buy, sell and find just about anything using <br /> the app on your mobile.</p></div>
                <div className='mt-5 ms-5'><h3>GET YOUR APP TODAY</h3>
                    <div className='d-flex mt-3 gap-3'>
                        <div><img src={app1} width={'110px'} alt="" /></div>
                        <div><img src={app2} width={'110px'} alt="" /></div>
                        <div><img src={app3} width={'110px'} alt="" /></div>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default OlxApp
