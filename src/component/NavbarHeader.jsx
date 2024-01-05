import React from 'react'
import Container from './layout/Container'
import Flex from './layout/Flex'
import DropDown from './layout/DropDown'
import { FaSearch } from "react-icons/fa";
import UserDropDown from './layout/UserDropDown';
import CartDropDown from './layout/CartDropDown';

const NavbarHeader = () => {
  return (
    <section className='bg-[#F5F5F3] '>
        <Container className={'py-0 border-b-2 border-[]'}>
            <Flex className={"lg:h-[100px] h-[50px] sm:justify-between justify-around items-center"}>
                <DropDown/>
                <div className='flex items-center'>
                    <input type="text" className=" lg:w-[600px] sm:w-[450px]   py-4 pl-5 outline-purple-600 placeholder:text-[#C4C4C4] text-sm font-dm" 
                        placeholder='Search Products' />
                    <FaSearch className='ml-[-40px] cursor-pointer'/>
                </div>
                <Flex className={'sm:gap-10 gap-2 text-xl'}>
                    <UserDropDown/>
                    <CartDropDown/>
                </Flex>
            </Flex>
        </Container>
    </section>
  )
}

export default NavbarHeader