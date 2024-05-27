import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BiSolidCheckbox } from "react-icons/bi";

const ControlButton = () => {
    // Define the colors for the icons
    const colors = ["black", "gray", "gray", "gray", "gray"];

    return (
        <div className="flex justify-center items-center mt-20">
            <MdKeyboardArrowLeft size ={20} />
            {colors.map((color, index) => (
                <BiSolidCheckbox key={index} size ={20} style={{ color: color }} />
            ))}
            <MdKeyboardArrowRight size ={20} />
        </div>
    );
}

export default ControlButton;
