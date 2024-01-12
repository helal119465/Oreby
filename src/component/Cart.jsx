import React, { useEffect, useState } from 'react'
import Breadcrum from './Breadcrum'
import Flex from './layout/Flex'
import Container from './layout/Container'
import { ImCross } from "react-icons/im";
import CartImg from '../assets/CartImg.png'
import Img from './layout/Img';
import { FiPlus,FiMinus } from "react-icons/fi";
import Button from './layout/Button';
import { useDispatch, useSelector } from 'react-redux';
import { quantityMinus, quantityUpdate, removeToCart } from '../app/Slices/addToCart';
const Cart = () => {
  let dispatch=useDispatch()
  const cartData=useSelector((state)=>state.addtocart.cartData)
  let [total,setTotal]=useState(0)
  useEffect(()=>{
    let totalPrice=0;
    cartData.map((product)=>{
      totalPrice+=Math.ceil((product.price-(product.price*product.discountPercentage)/100)*product.quantity)
    })
    setTotal(totalPrice)
  },[cartData])
  return (
    <section className=' my-10'>
      <Container>
        <Breadcrum title={"Cart"}
          linkVal={'shop'} link={'/'}
          currentPage={window.location.pathname.split('/')[1]} currentPageLink={'/cart'}
        />
        <Flex className={'mt-12 flex-col gap-y-3 text-[#262626]  font-bold'}>
          <Flex className={'bg-[#F5F5F3] py-7 w-full justify-around text-base'}>
            <div className='w-[33%]'>Product</div>
            <div className='w-[15%]'>Price</div>
            <div className='w-[14%]'>Discount</div>
            <div className='w-[15%]'>Quantity</div>
            <div className='w-[14%] text-center'>Total</div>
          </Flex>
          {cartData.map((product,index)=>(
            <Flex className={'flex-col gap-y-2'}>
            <Flex className={'w-full justify-around py-3 border border-slate-300 items-center'}>
                <div className='w-[33%]'>
                    <Flex className={'gap-x-4 items-center'}>
                        <ImCross className='cursor-pointer'onClick={()=>dispatch(removeToCart(index))}/>
                        <Img src={product.thumbnail} imgClassName={'w-[80px] h-[80px]'}/>
                        <h1>{product.title}</h1>
                    </Flex>
                </div>
                <div className='w-[15%]'>${product.price}</div>
                <div className='w-[14%]'>{product.discountPercentage}%</div>
                <div className='w-[15%]'>
                    <Flex className={'items-center gap-x-3'}>
                        <button onClick={()=>dispatch(quantityMinus(index))}
                         disabled={product.quantity==1 && true} ><FiMinus /></button>
                        <input type='number' value={product.quantity} className='w-14 h-9 border border-gray-300 text-center'/>
                        <button onClick={()=>dispatch(quantityUpdate(index))}><FiPlus /></button>
                    </Flex>
                </div>
                <div className='w-[14%] text-center'>${Math.ceil((product.price-(product.price*product.discountPercentage)/100)*product.quantity)}</div>
            </Flex>
            <Flex className={'w-full px-4 py-3 border border-slate-300 items-center font-normal text-sm'}>
                <select className='w-[255px] outline-none border border-[#EAEAEA] text-[#262626] text-base py-2 px-4'> 
                    <option className='py-1' selected>Size</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                </select>
                <h1 className='pl-10 font-medium'>Apply coupon:</h1>
                <input type="text" className='w-52 ml-2 outline-none px-2 py-[3px] border border-sky-200' placeholder='apply cupon number' />
            </Flex>
          </Flex>
          ))}
          
        </Flex>
        <div>
          <h1 className='text-right text-xl font-bold mt-10'>Cart Totals</h1>
        </div>
        <Flex className={'w-[644px] ml-auto items-center text-[#767676] text-base font-bold flex-wrap mt-6'}>
          <h1 className='w-1/2 border py-3 pl-4'>Subtotal</h1>
          <h1 className='w-1/2 border border-l-0 py py-3 pl-4 text-[#262626]'>{total}$</h1>
          <h1 className='w-1/2 border py-3 pl-4'>Total</h1>
          <h1 className='w-1/2 border border-l-0 py py-3 pl-4 text-[#262626]'>{total}$</h1>
        </Flex>
        <div className=' text-right mt-8'>
          <Button title={'Proceed to Checkout'}
           link={'/checkout'} 
           className={'bg-[#262626] text-white inline-block py-4 px-6 text-base font-bold rounded-md hover:bg-slate-950 transition-all'}/> 
        </div>
      </Container>
    </section>
  )
}

export default Cart