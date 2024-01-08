import React, { useState } from 'react'
import { VscTriangleDown,VscTriangleUp } from "react-icons/vsc";
import SideBarContent from './SideBarContent';

const InnerSideBar = ({DropDown,title,data}) => {
    let [show,setShow] = useState(true)
  return (
    <div className='font-dm '>
      {DropDown? 
      (<div className='flex justify-between items-center cursor-pointer mb-5' onClick={()=>setShow(!show)}>
            <h1 className='text-[#262626] text-xl font-bold'>{title}</h1>
            {show?<VscTriangleDown />:<VscTriangleUp />}
        </div>):    
        <h1 className='text-[#262626] text-xl font-bold'>{title}</h1>}
        {show && <>
          {data.map((item)=>
            <>
              <SideBarContent title={item}/>
            </>)
        }
        </>
        }
    </div>
  )
}

export default InnerSideBar
