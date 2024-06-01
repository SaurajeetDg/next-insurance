"use client";
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function hp4() {
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
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <div className="hp4">
    <h1 data-aos="fade-down">Few Words from our <span>NEXT Insurance</span> Family</h1>
    <h3 className="text-white text-center pt-3" data-aos="fade-down">Peace of Mind Secured: A Testament to Exceptional Insurance Services</h3>
    <div className="pt-20 hp41" data-aos="fade-down">
        <Slider {...settings}>
        {data.map((d) => (
            <div className=" h-[380px] text-white rounded-xl hp4c">
            <div className="h-56 rounded-t-xl  flex justify-center items-center hp4cc">
                <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold hp4cname">{d.name}</p>
                <p className="hp4creview">{d.review}</p>
            </div>
            </div>
        ))}
        </Slider>
    </div>
    </div>
  )
}

const data=[
    {
        name:'Saurajeet Dasgupta',
        img: './images/p2.jpg',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sed vero quia.'
    },
    {
        name:'Riya Halder',
        img: './images/p5.jpg',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sed vero quia.'
    },
    {
        name:`Saikat Halder`,
        img: `./images/p4.jpg`,
        review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sed vero quia.`
    },
    {
        name:`Sarthak Baroi`,
        img: `./images/p3.jpg`,
        review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sed vero quia.`
    },
    {
        name:`Rohit Dasgupta`,
        img: `./images/p1.jpg`,
        review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sed vero quia.`
    }
]

export default hp4;