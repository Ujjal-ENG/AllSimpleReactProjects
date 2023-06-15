import React from 'react';
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.png';
import logo5 from '../../assets/logo5.png';

const OurSuccess = () => {
    return (
        <div className="w-[1650px] rounded-xl mx-auto mt-10 h-[460px] bg-[#ACCBC7]">
            <h1 className="text-[#4C696D] text-4xl font-semibold text-center pt-5 pb-2">Our Success</h1>
            <h1 className="text-[#4C696D] text-xl font-semibold text-center  pb-2">Journey of Our Success</h1>
            <div className="grid md:grid-cols-5 justify-items-center px-10 pt-10">
                <div className="flex justify-center items-center flex-col gap-3">
                    <div className="w-48 h-48 rounded-full bg-white flex justify-center items-center">
                        <img src={logo1} alt="logo1" />
                    </div>
                    <p className="text-center tracking-wide">Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup India.</p>
                </div>
                <div className="flex justify-center items-center flex-col gap-3">
                    <div className="w-48 h-48 rounded-full bg-white flex justify-center items-center">
                        <img src={logo2} alt="logo2" />
                    </div>
                    <p className="text-center tracking-wide">Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup India.</p>
                </div>
                <div className="flex justify-center items-center flex-col gap-3">
                    <div className="w-48 h-48 rounded-full bg-white flex justify-center items-center">
                        <img src={logo3} alt="logo3" />
                    </div>
                    <p className="text-center tracking-wide">Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup India.</p>
                </div>
                <div className="flex justify-center items-center flex-col gap-3">
                    <div className="w-48 h-48 rounded-full bg-white flex justify-center items-center">
                        <img src={logo4} alt="logo4" />
                    </div>
                    <p className="text-center tracking-wide">Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup India.</p>
                </div>
                <div className="flex justify-center items-center flex-col gap-3">
                    <div className="w-48 h-48 rounded-full bg-white flex justify-center items-center">
                        <img src={logo5} alt="logo4" />
                    </div>
                    <p className="text-center tracking-wide">Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup India.</p>
                </div>
            </div>
        </div>
    );
};

export default OurSuccess;
