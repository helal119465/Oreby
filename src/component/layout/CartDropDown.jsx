import React, { useState,useRef,useEffect } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import DropDownItem from './DropDownItem';
import Flex from './Flex';
import Img from './Img';
import Cart from '../../assets/Cart.png'
import { ImCross } from "react-icons/im";
import Button from './Button';

const CartDropDown = () => {
  let [show,setShow]=useState(false)
  let cart=useRef()
  useEffect(()=>{
    document.body.addEventListener("click",((e)=>{
      if(cart.current.contains(e.target)){
            setShow(!show)
        }else{
          setShow(false)
        }
    }))
  })
  return (
    <div className=' relative z-10' ref={cart}>
        <FaShoppingCart className='text-xl cursor-pointer'/>
        {
          show && <DropDownItem className={'bg-[#F5F5F3] absolute w-[360px] top-10 right-0 border border-[#F0F0F0] font-dm'}>
          <div className='p-5  '>
            <Flex className={' items-center justify-end'}>
              <Img src={Cart} className={'w-20'}/>
              <div className='text-sm font-bold w-32 ml-5'>
                <h3 className='mb-3'>Black Smart Watch</h3>
                <h4>$44.00</h4>
              </div>
              <ImCross className='cursor-pointer ml-16' onClick={()=>setShow(false)}/>
            </Flex>
          </div>
          <div className='bg-[#FFFFFF] p-5'>
              <h5 className='text-[#767676] text-base'>Subtotal: <span className='text-[#262626] text-base font-bold'>$44.00</span></h5>
              <Flex className={'mt-3'}>
                <Button title={"View Cart"} className={' text-[#262626] text-sm font-bold py-4 px-10 border border-[#2B2B2B]'}/>
                <Button title={"Checkout"} className={' text-[#FFFFFF] bg-[#262626] text-sm font-bold py-4 px-10 ml-5'}/>
              </Flex>
          </div>
        </DropDownItem>
        }
    </div>
   
  )
}

export default CartDropDown