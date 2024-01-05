import React from 'react'
import Flex from './Flex'

const Filter = ({title,selectClass,children}) => {
  return (
    <Flex className={'font-dm items-center'}>
        <h6 className='text-[#767676] text-base mr-3'>{title}</h6>
        <select name='' id='' className={`text-[#262626] text-base border-gray-200 border py-2 px-4 outline-none ${selectClass}`}>
            {children}
        </select>
    </Flex>
  )
}

export default Filter