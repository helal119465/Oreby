import React from 'react'
import { Link } from 'react-router-dom'
import Flex from './layout/Flex'
import { FaAngleRight } from "react-icons/fa";

const Breadcrum = ({title,link,linkVal,currentPage,currentPageLink}) => {
  return (
    <div className='font-dm'>
        <h1 className='text-[#262626] text-[49px] font-bold capitalize mt-8'>{title}</h1>
        <Flex className={'text-xs text-[#767676]  ml-1 capitalize gap-x-2'}>
            <Link to={link}>{linkVal}</Link>
            <FaAngleRight className=' self-center'/>
            <Link to={currentPageLink} className='text-black font-bold'>{currentPage }</Link>
        </Flex>

    </div>
  )
}

export default Breadcrum