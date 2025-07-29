import React from 'react';
import { FaAngleRight } from "react-icons/fa6";
import image from '../../../assets/mask.png'
import { FaPlay } from "react-icons/fa";

const Trust = () => {
    return (
        <div>
            <div className="flex flex-col items-center gap-5 text-black">
                <h1 className='dm-sans-font font-bold md:text-[44px] text-[35px] text-center md:leading-[60px] leading-[43px] max-w-xl'>Leading companies trust us to develop software</h1>
                <p className='dm-sans-font text-[15px] text-center leading-[28px] text-gray-600 max-w-lg'>We believe it’s important for everyone to have access to software especially when it comes to digital learning be navigate.</p>
                <div className="flex items-center gap-1 ml-8">
                    <p className='dm-sans-font font-semibold text-[14px] text-[#8D448B]'>Explore Details</p>
                    <div className="text-[#8D448B] rounded-full  md:text-[16px] text-[14px]">
                        <FaAngleRight />
                    </div>
                </div>
                <div className="mt-10">
                    <img className='md:w-240 w-100 h-60 md:h-140 rounded-lg' src={image} alt="" />
                    <div className="md:w-240 w-100 h-60 md:h-140 rounded-lg bg-black/25 md:-mt-140 -mt-60 relative flex justify-center items-center">
                        <div className="bg-white text-[#8D448B] md:text-5xl text-3xl p-8 rounded-full">
                            <FaPlay />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trust;