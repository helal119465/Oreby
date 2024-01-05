import React from 'react'
import Flex from './layout/Flex'
import Container from './layout/Container'
import { FaTruck,FaUndoAlt } from "react-icons/fa";

const AdditionInfo = () => {
  return (
    <section className=' border border-[#F0F0F0] bg-[#FFFFFF] font-dm '>
        <Container>
            <Flex className={'justify-between md:h-[100px] h-[50px]] items-center'}>
                 <div className='flex sm:gap-4 gap-1 items-center'>
                    <h1 className='sm:text-2xl text-sm text-[#262626] sm:font-bold font-normal'>2</h1>
                    <span className='text-[#6D6D6D] sm:text-base text-[10px]'>Two years warranty</span>
                </div>
                <div className='flex sm:gap-4 gap-1 items-center'>
                    <FaTruck className=' sm:text-xl text-[10px]'/>
                    <span className='text-[#6D6D6D] sm:text-base text-[10px]'>Free shipping</span>
                </div>
                <div className='flex sm:gap-4 gap-1 items-center'>
                    <FaUndoAlt className=' sm:text-xl text-[10px]'/>
                    <span className='text-[#6D6D6D] sm:text-base text-[10px]'>Return policy in 30 days</span>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default AdditionInfo