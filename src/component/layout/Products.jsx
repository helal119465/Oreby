import React from 'react'
import Img from './Img'
import Flex from './Flex'
import { FaHeart,FaShoppingCart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";

const Products = ({className,labelShow,label,ProductImg,ProductTitle,Price,color}) => {
    let setLabelShow=labelShow
  return (
    <div className={` font-d ${className} border-[1px]`}>
        <div className='relative group overflow-hidden '>
          {setLabelShow && <div className='absolute top-5 left-[26px] bg-[#262626]  text-[#FFFFFF] text-sm font-bold py-2 px-8 capitalize '>{label}</div>}
            <Img src={ProductImg} imgClassName={"w-full lg:w-[382px] lg:h-[300px]"}/>
            <div className=' bg-white w-full -bottom-80 absolute   capitalize text-right py-4 pr-[30px] text-[#767676] transition-all group-hover:bottom-0 duration-700 border-b-[1px] border-x-gray-400'>
              <h6 className='hover:text-[#262626] cursor-pointer'>Add to Wish List <FaHeart className='inline-block text-[#262626] ml-3'/></h6>
              <h6 className='hover:text-[#262626] cursor-pointer py-2'>Compare <FaCodeCompare className='inline-block text-[#262626] ml-3'/></h6>
              <h6 className='hover:text-[#262626] cursor-pointer'>Add to Cart <FaShoppingCart className='inline-block text-[#262626] ml-3'/></h6>
            </div>
        </div>
        <Flex className={'flex-col mt-6 mb-1 mx-1 '}>
          <Flex className={'justify-between mb-3 items-center '}>
            <h1 className='capitalize text-[#262626] text-base  font-bold'>{ProductTitle}</h1>
            <h2 className='text-[#767676] text-base'>{Price}</h2>
          </Flex>
          <h2 className='text-[#767676] text-base'>{color}</h2>
       </Flex>
          
    </div>
  )
}

export default Products