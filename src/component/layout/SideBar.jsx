import React, { useEffect, useState } from 'react'
import InnerSideBar from './InnerSideBar'
// import {category, brands, price} from '../../FakeData/Data'
const SideBar = () => {
  const [products,setProducts]=useState([])

  useEffect(()=>{
    fetch('https://dummyjson.com/products/categories')
    .then(res=>res.json())
    .then((data)=>setProducts(data))
  },[])
  return (
    
    <div className='ml-2 w-[340px]'>
        <InnerSideBar title={'Shop by Category'} DropDown={true} data={products}/>
    </div>
  )
}


export default SideBar