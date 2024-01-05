import React from 'react'
import Container from './layout/Container'
import Flex from './layout/Flex'
import ListItem from './layout/ListItem'
import List from './layout/List'
import Img from './layout/Img'
import logo2 from '../assets/Logo2.png'
import { FaFacebook,FaYoutube,FaLinkedin,FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='font-dm bg-[#F5F5F3] '>
      <Container>
        <Flex className={'pt-[55px] md:pb-[65px] pb-8  flex-wrap'}>
          <div className='xl:w-[180px] md:w-[110px] w-[80px]  font-bold h-[200]'>
            <h1 className='text-lg text-[#262626]  font-bold'>Menu</h1>
           <List className={'text-sm text-[#6D6D6D] font-normal leading-7'}>
            <ListItem item={"Home"} link={'/'} linkClassName={"hover:font-bold hover:text-[#262626] transition-all duration-500"}/>
            <ListItem item={"Shop"} link={'/shop'} linkClassName={"hover:font-bold hover:text-[#262626] transition-all duration-500"}/>
            <ListItem item={"About"} link={'/about'} linkClassName={"hover:font-bold hover:text-[#262626] transition-all duration-500"}/>
            <ListItem item={"Contacts"} link={'/contact'} linkClassName={"hover:font-bold hover:text-[#262626] transition-all duration-500"}/>
            <ListItem item={"Journal"} link={'/contact'} linkClassName={"hover:font-bold hover:text-[#262626] transition-all duration-500"}/>
           </List>
          </div>
          <div className='xl:w-[225px] md:w-[150px] w-[110px]  font-bold h-[200] pl-2'>
            <h1 className='text-lg text-[#262626]  font-bold'>SHOP</h1>
           <List className={'text-sm text-[#6D6D6D] font-normal leading-7'}>
            <ListItem item={"Category 1"} link={'/'} linkClassName={"hover:font-bold hover:text-[#262626] transition-all duration-500"}/>
            <ListItem item={"Category 2"} link={'/shop'} linkClassName={"hover:font-bold hover:text-[#262626] transition-all duration-500"}/>
            <ListItem item={"Category 3"} link={'/about'} linkClassName={"hover:font-bold hover:text-[#262626] transition-all duration-500"}/>
            <ListItem item={"Category 4"} link={'/contact'} linkClassName={"hover:font-bold hover:text-[#262626] transition-all duration-500"}/>
            <ListItem item={"Category 5"} link={'/contact'} linkClassName={"hover:font-bold hover:text-[#262626] transition-all duration-500"}/>
           </List>
          </div>
          <div className='xl:w-[264px] md:w-[200px] w-[150px]  font-bold h-[200] pl-2'>
            <h1 className='text-lg text-[#262626]  font-bold'>HELP</h1>
           <List className={'text-sm text-[#6D6D6D] font-normal leading-7'}>
            <ListItem item={"Privacy Policy"} link={'/'} linkClassName={"hover:font-bold hover:text-[#262626] transition-all duration-500"}/>
            <ListItem item={"Terms & Conditions"} link={'/shop'} linkClassName={"hover:font-bold hover:text-[#262626] transition-all duration-500"}/>
            <ListItem item={"Special E-shop"} link={'/about'} linkClassName={"hover:font-bold hover:text-[#262626] transition-all duration-500"}/>
            <ListItem item={"Shipping"} link={'/contact'} linkClassName={"hover:font-bold hover:text-[#262626] transition-all duration-500"}/>
            <ListItem item={"Secure Payments"} link={'/contact'} linkClassName={"hover:font-bold hover:text-[#262626] transition-all duration-500"}/>
           </List>
          </div>
          <div className='xl:w-[410px] md:mt-0 mt-8'>
            <Flex className={'flex-col mb-[15px]'}>
              <h6><a href="tel:(052) 611-5711" className='text-base font-bold'>(052) 611-5711</a></h6>
              <h6><a href="mailto:company@domain.com" className='text-base font-bold'>company@domain.com</a></h6>
            </Flex>
            <h6><address className='text-sm text-[#6D6D6D]'>575 Crescent Ave. Quakertown, PA 18951</address></h6>
          </div>
          <div className='w-[122px] mt-8 lg:mt-0'>
            <Img src={logo2} className={'w-full'}/>
          </div>
        </Flex>
        <Flex className={'pb-3 justify-between items-center sm:flex-row flex-col'}>
          <Flex className={"gap-6 text-3xl sm:mb-0 mb-3"}>
          <FaFacebook />
          <FaYoutube />
          <FaLinkedin />
          <FaGithub />
          </Flex>
          <h5 className='text-[#6D6D6D] md:text-sm text-xs'>2020 Orebi Minimal eCommerce Figma Template by Adveits</h5>
        </Flex>
      </Container>
    </footer>
  )
}

export default Footer