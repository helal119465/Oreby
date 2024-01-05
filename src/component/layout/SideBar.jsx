import React from 'react'
import InnerSideBar from './InnerSideBar'
import {category, colors, brands, price} from '../../FakeData/Data'
const SideBar = () => {
  return (
    <div className='ml-2 w-[340px]'>
        <InnerSideBar title={'Shop by Category'} DropDown={false} data={category}/>
        <InnerSideBar title={'Shop by Color'} DropDown={true} data={colors}/>
        <InnerSideBar title={'Shop by Brand'} DropDown={true} data={brands}/>
        <InnerSideBar title={'Shop By Price'} DropDown={false} data={price}/>
    </div>
  )
}


export default SideBar