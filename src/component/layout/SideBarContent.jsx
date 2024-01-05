import React, { useState } from 'react'
import { GoTriangleDown,GoTriangleUp } from "react-icons/go";

const SideBarContent = ({className,subDropDown,title,color,children}) => {
    let [show,setShow] =useState(false)
  return (
    <section className={`font-dm ml-2  pt-2 text-[#767676] hover:text-slate-700 text-base hover:transition-all ${className}`}>
        {subDropDown?(<div className='flex justify-between capitalize border-b border-[#F0F0F0] pt-2 pb-1 hover:font-bold hover:transition-all'onClick={()=>setShow(!show)}>
            <h6 className='pb-2'>{title}</h6>
            {show?<GoTriangleDown />:<GoTriangleUp />}
        </div>):
        (<div className='flex capitalize border-b border-[#F0F0F0] pt-2 pb-1 hover:font-bold hover:transition-all'>
            {color &&(
                
                <span className='w-3 h-3 rounded-full mr-3 mt-2' style={{backgroundColor:`${color}`}}></span>
            )}
            <h6 className='pb-2'>{title}</h6>
        </div>)}
        {show && children}
    </section>
  )
}

export default SideBarContent