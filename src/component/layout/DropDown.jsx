import React, { useState,useRef,useEffect } from 'react'
import { HiBars3 } from "react-icons/hi2";
import DropDownItem from './DropDownItem';
import List from './List';
import ListItem from './ListItem';

const DropDown = () => {
  let [show,setShow]=useState(false)
  let category=useRef()
  useEffect(()=>{
    document.body.addEventListener("click",((e)=>{
      if(category.current.contains(e.target)){
            setShow(!show)
        }else{
          setShow(false)
        }
    }))
  })
  return (
    <div className='sm:w-[10%] md:w-[15%] w-[8%] text-[#262626] font-dm text-sm flex items-center relative z-10' ref={category}>
      <HiBars3 className='mr-3 text-xl cursor-pointer'/> 
      <span className='hidden lg:inline-block'>Shop by Category</span> 
      {show && <DropDownItem className={'absolute top-10'}>
        <List className={'w-[263px] bg-[#262626] text-[#FFFFFFB2]'}>
          <ListItem item={"Accesories"} className={'block py-4 pl-5 hover:text-[#FFFFFF] hover:pl-7 transition-all border-b border-[#2D2D2D]'}/>
          <ListItem item={"Furniture"} className={'block py-4 pl-5 hover:text-[#FFFFFF] hover:pl-7 transition-all border-b border-[#2D2D2D]'}/>
          <ListItem item={"Electronics"} className={'block py-4 pl-5 hover:text-[#FFFFFF] hover:pl-7 transition-all border-b border-[#2D2D2D]'}/>
          <ListItem item={"Clothes"} className={'block py-4 pl-5 hover:text-[#FFFFFF] hover:pl-7 transition-all border-b border-[#2D2D2D]'}/>
          <ListItem item={"Bags"} className={'block py-4 pl-5 hover:text-[#FFFFFF] hover:pl-7 transition-all border-b border-[#2D2D2D]'}/>
          <ListItem item={"Home appliances"} className={'block py-4 pl-5 hover:text-[#FFFFFF] hover:pl-7 transition-all '}/>
        </List>
      </DropDownItem>}
      </div>
  )
}

export default DropDown