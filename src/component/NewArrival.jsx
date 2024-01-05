import React,{Component} from 'react'
import Container from './layout/Container'
import Flex from './layout/Flex'
import Img from './layout/Img'
import Title from './layout/Title'
import Slider from "react-slick";
import Products from '../component/layout/Products'
import ProductImg01 from '../assets/ProductImg01.png'
import ProductImg02 from '../assets/ProductImg02.png'
import ProductImg03 from '../assets/ProductImg03.png'
import ProductImg04 from '../assets/ProductImg04.png'
import ProductImg05 from '../assets/ProductImg05.png'
import { FaLongArrowAltLeft ,FaLongArrowAltRight } from "react-icons/fa";
import BestSellersImg01 from '../assets/BestSellersImg01.png'
import BestSellersImg02 from '../assets/BestSellersImg02.png'
import BestSellersImg03 from '../assets/BestSellersImg03.png'
import BestSellersImg04 from '../assets/BestSellersImg04.png'
import cap from '../assets/cap.png'
import Table from '../assets/Table.png'
import Headphone from '../assets/Headphone.png'
import Sunglass from '../assets/Sunglass.png'
import AdvertiseImg04 from '../assets/Advertise04.png'

function SampleNextArrow(props) {
  const {style, onClick } = props;
  return (
    <span
      className=' bg-slate-300 hover:bg-slate-900 transition-all duration-500 w-16 h-16 rounded-full !flex justify-center !items-center absolute md:right-10 sm:right-4 z-10 top-[35%]'
      style={{ ...style}}
      onClick={onClick}
    ><FaLongArrowAltRight className='text-white text-4xl'/></span>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <span
      className='  bg-slate-300 hover:bg-slate-900 transition-all duration-500 w-16 h-16 rounded-full !flex justify-center !items-center absolute left-0 z-10 top-[35%]'
      style={{ ...style}}
      onClick={onClick}
    ><FaLongArrowAltLeft className='text-white text-4xl'/></span>
  );
}
const NewArrival = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        }
      }
    ]
  };
  return (
    <section className='md:mb-32'>
       <Container>
        <Title title={"New Arrivals"}/>
          <Slider {...settings} className='gap-10 relative'>
            <div className='md:pr-10 sm:pr-4'>
              <Products label={"10%"}
                labelShow={true}
                ProductImg={ProductImg01}
                ProductTitle={"Basic Crew Neck"}
                Price={"$44.00"}
                color={"Mixed"} 
              />
            </div>
            <div className='md:pr-10 sm:pr-4'>
              <Products label={"10%"}
                labelShow={false}
                ProductImg={ProductImg02}
                ProductTitle={"Basic Crew Neck"}
                Price={"$44.00"} 
                color={"Blue"} 
              />
            </div>
            <div className='md:pr-10 sm:pr-4'>
              <Products label={"10%"}
                labelShow={true}
                ProductImg={ProductImg03}
                ProductTitle={"Basic Crew Neck"}
                Price={"$44.00"}
                color={"Mixed"} 
              />
            </div>
            <div className='md:pr-10 sm:pr-4'>
              <Products label={"10%"}
                labelShow={true}
                ProductImg={ProductImg04}
                ProductTitle={"Basic Crew Neck"}
                Price={"$44.00"}
                color={"Mixed"} 
              />
            </div>
            <div className='md:pr-10 sm:pr-4'>
              <Products label={"10%"}
                labelShow={true}
                ProductImg={ProductImg05}
                ProductTitle={"Basic Crew Neck"}
                Price={"$44.00"}
                color={"Mixed"} 
              />
            </div>          
          </Slider>
          <Title title={"Our Bestsellers"}/>
         
            <Flex className={'gap-9 md:gap-5 lg:gap-9 xl:gap-[50px] sm:flex-row flex-col flex-wrap'}>
              <Products
              className={'w-full sm:w-[47%] lg:w-[22%]'}
                label={'New'}
                labelShow={true}
                ProductImg={BestSellersImg01}
                ProductTitle={"Basic Crew Neck"}
                Price={'$30.00'}
              />
              <Products
              className={'w-full sm:w-[47%] lg:w-[22%]'}
                label={'New'}
                labelShow={true}
                ProductImg={BestSellersImg02}
                ProductTitle={"Basic Crew Neck"}
                Price={'$30.00'}
             />
              <Products
              className={'w-full sm:w-[47%] lg:w-[22%]'}
                label={'New'}
                labelShow={true}
                ProductImg={BestSellersImg03}
                ProductTitle={"Basic Crew Neck"}
                Price={'$30.00'}
              />
             <Products
             className={'w-full sm:w-[47%] lg:w-[22%]'}
                label={'New'}
                labelShow={true}
                ProductImg={BestSellersImg04}
                ProductTitle={"Basic Crew Neck"}
                Price={'$30.00'}
              />
            </Flex>

          <div className='mt-20'>
            <Img src={AdvertiseImg04}/>
          </div>

          <Title title={"Special Offers"}/>
            <Flex className={'gap-9 md:gap-5 lg:gap-9 xl:gap-[50px] sm:flex-row flex-col flex-wrap'}>
              <Products
                
                className={'w-full sm:w-[47%] lg:w-[22%]'}
                label={'New'}
                labelShow={true}
                ProductImg={cap}
                ProductTitle={"Basic Crew Neck Tee"}
                Price={'$30.00'}
              />
              <Products
              className={'w-full sm:w-[47%] lg:w-[22%]'}
                label={'New'}
                labelShow={true}
                ProductImg={Table}
                ProductTitle={"Basic Crew Neck Tee"}
                Price={'$30.00'}
             />
              <Products
              className={'w-full sm:w-[47%] lg:w-[22%]'}
                label={'New'}
                labelShow={true}
                ProductImg={Headphone}
                ProductTitle={"Basic Crew Neck Tee"}
                Price={'$30.00'}
              />
             <Products
             className={'w-full sm:w-[47%] lg:w-[22%]'}
                label={'New'}
                labelShow={true}
                ProductImg={Sunglass}
                ProductTitle={"Basic Crew Neck Tee"}
                Price={'$30.00'}
              />
            </Flex>
       </Container>
    </section>
  )
}

export default NewArrival