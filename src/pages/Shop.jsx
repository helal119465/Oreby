import React, { useEffect, useState } from 'react'
import Container from '../component/layout/Container'
import Breadcrum from '../component/Breadcrum'
import Flex from '../component/layout/Flex'
import SideBar from '../component/layout/SideBar'
import Products from '../component/layout/Products'
import { IoGridSharp,IoList } from "react-icons/io5";
import Filter from '../component/layout/Filter'

const Shop = () => {
  const [products,setProducts]=useState([])
  useEffect(()=>{
    fetch('https://dummyjson.com/products?limit=100')
    .then(res=>res.json()).then((data)=>setProducts(data.products))
  },[])
  return (
    <section>
      <Container>
        <Breadcrum 
          title={window.location.pathname.split('/')[1]}
          linkVal={'home'}  link={'/'}
          currentPage={window.location.pathname.split('/')[1]} currentPageLink={'/shop'}
        />
        <Flex  className='my-12 gap-8'>
          <SideBar/>
          <div className='w-[71%]'>
            <Flex className={'mb-[60px]'}>
              <Flex className={'w-[25%] gap-x-5 text-3xl'}>
                <IoGridSharp />
                <IoList />
              </Flex>
              <Flex className={'w-[75%] justify-end gap-x-10 '}>
                <Filter title={"Sort by:"} selectClass={'w-[200px]'}>
                  <option value="">Featured</option>
                  <option value="">Best Seller</option>
                  <option value="">New Arrival</option>
                </Filter>
                <Filter title={"Show:"} selectClass={'w-[100px]'}>
                  <option value="">12</option>
                  <option value="">24</option>
                  <option value="">36</option>
                </Filter>
              </Flex>
            </Flex>
            
            <Flex className={'flex-wrap gap-y-10 gap-x-6 justify-center'}>
              {
                products.map((products)=>(
                <Products
                className={'w-full sm:w-[47%] lg:w-[31.5%]'}
                label={products.brand}
                labelShow={true}
                ProductImg={products.thumbnail}
                ProductTitle={products.category}
                Price={products.price}
              />
                ))}
            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Shop