import React from "react";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";


const Card = () => {
    return (
        <div className="bg-gray-700 rounded-xl w-full max-w-screen-md mx-auto my-24 p-12 flex justify-center items-center">
            <div className="flex w-full p-8">
                <LeftCard/>
                <RightCard/>
            </div>
        </div>
    );
};

export default Card;
