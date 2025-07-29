import React from 'react';
import image from '../../../assets/sec2.png'
import { FaAngleRight } from "react-icons/fa6";

const CustomerSupport = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center justify-center md:w-8/12 w-10/12 mx-auto py-15 text-black">
                <div className="flex flex-col gap-5">
                    <h1 className='dm-sans-font font-bold md:text-[46px] text-[32px] md:leading-[60px] leading-[40px] md:max-w-lg'>Free Customer Support to ensure what you like to expect</h1>
                    <p className='dm-sans-font md:text-[15px] text-[13px] leading-[32px] max-w-md'>We offer a risk-free trial period of up to two weeks. You will only have to pay if you are happy with the developer and wish to continue. If you are unsatisfied, we’ll refund payment or fix issues on our dime period customers.</p>
                    <p className='dm-sans-font md:text-[15px] text-[13px] text-gray-400 leading-[32px] max-w-md'>If you are happy with the developer and wish to continue. If you are unsatisfied, we’ll refund payment or fix issues.</p>
                    <div className="flex items-center gap-1">
                        <p className='dm-sans-font font-semibold md:text-[14px] text-[12px] text-[#8D448B]'>Learn More</p>
                        <div className="text-[#8D448B] rounded-full text-[16px]">
                            <FaAngleRight />
                        </div>
                    </div>
                </div>
                <img className='w-140' src={image} alt="" />
            </div>
        </div>
    );
};

export default CustomerSupport;