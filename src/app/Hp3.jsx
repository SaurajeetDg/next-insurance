"use client";
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hp3() {
    useEffect(() => {
        AOS.init({
             duration: 800,
             once: false,
           })
     }, [])
    return (
      <div className="hp3">
          <h1 data-aos="fade-down">Why choose <span>NEXT Health Insurance</span>?</h1>
          <p data-aos="fade-down">As the Health Insurance Specialist, we extend our services from offering tailor-made quality health policies to fast in-house claim settlements. With our growing & wide network of hospitals, we ensure easy access to fulfill your medical needs with cashless health insurance
  
          We are India`s first stand-alone health insurance company to provide private health insurance policy in medical, personal accidents, and overseas travel. We have a comprehensive array of the best health insurance plans with affordable rates designed to meet our customer`s changing demands
  
          Our hassle-free claim settlement process and simple reimbursement policies make us stand as the best health insurance company in India</p>
          {/* <h3>Our Claims</h3> */}
          <br />
          <div className="hp3cards">
              <div className="hp3card" data-aos="fade-up">
                  <h2>Anywhere Cashless Claims</h2>
                  <p>Now avail Anywhere Cashless Claims all across India. With 14000+ Network Hospitals, we are also one of India’s widest medical coverage providers.</p>
              </div>
              <div className="hp3card" data-aos="fade-up">
                  <h2>24*7 Customer Service</h2>
                  <p>Call us at 1800-425-2255 for claim intimation, telehealth services and to clear your queries.</p>
              </div>
              <div className="hp3card" data-aos="fade-up">
                  <h2>In-house Claim Settlement</h2>
                  <p>We’re the first Standalone Health Insurance company to settle the claims without any TPA`s instead you are secured by our qualified in-house team.</p>
              </div>
              <div className="hp3card" data-aos="fade-up">
                  <h2>Claim Settlement</h2>
                  <p>90% of our claims are settled under cashless within 2hrs and 92% of claims are settled under reimbursement within 7days.</p>
              </div>
              <div className="hp3card" data-aos="fade-up">
                  <h2>Hospitals</h2>
                  <p>We got you covered by offering best health insurance plans under our valuable service providers, agreed network and network hospitals for quality treatment.</p>
              </div>
              <div className="hp3card" data-aos="fade-up">
                  <h2>Awards</h2>
                  <p>We’ve been awarded for innovative product, best claim settlement and service provider from reputed survey organisations.</p>
              </div>
          </div>
      </div>
    )
  }
  
  export default Hp3