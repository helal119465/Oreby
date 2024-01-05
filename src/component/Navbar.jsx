import Container from './layout/Container'
import React, { useEffect, useState } from 'react'
import Flex from './layout/Flex'
import Img from './layout/Img'
import Logo from '../assets/Logo.png'
import List from './layout/List'
import ListItem from './layout/ListItem'
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  let [manuShow,setManuShow]=useState(true)
  useEffect(()=>{
    const resize=()=>{
      if(window.innerWidth<641){
        setManuShow(false)
      }else{
        setManuShow(true)
      }
    }
    window.addEventListener("resize",resize);
    resize();
  },[])
  return (
    <nav className='font-dm border-y-2 border-[#F5F5F3]'>
        <Container>
            <Flex className={"sm:h-16 h-4 items-center mx-2 relative z-10"}>
                <Img src={Logo} className={"sm:w-[10%] w-[20%] "} imgClassName={''}/>
                {manuShow && (<List className={"sm:w-[90%] w-full flex justify-center gap-x-10 sm:text-[#767676] text-white text-lg flex-col sm:flex-row sm:relative absolute top-16 sm:top-0 bg-cyan-950 sm:bg-transparent rounded-md sm:rounded-none text-center "}>
                  <ListItem item={"Home"} link={'/'} className={"sm:hover:text-[#262626] transition-colors sm:py-0 py-4 block sm:border-none border-b border-[#767676]"}/>
                  <ListItem item={"Shop"} link={'/shop'} className={"sm:hover:text-[#262626] transition-colors sm:py-0 py-4 block sm:border-none border-b border-[#767676]"}/>
                  <ListItem item={"About"} link={'/about'} className={"sm:hover:text-[#262626] transition-colors sm:py-0 py-4 block sm:border-none border-b border-[#767676]"}/>
                  <ListItem item={"Contacts"} link={'/contacts'} className={"sm:hover:text-[#262626] transition-colors sm:py-0 py-4 block sm:border-none border-b border-[#767676]"}/>
                  <ListItem item={"Journal"} link={'/journal'} className={"sm:hover:text-[#262626] transition-colors sm:py-0 py-4 block sm:border-none border-b border-[#767676]"}/>
                </List>)}
                
                <FaBars className='sm:hidden cursor-pointer absolute right-0' onClick={()=>setManuShow(!manuShow)}/>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar