import React from 'react';
import SubHeader from '../../../Component/SubHeader';
import Header from '../../../Component/Header';
import featureOne from "../../../assets/aad1.png"
import featureTwo from "../../../assets/aad2.png"
import featureThree from "../../../assets/aad3.png"
import featureFour from "../../../assets/aad4.png"


const Feature = () => {
    return (
        <div>
            <div className="flex flex-col items-center mt-15">
                <SubHeader name={"Quality features"}></SubHeader>
                <Header name={"Meet exciting feature of app"}></Header>
                <div className="flex flex-col md:flex-row items-center justify-center md:gap-20 gap-10 mt-10">
                    <div className="flex flex-col justify-center items-center text-center gap-6">
                        <div className={`bg-gradient-to-tl from-[#FFCC40] to-[#FFCC40]/35 rounded-2xl shadow-lg p-4 flex items-center justify-center`}>
                            <img className="w-12" src={featureOne}/>
                        </div>
                        <h1 className=" dm-sans-font font-bold text-[18px]">Unlimited Customization</h1>
                        <p className="text-[13px] dm-sans-font font-medium text-gray-400 max-w-55">Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center gap-6">
                        <div className={`bg-gradient-to-tl from-[#25D9D9] to-[#25D9D9]/30 rounded-2xl shadow-lg px-4 py-6 flex items-center justify-center`}>
                            <img className="w-12" src={featureTwo} />
                        </div>
                        <h1 className=" dm-sans-font font-bold text-[18px]">Vector shape & resizable</h1>
                        <p className="text-[13px] dm-sans-font font-medium text-gray-400 max-w-55">Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center gap-6">
                        <div className={`bg-gradient-to-tl from-[#0898E7] to-[#0898E7]/35 rounded-2xl shadow-lg p-4 flex items-center justify-center`}>
                            <img className="w-12" src={featureThree} />
                        </div>
                        <h1 className=" dm-sans-font font-bold text-[18px]">Editing freedom</h1>
                        <p className="text-[13px] dm-sans-font font-medium text-gray-400 max-w-55">Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center gap-6">
                        <div className={`bg-gradient-to-tl from-[#FF9066] to-[#FF9066]/35 rounded-2xl shadow-lg p-4 flex items-center justify-center`}>
                            <img className="w-12" src={featureFour}  />
                        </div>
                        <h1 className=" dm-sans-font font-bold text-[18px]">Best Award history</h1>
                        <p className="text-[13px] dm-sans-font font-medium text-gray-400 max-w-55">Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;