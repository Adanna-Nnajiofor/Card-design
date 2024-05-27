import React from 'react'
import catImage from '../assets/images/cat-images-removebg-preview.png';

const Avartar = () => {
    return (
        <div className="flex flex-col justify-center items-center  ">
            <img
                src={catImage}
                alt="cat"
                className="object-contain w-full h-full"
            />
        </div>
    )
}

export default Avartar
