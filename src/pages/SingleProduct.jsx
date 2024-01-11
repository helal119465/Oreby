import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrum from '../component/Breadcrum'
import Container from '../component/layout/Container'
import Flex from '../component/layout/Flex'
import Img from '../component/layout/Img'
import { IoMdAdd,IoMdRemove } from "react-icons/io";
import ReactStars from "react-rating-stars-component";
import { MdStar,MdStarOutline,MdStarHalf } from "react-icons/md";
import { useDispatch } from 'react-redux'
import { addToCartFun } from '../app/Slices/addToCart'


const SingleProduct = () => {
  let [loading,setLoading] = useState(true)
  let {productId}= useParams()
  let [feturesShow,setFeturesShow]=useState(false)
  let [shippingShow,setShppingShow]=useState(false)
  let [show,setShow] =useState(true)
  const [product,setProduct]=useState([])
  let dispatch=useDispatch()

  useEffect(()=>{
    const getData=async()=> { 
      await fetch(`https://dummyjson.com/products/${productId}`)
      .then(res=>res.json())
      .then((data)=>setProduct(data))
      .finally(() => setLoading(false));
    }
    getData();
  },[])
  
  const handleAddToCart=()=>{
    dispatch(addToCartFun({...product,quantity:1}))
  }

  const handleFetures=()=>{
    setFeturesShow(!feturesShow)
  }
  const handleShipping=()=>{
    setShppingShow(!shippingShow)
  }
  const handleDescription=()=>{
    setShow(true)
  }
  const handleReviewsn=()=>{
    setShow(false)
  }
  const secondExample = {
    size: 30,
    count: product.rating,
    edit: false,
    color: "red",
    activeColor: "orange",
    value: 4.5,
    a11y: true,
    isHalf: true,
    emptyIcon:  <MdStarOutline />,
    halfIcon: <MdStarHalf />,
    filledIcon: <MdStar />
  };
  return (
    <section className='font-dm bg-'>
      <Container>
        <Breadcrum 
          title={"Product"}
          linkVal={'home'} link={'/'}
          currentPage={"Product"} 
        />
       {loading?"Loading....":
       <Flex className={' flex-wrap gap-2 gap-y-5 mt-10'}>
          {product.images.length && product.images.map((value)=>(
            <Img src={value}
              className={'w-32%'} imgClassName={'w-[382px] h-[320px]'}
            />
          ))}
        </Flex>}
        <Flex className={'flex-col w-[780px] text-base font-bold text-zinc-800'}>
         <h5 className='text-[39px] font-bold my-8'>{product.title}</h5>
          <Flex  className={'w-full py-4 border-b-[1px] border-[#F0F0F0]'}>
            <h5 className='mr-14'>Price:</h5>
            <strike><p className='text-[#767676] text-base font-semibold'>${product.price}</p></strike>
            <p className='ml-3'>${Math.ceil(product.price-(product.price*product.discountPercentage)/100)}</p>
          </Flex>
          <Flex className={'w-full py-4 border-b-[1px] border-[#F0F0F0] items-center gap-x-10'}>
            <h1 className=''>Rating:</h1>
            <ReactStars {...secondExample} />
          </Flex>
          <Flex className={'w-full py-4 border-b-[1px] border-[#F0F0F0] items-center'}>
            <h5 className='capitalize'>Color:</h5>
            <div className='flex gap-x-3 ml-14 items-center'>
              <p className='w-5 h-5 rounded-full bg-black'></p>
              <p className='w-8 h-8 rounded-full bg-sky-600'></p>
              <p className='w-5 h-5 rounded-full bg-purple-600'></p>
              <p className='w-5 h-5 rounded-full bg-red-500'></p>
            </div>
          </Flex>
          <Flex className={'w-full py-4 border-b-[1px] border-[#F0F0F0]'}>
            <h5 className='capitalize'>QUANTITY:</h5>
            <input type="number" className='ml-8 w-[140px] h-9 text-center border border-[#767676] outline-none' />
          </Flex>
          <Flex className={'w-full py-4 border-b-[1px] border-[#F0F0F0]'}>
            <h5 className='capitalize'>Status:</h5>
            <span className='text-[#767676] ml-16 font-medium'>{product.stock==0?"Out of Stock":"In Stock"}</span>
          </Flex>
          <Flex className={'w-full text-base  py-4 border-b-[1px] border-[#F0F0F0] gap-x-4'}>
            <button className='text-[#262626] bg-[#FFFFFF] hover:bg-[#b6b6b6] w-[200px] h-[50px] text-center border border-[#262626] transition-all duration-75'>Add to Wish List</button>
            <button className='text-[#FFFFFF] bg-slate-800 hover:bg-[#000000] w-[200px] h-[50px] text-center  border border-[#262626] transition-all duration-75'  onClick={handleAddToCart}>Add to Cart</button>
          </Flex>
          <div className='py-4 border-b-[1px]  border-[#F0F0F0]'>
            <h5 className='capitalize flex items-center justify-between ' onClick={handleFetures}>FEATURES  & DETAILS <span className='text-2xl font-bold'>{feturesShow?<IoMdRemove />:<IoMdAdd />}</span> </h5>
            {feturesShow && <p className='text-[#767676] text-base font-normal  '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo possimus omnis quod laborum tempora dolores obcaecati, itaque totam vitae numquam voluptatum modi, quaerat veniam magnam temporibus corporis voluptates. Pariatur repellat dolorem a placeat at accusamus, voluptate nam ratione. Officia omnis quasi eligendi incidunt ratione dolorem. Alias fuga veniam omnis illum.</p> } 
          </div>

          <div className='py-4 border-b-[1px] border-[#F0F0F0]'>
            <h5 className='capitalize flex items-center justify-between' onClick={handleShipping}>SHIPPING & RETURNS <span className='text-2xl font-bold'>{shippingShow?<IoMdRemove />:<IoMdAdd />}</span> </h5>
            {shippingShow && <p className='text-[#767676] text-base font-normal '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo possimus omnis quod laborum tempora dolores obcaecati, itaque totam vitae numquam voluptatum modi, quaerat veniam magnam temporibus corporis voluptates. Pariatur repellat dolorem a placeat at accusamus, voluptate nam ratione. Officia omnis quasi eligendi incidunt ratione dolorem. Alias fuga veniam omnis illum.</p> } 
          </div>
        </Flex>
        <Flex className={'mt-20 flex-col'}>
          <div className='flex items-center'>
            <h5 className={`${show?"text-[#262626] text-xl font-bold":"text-[#767676] text-xl font-normal"} w-[15%] cursor-pointer`} onClick={handleDescription}>Description</h5>
            <h5 className={`${show?"text-[#767676] text-xl font-normal":"text-[#262626] text-xl font-bold"} w-[85%] cursor-pointer`} onClick={handleReviewsn}>Reviews</h5>
          </div>
            {show? <p className=' pt-9'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? </p>:<div>
          <h5 className='text-[#767676] text-sm pt-9 pb-3 border-b-[1px] border-[#F0F0F0]'>1 Review for Product</h5>
          <Flex className={'w-full flex-col pt-9 pb-3 border-b-[1px] border-[#F0F0F0] text-base'}>
            <Flex className={'justify-between w-full pb-4'}>
              <h5 className='flex items-center'>John Ford
                <span className='text-orange-600 flex ml-9'> 
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                </span>
              </h5>
              <h5 className='text-[#767676]'>6 months</h5>
            </Flex>
              <p className='text-[#767676] text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </Flex>
          <div className={'my-11'}>
            <h5 className='text-[#262626] text-xl font-bold'>Add a Review</h5>
          </div>
          <div>
              <label className='text-[#262626] text-base font-bold block'>Name</label>
              <input type="text" className='outline-none pt-[10px] pb-4 border-b border-[#F0F0F0] w-1/2' placeholder='Your name here' />
            </div>
            <div className='mt-6'>
              <label className='text-[#262626] text-base font-bold block'>Email</label>
              <input type='email' className='outline-none pt-[10px] pb-4 border-b border-[#F0F0F0] w-1/2' placeholder='helal@2024gmail.com' />
            </div>
            <div className='mt-6'>
              <label className='text-[#262626] text-base font-bold block'>Review</label>
              <input type="text" className='outline-none pt-[10px] pb-4 border-b border-[#F0F0F0] w-1/2' placeholder='Your review here' />
            </div>
            <div className='mt-6'>
              <button className='text-[#fafafa] bg-slate-800 hover:bg-[#000000] w-[200px] h-[50px] font-bold text-center border border-[#262626] transition-all duration-75'>Send</button>
            </div>
        </div>}
        </Flex>
      </Container>
    </section>
  )
}

export default SingleProduct