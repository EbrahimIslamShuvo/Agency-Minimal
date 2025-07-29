import React from 'react';
import SubHeader from '../../../Component/SubHeader';
import Header from '../../../Component/Header';
import customerOne from '../../../assets/img1.png'
import customerTwo from '../../../assets/img2.png'
import customerThree from '../../../assets/img3.png'

const Customer = () => {
    return (
        <div>
            <div className="flex flex-col items-center mt-15 text-black">
                <SubHeader name={"Customer Comments"}></SubHeader>
                <Header name={"Why customers love us"}></Header>
                <p className='playfair-display-font mt-10 md:text-[28px] text-sm md:max-w-2xl max-w-80 text-center font-light'>They are doing amazing job with hundred percent customer satisfaction, Love their work and would like to work with them again</p>
                <div className="mt-10 w-5/12 mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center gap-3 border-t-3 py-5 border-[#8D448B]">
                        <img className='w-10 rounded-full' src={customerOne} alt="" />
                        <div className="dm-sans-font">
                            <h1 className='font-semibold'>Pierre Hackett</h1>
                            <p className='text-gray-400'>VP of Engineering</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 py-5 ">
                        <img className='w-10 rounded-full' src={customerTwo} alt="" />
                        <div className="dm-sans-font">
                            <h1 className='font-semibold'>Pierre Hackett</h1>
                            <p className='text-gray-400'>VP of Engineering</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 py-5 ">
                        <img className='w-12 h-12 rounded-full' src={customerThree} alt="" />
                        <div className="dm-sans-font">
                            <h1 className='font-semibold'>Pierre Hackett</h1>
                            <p className='text-gray-400'>VP of Engineering</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;