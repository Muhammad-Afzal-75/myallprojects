import React from 'react'
import instagram from '../../assets/image/instagram.svg'
import facebook from '../../assets/image/facebook.svg'
import youtube from '../../assets/image/youtube.svg'
import twitter from '../../assets/image/twitter.svg'
import app1 from "../../assets/image/app1.svg"
import app2 from '../../assets/image/app2.svg'
import app3 from '../../assets/image/app3.svg'

function Footer() {
  return (
    <>
      <div className='container'>
        <div className='row d-flex gap-4 mb-5'>
          <div className='col-md-2 '>
            <div >
              <ul style={{ listStyle: "none", }}>
                <li><h6>POPULAR CATEGORY</h6></li>
                <li><a style={{ textDecoration: "none", color: "rgba(0, 47, 52, .64)" }} href="">Cars</a></li>
                <li><a style={{ textDecoration: "none", color: "rgba(0, 47, 52, .64)" }} href="">Flats for rent</a></li>
                <li><a style={{ textDecoration: "none", color: "rgba(0, 47, 52, .64)" }} href="">Mobile Phones</a></li>
                <li><a style={{ textDecoration: "none", color: "rgba(0, 47, 52, .64)" }} href="">Jobs</a></li>
              </ul>
            </div>
          </div>

          <div className='col-md-2'>
            <div >
              <ul style={{ listStyle: "none", }}>
                <li><h6>TRENDING SEARCHES</h6></li>
                <li><a style={{ textDecoration: "none", color: "rgba(0, 47, 52, .64)" }} href="">Bikes</a></li>
                <li><a style={{ textDecoration: "none", color: "rgba(0, 47, 52, .64)" }} href="">Watches</a></li>
                <li><a style={{ textDecoration: "none", color: "rgba(0, 47, 52, .64)" }} href="">Books</a></li>
                <li><a style={{ textDecoration: "none", color: "rgba(0, 47, 52, .64)" }} href="">Dogs</a></li>
              </ul>
            </div>
          </div>

          <div className='col-md-2'>
            <div >
              <ul style={{ listStyle: "none", }}>
                <li><h6>ABOUT US</h6></li>
                <li><a style={{ textDecoration: "none", color: "rgba(0, 47, 52, .64)" }} href="">About Dubizzle Group</a></li>
                <li><a style={{ textDecoration: "none", color: "rgba(0, 47, 52, .64)" }} href="">OLX Blog</a></li>
                <li><a style={{ textDecoration: "none", color: "rgba(0, 47, 52, .64)" }} href="">Contact Us</a></li>
                <li><a style={{ textDecoration: "none", color: "rgba(0, 47, 52, .64)" }} href="">OLX for Bussiness</a></li>
              </ul>
            </div>
          </div>


          <div className='col-md-2'>
            <div >
              <ul style={{ listStyle: "none", }}>
                <li><h6>OLX</h6></li>
                <li><a style={{ textDecoration: "none", color: "rgba(0, 47, 52, .64)" }} href="">Help</a></li>
                <li><a style={{ textDecoration: "none", color: "rgba(0, 47, 52, .64)" }} href="">Sitemap</a></li>
                <li><a style={{ textDecoration: "none", color: "rgba(0, 47, 52, .64)" }} href="">Teerms of use</a></li>
                <li><a style={{ textDecoration: "none", color: "rgba(0, 47, 52, .64)" }} href="">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className='col-md-2'>
            <div >
              <ul style={{ listStyle: "none", }}>
                <h6>FOLLOW US</h6>
                <div>
                  <div className='d-flex gap-2'><img src={facebook} width={'30px'} alt="" />
                    <img src={twitter} width={'30px'} alt="" />
                    <img src={instagram} width={'30px'} alt="" />
                    <img src={youtube} width={'30px'} alt="" />
                  </div>
                </div>

                <div className='d-flex gap-2 mt-4'>
                <img src={app1} width={'80px'} alt="" />
                <img src={app2} width={'80px'} alt="" />
                <img src={app2} width={'80px'} alt="" />
              </div>
              </ul>
             
            </div>
          </div>

        </div>
      </div>


    </>
  )
}

export default Footer
