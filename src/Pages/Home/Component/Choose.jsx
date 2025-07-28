import React from 'react';
import choose from '../../../assets/sec2.png'
import { GrStatusGood } from "react-icons/gr";
import { FaAngleRight } from "react-icons/fa6";

const Choose = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center gap-20 container px-6 mx-auto py-15">
                <div className="flex justify-center items-center mx-auto">
                    <div className="">
                        <img className='w-150' src={choose} alt="" />
                    </div>
                </div>
                <div className="">
                    <h1 className='dm-sans-font font-bold md:text-[44px] text-[30px] md:leading-[60px] leading-[45px] max-w-lg'>Boost your agencies by choosing Ninja Developers</h1>
                    <p className='dm-sans-font md:text-[16px] text-[14px] leading-[30px] max-w-md text-gray-500 font-medium'>Create custom landing pages with Shades that convert more visitors than any website, no coding required.</p>
                    <div className="flex flex-col gap-4 mt-5">
                        <div className="flex items-center gap-2">
                            <div className="bg-[#C7D0DC] text-white rounded-full text-[22px]">
                                <GrStatusGood />
                            </div>
                            <p className='dm-sans-font md:text-[16px] text-[14px]'>Unlimited design possibility</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-[#C7D0DC] text-white rounded-full text-[22px]">
                                <GrStatusGood />
                            </div>
                            <p className='dm-sans-font  md:text-[16px] text-[14px]'>Completely responsive features</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-[#C7D0DC] text-white rounded-full text-[22px]">
                                <GrStatusGood />
                            </div>
                            <p className='dm-sans-font  md:text-[16px] text-[14px]'>Easy to customize plugins</p>
                        </div>
                        <div className="flex items-center gap-2 ml-8">
                            <p className='dm-sans-font font-semibold  md:text-[16px] text-[14px] text-[#8D448B]'>Learn More</p>
                            <div className="text-[#8D448B] rounded-full text-[22px]">
                                <FaAngleRight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;