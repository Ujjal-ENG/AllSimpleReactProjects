import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import group1 from '../../assets/Group4.png';
import group2 from '../../assets/Group5.png';
import group3 from '../../assets/Group6.png';
import group4 from '../../assets/Group7.png';

const RealWeding = () => {
    return (
        <div>
            <h1 className="text-[#4C696D] text-4xl font-semibold  pt-5 pb-2 px-5">Real Wedding</h1>
            <h1 className="text-[#4C696D] text-xl font-semibold  pb-2 px-5">List your wedding and browse portfolio.</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center gap-10 p-10">
                <div className="w-[350px] h-[400px] shadow-xl bg-[#DDF8F3] rounded-2xl ">
                    <div className="w-[331px] h-[291px]">
                        <img src={group1} alt="img" className="pl-5 py-3 rounded-2xl mx-auto w-full" />
                    </div>
                    <h1 className="text-3xl tracking-wide font-bold px-3 py-2">Danielle & Ronnie</h1>
                    <p className="text-xl font-semibold px-3">38 photos. Kittery, Polland</p>
                </div>
                <div className="w-[350px] h-[400px] shadow-xl bg-[#FBDADA] rounded-2xl ">
                    <div className="w-[331px] h-[291px]">
                        <img src={group2} alt="img" className="pl-5 py-3 rounded-2xl" />
                    </div>
                    <h1 className="text-3xl tracking-wide font-bold px-3 py-2">Danielle & Ronnie</h1>
                    <p className="text-xl font-semibold px-3">38 photos. Kittery, Polland</p>
                </div>
                <div className="w-[350px] h-[400px] shadow-xl bg-[#FFF9D9] rounded-2xl ">
                    <div className="w-[331px] h-[291px]">
                        <img src={group3} alt="img" className="pl-5 py-3 rounded-2xl" />
                    </div>
                    <h1 className="text-3xl tracking-wide font-bold px-3 py-2">Danielle & Ronnie</h1>
                    <p className="text-xl font-semibold px-3">38 photos. Kittery, Polland</p>
                </div>
                <div className="w-[350px] h-[400px] shadow-xl bg-[#DDE4FF] rounded-2xl ">
                    <div className="w-[331px] h-[291px]">
                        <img src={group4} alt="img" className="pl-5 py-3 rounded-2xl" />
                    </div>
                    <h1 className="text-3xl tracking-wide font-bold px-3 py-2">Danielle & Ronnie</h1>
                    <p className="text-xl font-semibold px-3">38 photos. Kittery, Polland</p>
                </div>
            </div>

            <div className="flex justify-center items-center py-5">
                <button type="button" className="btn bg-[#DDF9FF] px-10 text-black text-xl font-bold ">
                    View More Weddings
                    <AiOutlineArrowRight size={32} />
                </button>
            </div>
        </div>
    );
};

export default RealWeding;
