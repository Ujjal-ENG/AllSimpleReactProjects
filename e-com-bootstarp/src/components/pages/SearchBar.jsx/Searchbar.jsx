/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent-props */
import React, { useEffect, useState } from 'react';
import Headroom from 'react-headroom';
import { BiSearchAlt2 } from 'react-icons/bi';
import './search.css';

const Searchbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 70 && !isScrolled) {
                setIsScrolled(true);
            } else if (scrollTop === 0 && isScrolled) {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled]);
    return (
        <>
            <Headroom>
                <div className="headroom headroom--unpinned headroom-disable-animation ">
                    <div
                        style={{
                            maxWidth: '1400px',
                            margin: '0 auto',
                            backgroundColor: 'white',
                            padding: '40px 30px 50px 40px',
                            borderRadius: '20px'
                        }}>
                        <div className="position-relative">
                            <div className="input-group flex-nowrap">
                                <span className="input-group-text" id="addon-wrapping">
                                    <BiSearchAlt2 size={24} />
                                </span>
                                <input type="text" className="form-control py-4" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                            </div>
                            <button type="button" className="btn btn-primary btn-abs btn-lg ">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </Headroom>
            {!isScrolled && (
                <div
                    style={{
                        maxWidth: '1400px',
                        margin: '-80px auto',
                        backgroundColor: 'white',
                        padding: '40px 30px 50px 40px',
                        borderRadius: '20px'
                    }}>
                    <div className="position-relative">
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping">
                                <BiSearchAlt2 size={24} />
                            </span>
                            <input type="text" className="form-control py-4" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                        <button type="button" className="btn btn-primary btn-abs btn-lg ">
                            Search
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Searchbar;
