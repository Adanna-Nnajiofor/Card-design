import React, { useState } from 'react';
import { BiSolidCheckbox } from "react-icons/bi";

const BoxImage = () => {
    // Define an array of colors
    const colors = ["blue", "navyBlue", "purple", "yellow", "green"];
    const sizes = ["S", "M", "L", "XL"];

    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    const handleColorClick = (color) => {
        setSelectedColor(color === selectedColor ? null : color);
    };

    const handleSizeClick = (size) => {
        setSelectedSize(size === selectedSize ? null : size);
    };

    return (
        <div className="mt-5 mb-5">
            <div className="flex items-center mb-5">
                <p className="mr-5 text-lg">Color</p>
                {colors.map((color, index) => (
                    <BiSolidCheckbox
                        key={index}
                        size={selectedColor === color ? 50 : 40} // Increase size if selected
                        color={color}
                        onClick={() => handleColorClick(color)}
                        className="cursor-pointer"
                    />
                ))}
            </div>
            <div className="flex items-center">
                <p className="mr-10 text-lg">Size</p>
                {sizes.map((size, index) => (
                    <p
                        key={index}
                        className={`mr-5 text-lg cursor-pointer ${selectedSize === size ? 'border-solid border border-black rounded-lg px-3 py-1' : ''}`} // Apply styles if selected
                        onClick={() => handleSizeClick(size)}
                    >
                        {size}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default BoxImage;
