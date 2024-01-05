import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import Img from './layout/Img';
import SliderImg from '../assets/SliderImge.png'
import bannerImgTwo from '../assets/bannerImgTwo.png'
import bannerImgThree from '../assets/bannerImgThree.png'
import { Link } from 'react-router-dom';

const Banner = () => {
  let [activeDot,setActiveDot]=useState(0)
  
    const settings = {
        dots:true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows:false,
        beforeChange:(prev,next)=>{
          setActiveDot(next)
        },
        responsive: [        
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots:false
            }
          }
        ],
        appendDots: dots => (
          <div
            style={{
              position:'absolute',
              top:'50%',
              left:'10%',
              transform:'translate(-50%,-50%)',
            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={
            i==activeDot?{
              width: "30px",
              borderRight:"4px solid #262626",
              color:'#262626',
              paddingRight:'30px',
              
            }:{
              width: "30px",
              borderRight:"4px solid transparent",
              color:'transparent ',
              paddingRight:'30px',
              
            }}
          >
            0{i + 1}
          </div>
        )
       
      }
      return (
        <div>
          <Slider {...settings}>
            <Link to={"/shop"}>
              <div>
                <Img src={bannerImgTwo} imgClassName={'w-full'}/>
              </div>
            </Link>
            <Link to={"/shop"}>
              <div>
                <Img src={bannerImgThree}/>
              </div>
            </Link>
            <Link to={"/shop"}>
              <div>
                <Img src={SliderImg}/>
              </div>
            </Link>
          </Slider>
        </div>
      );
    }
export default Banner
