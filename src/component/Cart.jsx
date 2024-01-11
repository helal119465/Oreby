import React from 'react'
import Breadcrum from './Breadcrum'
import Flex from './layout/Flex'
import Container from './layout/Container'
import { ImCross } from "react-icons/im";
import CartImg from '../assets/CartImg.png'
import Img from './layout/Img';
import { FiPlus,FiMinus } from "react-icons/fi";
const Cart = () => {
  return (
    <section className=' my-10'>
      <Container>
        <Breadcrum title={"Cart"}
          linkVal={'shop'} link={'/'}
          currentPage={window.location.pathname.split('/')[1]} currentPageLink={'/cart'}
        />
        <Flex className={'mt-12 flex-col gap-y-3 text-[#262626]  font-bold'}>
          <Flex className={'bg-[#F5F5F3] py-7 w-full justify-around text-base'}>
            <div className='w-[40%]'>Product</div>
            <div className='w-[18%]'>Price</div>
            <div className='w-[18%]'>Quantity</div>
            <div className='w-[15%]'>Total</div>
          </Flex>
          <Flex className={'flex-col gap-y-2'}>
            <Flex className={'w-full justify-around py-2 border border-slate-300 items-center'}>
                <div className='w-[40%]'>
                    <Flex className={'gap-x-4 items-center'}>
                        <ImCross/>
                        <Img src={CartImg} className={'w-[100px] h-[100px]'}/>
                        <h1>Product Name</h1>
                    </Flex>
                </div>
                <div className='w-[18%]'>$44.00</div>
                <div className='w-[18%]'>
                    <Flex className={'items-center gap-x-3'}>
                        <button><FiMinus /></button>
                        <input type='number' value={"1"} className='w-14 h-9 border border-gray-300 text-center'/>
                        <button><FiPlus /></button>
                    </Flex>
                </div>
                <div className='w-[15%]'>$44.00</div>
            </Flex>
            <Flex className={'w-full px-4 py-3 border border-slate-300 items-center font-normal text-sm'}>
                <select className='w-[255px] outline-none border border-[#EAEAEA] text-[#767676] text-base  py-2 px-4'> 
                    <option className='' selected>Size</option>
                </select>
                <h1 className='pl-10 font-medium'>Apply coupon:</h1>
                <input type="text" className='w-52 ml-2 outline-none px-2 py-[3px] border border-sky-200' placeholder='apply cupon number' />
            </Flex>
          </Flex>
        </Flex>
    </Container>
    </section>
  )
}

export default Cart