/* eslint-disable react/jsx-indent-props */
import React from 'react';
import img from '../../assets/discount.png';

const Offers = () => {
    return (
        <div className="border-y-2 border-black my-10 pb-5 bg-gradient-to-t from-transparent via-[#BADCDC] to-transparent">
            <h1 className="text-[#4C696D] text-4xl font-semibold text-center pt-5 pb-2">Best Offers</h1>
            <h1 className="text-[#4C696D] text-xl font-semibold text-center  pb-2">Discover the best offers on our services</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center py-9 gap-10 md:gap-0">
                <div className="w-[350px] h-[440px] bg-white rounded-2xl">
                    <div className="w-full h-[395px] relative">
                        <img
                            src="https://images.pexels.com/photos/3014860/pexels-photo-3014860.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="img"
                            className="w-full h-full rounded-2xl shadow-2xl duration-200 transition-all ease-in-out hover:scale-110"
                        />
                        <div className="absolute top-10 text-white w-full text-center">
                            <h1 className="text-4xl font-semibold tracking-wide">Weeding</h1>
                            <h1 className="text-4xl font-semibold tracking-wide">Packages</h1>
                            <div className="bg-white h-0.5 my-3 w-80 mx-auto" />
                        </div>
                        <div className="absolute bottom-10 text-white w-full text-start">
                            <h1 className="text-4xl font-semibold tracking-wide pl-4">Discount</h1>
                            <img src={img} alt="discount" className="duration-200 transition-all ease-in-out hover:scale-110" />
                        </div>
                    </div>
                    <h1 className="uppercase text-center pb-5 pt-2 font-bold text-xl">Book Now</h1>
                </div>
                <div className="w-[350px] h-[440px] bg-white rounded-2xl">
                    <div className="w-full h-[395px] relative">
                        <img
                            src="https://images.pexels.com/photos/3650446/pexels-photo-3650446.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="img"
                            className="w-full h-full rounded-2xl shadow-2xl duration-200 transition-all ease-in-out hover:scale-110"
                        />
                        <div className="absolute top-10 text-white w-full text-center">
                            <h1 className="text-4xl font-semibold tracking-wide">Website</h1>
                            <h1 className="text-4xl font-semibold tracking-wide">Design</h1>
                            <div className="bg-white h-0.5 my-3 w-80 mx-auto" />
                        </div>
                        <div className="absolute bottom-10 text-white w-full text-start">
                            <h1 className="text-4xl font-semibold tracking-wide pl-4">Discount</h1>
                            <img src={img} alt="discount" className="duration-200 transition-all ease-in-out hover:scale-110" />
                        </div>
                    </div>
                    <h1 className="uppercase text-center pb-5 pt-2 font-bold text-xl">Book Now</h1>
                </div>
                <div className="w-[350px] h-[440px] bg-white rounded-2xl">
                    <div className="w-full h-[395px] relative">
                        <img
                            src="https://images.pexels.com/photos/3702868/pexels-photo-3702868.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="img"
                            className="w-full h-full rounded-2xl shadow-2xl duration-200 transition-all ease-in-out hover:scale-110"
                        />
                        <div className="absolute top-10 text-white w-full text-center">
                            <h1 className="text-4xl font-semibold tracking-wide">Beach</h1>
                            <h1 className="text-4xl font-semibold tracking-wide">Photography</h1>
                            <div className="bg-white h-0.5 my-3 w-80 mx-auto" />
                        </div>
                        <div className="absolute bottom-10 text-white w-full text-start">
                            <h1 className="text-4xl font-semibold tracking-wide pl-4">Discount</h1>
                            <img src={img} alt="discount" className="duration-200 transition-all ease-in-out hover:scale-110" />
                        </div>
                    </div>
                    <h1 className="uppercase text-center pb-5 pt-2 font-bold text-xl">Book Now</h1>
                </div>
                <div className="w-[350px] h-[440px] bg-white rounded-2xl">
                    <div className="w-full h-[395px] relative">
                        <img
                            src="https://images.pexels.com/photos/15181110/pexels-photo-15181110/free-photo-of-woman-in-traditional-bridal-saree-dress.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="img"
                            className="w-full h-full rounded-2xl shadow-2xl duration-200 transition-all ease-in-out hover:scale-110"
                        />
                        <div className="absolute top-10 text-white w-full text-center">
                            <h1 className="text-4xl font-semibold tracking-wide">Garden</h1>
                            <h1 className="text-4xl font-semibold tracking-wide">Photography</h1>
                            <div className="bg-white h-0.5 my-3 w-80 mx-auto" />
                        </div>
                        <div className="absolute bottom-10 text-white w-full text-start">
                            <h1 className="text-4xl font-semibold tracking-wide pl-4">Discount</h1>
                            <img src={img} alt="discount" className="duration-200 transition-all ease-in-out hover:scale-110" />
                        </div>
                    </div>
                    <h1 className="uppercase text-center pb-5 pt-2 font-bold text-xl">Book Now</h1>
                </div>
            </div>
        </div>
    );
};

export default Offers;
