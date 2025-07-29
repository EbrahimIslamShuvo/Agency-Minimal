import React from 'react';
import paypal from '../../../assets/paypal.png'
import google from '../../../assets/google.png'
import dropBox from '../../../assets/Dropbox.png'
import hero_img from '../../../assets/hero.png'
const Hero = () => {
    return (
        <div className='bg-[#F6F8FB] text-black'>
            <div className="flex flex-col md:flex-row items-center py-15 lg:px-25 px-6 container mx-auto">
                <div className="md:w-6/12 flex flex-col gap-3">
                    <h1 className='dm-sans-font font-bold lg:text-[64px] md:text-[40px] text-[32px] lg:leading-[80px] md:leading-[48px] md:max-w-xl'>Great software is build with amazing developers</h1>
                    <p className='dm-sans-font text-gray-500 lg:text-[18px] md:text-[14px] text-[14px] leading-[30px] max-w-lg'>We help build and manage a team of world-class developers to bring your vision to life</p>
                    <div className="flex items-center gap-5">
                        <input className='bg-white md:w-95 w-60 px-8 py-3 rounded-sm placeholder:text-md placeholder:font-semibold' type="text" placeholder='Subscribe newsletter' />
                        <div className='bg-[#8D448B] text-white px-5 py-3 rounded-sm'>
                            Subscribe
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex gap-4 mt-5 ">
                            <p className='text-gray-400 dm-sans-font'>Sponsored:</p>
                            <img className='w-20' src={paypal} alt="" />
                            <img className='w-20' src={google} alt="" />
                            <img className='w-20' src={dropBox} alt="" />
                        </div>
                    </div>
                </div>
                <div className="mt-5 md:mt-0">
                    <img className='w-[680px]' src={hero_img} alt="" />
                </div>
                <div className="md:hidden">
                    <div className="flex gap-4 mt-5 ">
                        <p className='text-gray-400 dm-sans-font'>Sponsored:</p>
                        <img className='w-20' src={paypal} alt="" />
                        <img className='w-20' src={google} alt="" />
                        <img className='w-20' src={dropBox} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;