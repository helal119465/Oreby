import React, { useEffect, useState } from 'react'
import Container from '../component/layout/Container'
import Breadcrum from '../component/Breadcrum'
import Flex from '../component/layout/Flex'
import Input from '../component/layout/Input'
import Title from '../component/layout/Title'
import { useSelector } from 'react-redux'
import Button from '../component/layout/Button'

const Checkout = () => {
    let [couponShow,setCouponShow] = useState(false)
    const handleCoupon=()=>{
        setCouponShow(!couponShow)
    }
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
    <section className='font-dm'>
        <Container>
            <Breadcrum 
             title={"Checkout"}
             link={"/cart"} linkVal={'cart'}
             currentPage={window.location.pathname.split("/")[1]} currentPageLink={'/checkOut'}
            />
            <Flex className={'my-16 flex-col'}>
                <h5 className='text-[#767676] text-base'>Have a coupon?
                  <span className='text-[#262626] cursor-pointer underline font-semibold italic'
                   onClick={handleCoupon}> Click here to enter your code</span>
                </h5>
                {couponShow && <div className='w-[330px] py-10 bg-emerald-500 rounded-sm'>
                    <input type="text" className='bg-gray-200  ml-4 py-1 rounded-sm outline-none'/>
                    <button className='text-sm text-white ml-4 bg-slate-800 p-2 rounded-md hover:bg-indigo-800 transition-colors'>Apply Coupon</button>
                </div>}
            </Flex>
            <Title title={'Billing Details'}/>
            <Flex></Flex>
            <Flex className={' justify-between'}>
                <Input
                 className={'w-[48%]'} 
                 label={"First Name *"}
                 type={"text"}
                 placeholder={"first Name"}
                />
                 <Input
                 className={'w-[48%]'} 
                 label={"Last Name *"}
                 type={"text"}
                 placeholder={"last Name"}
                />
            </Flex>
            <Input 
              label={'Companye Name (optional)'}
              type={'text'}
              placeholder={'Company Name'}
            />
            <Input
              label={'Country *'}
              type={'text'}
              placeholder={'Country'} 
            />
            <Input
              label={'Street Address *'}
              type={'text'}
              placeholder={'House number and street name'}
            />
            <Input
              label={'Town/City *'}
              type={'text'}
              placeholder={'Town/City'}
            />
            <Input
              label={'Post Code *'}
              type={'number'}
              placeholder={'Post Code'}
            />
            <Input
              label={'Phone *'}
              type={'tel'}
              placeholder={'Phone'}
            />
            <Input
              label={'Email Address *'}
              type={'email'}
              placeholder={'Email'}
            />
            <Input
              label={"Password"}
              type={'password'}
              placeholder={'password'}
            />
            <Flex className={'flex-col'}>
                <Title title={'Additional Information'}/>
                <div>
                    <h1 className='text-[#262626] text-base font-semibold underline italic'>Other Notes (optional)</h1>
                    <textarea name="" id="" cols="70" rows="7" className='bg-slate-100 outline-indigo-400' 
                    placeholder='Notes about your order, e.g. special notes for delivery.'></textarea>
                </div>
            </Flex>
            <Title title={'Your Order'}/>
            <Flex className={'w-[644px] items-center text-[#262626] text-base font-bold flex-wrap'}>
                <h1 className='w-1/2 border py-3 pl-4'>Product</h1>
                <h1 className='w-1/2 border border-l-0 py-3 pl-4'>Total</h1>
                <h1 className='w-1/2 border py-3 pl-4'>SubTotal</h1>
                <h1 className='w-1/2 border border-l-0 py-3 pl-4 font-normal'>${total}</h1>
                <h1 className='w-1/2 border py-3 pl-4'>Total</h1>
                <h1 className='w-1/2 border border-l-0 py-3 pl-4 font-normal'>${total}</h1>
            </Flex>
            <div className='mt-16'>
                <Button title={'Proceed to Bank'}
                className={'bg-[#262626] text-white inline-block py-4 px-6 text-base font-bold rounded-md hover:bg-slate-950 transition-all'}/> 
            </div>
        </Container>
    </section>
  )
}

export default Checkout