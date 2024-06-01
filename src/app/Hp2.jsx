"use client";
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function hp2() {
    useEffect(() => {
        AOS.init({
             duration: 800,
             once: false,
           })
     }, [])
    return (
      <>
      <div className="hp2">
      <div className="hp21">
          <h1 data-aos="fade-down">TAKE THE WORRY OUT OF LIFE WITH <br /><span style={{color:"rgba(196, 220, 14, 0.995)"}}>INSURANCE</span> PROTECTION</h1>
          <br /><br />
          <div className="cards" data-aos="fade-up">
              <div className="card" >
              <div className="hp2img"><img src="./images/hp2img1.png" alt="" /></div>
                  <h2>15000+</h2>
                  <h3>Network Hospitals to avail cashless claims </h3>
              </div>
              <div className="card" >
                  <div className="hp2img"><img src="./images/hp2img2.png" alt="" /></div>
                  <h2>20Cr</h2>
                  <h3>Lives covered since inception </h3>
              </div>
              <div className="card" >
              <div className="hp2img"><img src="./images/hp2img4.png" alt="" /></div>
                  <h2>900+</h2>
                  <h3>Branch offices across India</h3>
              </div>
              
              <div className="card" >
              <div className="hp2img"><img src="./images/hp2img3.png" alt="" /></div>
                  <h2>2 Crore+</h2>
                  <h3>Claim settled since inception </h3>
              </div>
          
      </div>
      </div>
      <div className="hp22">
          <div className="hp22left" data-aos="fade-right">
              <img src="./images/hp22img.png" alt="" />
          </div>
          <div className="hp22right" data-aos="fade-down">
              <h1 >What is Health Insurance?</h1>
              <p >
              Health Insurance is a shield that protects you and your family from financial instability during health emergencies. Against the common misconception that only elderly or people with health risks need to be secured, it is essential for everyone. A good health policy offers peace of mind in times of hospitalization by taking care of your medical bills.
              Uncertainties like COVID-19 have taught us the critical need for health insurance. On the other hand, with the continuous spike in medical inflation, a good health insurance plan can protect your finances either by providing cashless treatments or reimbursements on the incurred medical expenses. The flexibility of our policies allow them to be availed either on an individual or floater basis to get wide coverage according to your needs.
              </p>
              <br />
              <button className="buttontop" >Buy Online</button>
          </div>
      </div>
      </div>
      </>
    )
  }
  
  export default hp2