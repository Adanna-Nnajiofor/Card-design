import React from 'react'
import { IoIosHeart } from "react-icons/io";

const OrderButton = () => {
  return (
    <div className="mt-10 mb-5">
        <h1 className='text-2xl'>$ 14.99</h1>
        <div className="flex items-center mt-5">
            <button className='bg-black text-white border-solid border rounded-lg px-14 py-2 mr-3'>Order now</button>
            <button className='border-solid border border-black rounded-lg px-2 py-2'><IoIosHeart size={20} /></button>
        </div>
    </div>
  )
}

export default OrderButton