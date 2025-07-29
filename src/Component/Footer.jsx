import React from 'react';
import logo from '../assets/logo1.png'
import arrow from '../assets/grp1.png'
import threeLine from '../assets/grp2.png'

const Footer = () => {
    return (
        <div>
            <div className="mt-25 text-black">
                <div className="bg-[#8D448B] md:w-7/12 w-10/12 mx-auto flex  justify-between rounded-xl md:px-25 px-5 py-5 items-center">
                    <h1 className='dm-sans-font text-white md:text-[25px] text-[12px] max-w-md font-bold '>Hire the world’s best developers  and designers around!</h1>
                    <img className='w-15 md:w-auto' src={arrow} alt="" />
                    <div className="flex flex-col items-center justify-center gap-2">
                        <img className='rotate-180 w-8 md:w-auto' src={threeLine} alt="" />
                        <div className="bg-white  text-[#8D448B] text-sm md:text-base text-center md:px-5 px-2 py-3">
                            HIRE DEVELOPERS
                        </div>
                        <img className=' w-8 md:w-auto' src={threeLine} alt="" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between md:w-7/12 mx-auto py-4">
                    <div className="flex items-center gap-3">
                        <img className='w-5' src={logo} alt="" />
                        <p className='dm-sans-font text-sm'>Copyright by 2019 Dev, Inc</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <p className='dm-sans-font text-sm'>Home</p>
                        <p className='dm-sans-font text-sm'>Advertise</p>
                        <p className='dm-sans-font text-sm'>Supports</p>
                        <p className='dm-sans-font text-sm'>Marketing</p>
                        <p className='dm-sans-font text-sm'>FAQ</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;