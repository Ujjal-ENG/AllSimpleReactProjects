/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import Categories from './Categories/Categories';
import Company from './Company/Company';
import Discover from './Discover/Discover';
import EarnLearn from './EarnLearn/EarnLearn';
import Header from './Header/Header';
import OwnTime from './OwnTime/OwnTime';
import Partners from './Partners/Partners';
import Searchbar from './SearchBar.jsx/Searchbar';
import Slider from './Slider/Slider';
import Testmonicals from './TestMonials/Testmonicals';
import Testmonials2 from './TestMonials2/Testmonials2';

const Home = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 5000);

        return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
    }, []);

    const closeModal = () => {
        setShowPopup(false);
    };
    return (
        <div>
            <Header />
            <Searchbar />
            <Categories />
            <Discover />
            <Company />
            <Testmonicals />
            <OwnTime />
            <EarnLearn />
            <Slider />
            <Testmonials2 />
            <Partners />
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center z-10">
                    <div className="modal-overlay absolute inset-0 bg-black opacity-50" />
                    <div className="modal-container bg-white w-1/2 md:w-96 mx-auto rounded-lg shadow-lg z-20">
                        <div className="modal-content p-4">
                            <h3 className="text-lg font-bold mb-4">Limited Time Offer!</h3>
                            <p className="mb-4">
                                Hurry up! Get 20% off on your first purchase. Use code <span className="text-orange-500 text-xl font-bold tracking-wider">FIRST20</span> at checkout.
                            </p>
                            <button type="button" htmlFor="close-modal" className="btn btn-primary" onClick={closeModal}>
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <input type="checkbox" id="close-modal" className="modal-toggle" />
        </div>
    );
};

export default Home;
