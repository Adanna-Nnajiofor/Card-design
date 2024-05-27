import React from 'react'
import StarImage from './StarImage'
import BoxImage from './BoxImage'
import OrderButton from './OrderButton'

const LeftCard = () => {
    return (
        <div className="bg-blue-200 rounded-l-2xl w-1/2 p-8">
            <h1 className='text-3xl' >Soft fleece cat sweater</h1>
            <StarImage/>
            <BoxImage/>
            <OrderButton/>
            
        </div>
    )
}

export default LeftCard
