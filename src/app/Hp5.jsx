"use client";
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function hp5() {
    useEffect(() => {
        AOS.init({
             duration: 800,
             once: false,
           })
     }, [])
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear"
      };
  return (
    <div className="hp4">
    <h3 className="hp5head pt-2" data-aos="fade-down">IMPORTANCE OF HEALTH INSURANCE</h3>
    <h1 className="text-white text-center pt-1" data-aos="fade-down">Why do I need a Health Insurance Policy?</h1>
    <p className="text-white text-center pt-3 px-10" data-aos="fade-down">The rising medical costs and an ever-increasing number of diseases make Health Insurance a necessity. While doing your financial planning, you should always add a Health Insurance plan to your list. The best health insurance policy is the one that meets your needs. Star Health expert advisors and our array of unique plans ensures you get the best health plan.</p>
    <div className="pt-20 hp41 " data-aos="fade-up">
        <Slider {...settings}>
        {data.map((d) => (
            <div className=" h-[250px] text-white rounded-xl hp4c">
            <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold hp4cname">{d.heading}</p>
                <p className="hp4creview">{d.review}</p>
            </div>
            </div>
        ))}
        </Slider>
    </div>
    <div className="text-center flex justify-center pt-5">
    <button className="buttontop " data-aos="fade-up">Buy Online</button>
    </div>
    </div>
  )
}

const data=[
    {
        heading:'Tax Benefits',
        review: 'Health Insurance is an essential investment for which you can avail the tax exemption. Under Section 80D of the Income Tax Act, 1961, a taxpayer can avail tax exemptions on premiums paid toward health policies.'
    },
    {
        heading:'Covers Pre-existing Diseases',
        review: 'Most Medical Insurance Policies cover Pre-existing Diseases. Any medical conditions or ailments from which the policyholder is already suffering before opting for the Medical Insurance Policy is referred as Pre-existing Disease.'
    },
    {
        heading:'Financial Assistance',
        review: 'Make sure not to miss out on Health Insurance while planning your finance. Insuring yourself and your family members will make it certain that you are financially backed up in times of need. Medical inflation is ever-rising, so a sudden medical emergency may drain your saving.'
    },
    {
        heading:'Lifestyle Changes',
        review: 'The rising health complications are linked to the current lifestyle and environmental pollution. This necessitates the importance of being secured with a mediclaim plan, which can shield yourself and your family from financial troubles.'
    },
    {
        heading:'Medical Inflation',
        review: 'The cost of health care has multiplied over the years. It is not wise to solely depend on your savings to cover your medical needs. With the best Health Insurance, you do not have to worry about medical expenses to avail quality treatment.'
    },
    {
        heading:'Pre & Post-Hospitalization',
        review: 'When it comes to health conditions, one often thinks only about hospitalization expenses. But what about the costs incurred before and after hospitalization? A health insurance plan covers such expenses, thus, relieving you from financial stress.'
    }
]

export default hp5;








// "use client";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function hp5() {
//     const settings = {
//         dots:false,
//         infinite:false,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         speed: 2000,
//         autoplaySpeed: 2000,
//         cssEase: "linear"
//       };
//   return (
//     <div className="hp5">
//         <h3>IMPORTANCE OF HEALTH INSURANCE</h3>
//         <h1>Why do I need a Health Insurance Policy?</h1>
//         <p>The rising medical costs and an ever-increasing number of diseases make Health Insurance a necessity. While doing your financial planning, you should always add a Health Insurance plan to your list. The best health insurance policy is the one that meets your needs. Star Health expert advisors and our array of unique plans ensures you get the best health plan.</p>
//         <div className="hp5cards pt-20 hp41 flex">
//         <Slider {...settings}>
//             <div className="hp5card ">
//                 <div className="flex flex-col justify-center items-center gap-4 p-4">
//                     <h1>Tax Benefits</h1>
//                     <p>Health Insurance is an essential investment for which you can avail the tax exemption. Under Section 80D of the Income Tax Act, 1961, a taxpayer can avail tax exemptions on premiums paid toward health policies.</p>
//                 </div>
//             </div>
//         </Slider>
//         <Slider {...settings}>
//             <div className="hp5card">
//                 <div className="flex flex-col justify-center items-center gap-4 p-4">
//                     <h1>Covers Pre-existing Diseases</h1>
//                     <p>Most Medical Insurance Policies cover Pre-existing Diseases. Any medical conditions or ailments from which the policyholder is already suffering before opting for the Medical Insurance Policy is referred as Pre-existing Disease.</p>
//                 </div>
//             </div>
//         </Slider>
//         <Slider {...settings}>
//             <div className="hp5card">
//                 <div>
//                     <h1>Financial Assistance</h1>
//                     <p>Make sure not to miss out on Health Insurance while planning your finance. Insuring yourself and your family members will make it certain that you are financially backed up in times of need. Medical inflation is ever-rising, so a sudden medical emergency may drain your saving.</p>
//                 </div>
//             </div>
//         </Slider>
//         <Slider {...settings}>
//             <div className="hp5card">
//                 <div>
//                     <h1>Lifestyle Changes</h1>
//                     <p>The rising health complications are linked to the current lifestyle and environmental pollution. This necessitates the importance of being secured with a mediclaim plan, which can shield yourself and your family from financial troubles.</p>
//                 </div>
//             </div>
//         </Slider>
//         <Slider {...settings}>
//             <div className="hp5card">
//                 <div>
//                     <h1>Medical Inflation</h1>
//                     <p>The cost of health care has multiplied over the years. It is not wise to solely depend on your savings to cover your medical needs. With the best Health Insurance, you do not have to worry about medical expenses to avail quality treatment.</p>
//                 </div>
//             </div>
//         </Slider>
//         <Slider {...settings}>
//             <div className="hp5card">
//                 <div>
//                     <h1>Pre & Post-Hospitalization</h1>
//                     <p>When it comes to health conditions, one often thinks only about hospitalization expenses. But what about the costs incurred before and after hospitalization? A health insurance plan covers such expenses, thus, relieving you from financial stress</p>
//                 </div>
//             </div>
//         </Slider>
//         </div>
//     </div>
//   )
// }

// export default hp5



