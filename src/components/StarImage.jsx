import React from 'react'
import { IoStarSharp, IoStarHalfSharp } from "react-icons/io5";


const StarImage = () => {
  return (
    <div className="flex mt-5 mb-5">
      {Array(4).fill(<IoStarSharp size={20} color="orange" />)}
      <IoStarHalfSharp size={20} color="orange" />
      <p className="ml-2">345 ratings</p>
    </div>
  )
}

export default StarImage