import React, { useState } from 'react'
import { VscTriangleDown,VscTriangleUp } from "react-icons/vsc";
import SideBarContent from './SideBarContent';

const InnerSideBar = ({DropDown,title,data}) => {
    let [show,setShow] = useState(true)
  return (
    <div className='font-dm my-12'>
      {DropDown? 
      (<div className='flex justify-between items-center cursor-pointer' onClick={()=>setShow(!show)}>
            <h1 className='text-[#262626] text-xl font-bold'>{title}</h1>
            {show?<VscTriangleDown />:<VscTriangleUp />}
        </div>):    
        <h1 className='text-[#262626] text-xl font-bold'>{title}</h1>}
        {show && <>
            {data.map((item)=><SideBarContent title={item.name}
              color={item.hasOwnProperty("colorCode") && item.colorCode}
              subDropDown={item.hasOwnProperty("subCategory")?true:false}
            >
              {
                item.hasOwnProperty("subCategory") && item.subCategory.map((subCategory)=><SideBarContent title={subCategory.name} className={'ml-5 text-gray-600'}/>)
              }
            </SideBarContent>)}
        </>}
    </div>
  )
}

export default InnerSideBar