/* eslint-disable func-names */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useLayoutEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import logo from '../../../assets/FliqaIndia-Logo1.png';
import './navbar.css';

const Navbar = () => {
    useLayoutEffect(() => {
        let theEnd = 0;
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', function () {
            const scrollTop = window.pageXOffset || this.document.documentElement.scrollTop;
            if (scrollTop > theEnd) {
                navbar.style.top = '-100px';
            } else {
                navbar.style.top = '0px';
            }
            theEnd = scrollTop;
        });
    }, []);

    const [toggleMenu, setToggleMenu] = useState(false);
    const [showMegaMenu, setShowMegaMenu] = useState(false);
    const [menu, setMenu] = useState('portfolio');
    const [portfolioCategory, setPortfolioCategory] = useState('photography');

    function openPortfolio(category) {
        setPortfolioCategory(category);
    }

    function showMenu(menuItem) {
        setShowMegaMenu(true);
        setMenu(menuItem);
    }

    function handleMenu() {
        const isChecked = document.getElementById('menu').checked;
        if (isChecked) {
            setToggleMenu(true);
        } else {
            setToggleMenu(false);
        }
    }

    function closeMenu() {
        setShowMegaMenu(false);
        setMenu('portfolio');
        setPortfolioCategory('photography');
    }
    const photography = [
        {
            name: 'Fashion Photograph',
            link: 'fashion-photography'
        },
        {
            name: 'Wedding Photoshoot',
            link: 'wedding-photography'
        },
        {
            name: 'Pre-Wedding Photoshoot',
            link: 'pre-wedding-photography'
        },
        {
            name: 'Birthday Photoshoot',
            link: 'birthday-photography'
        },
        {
            name: 'Product Photoshoot',
            link: 'product-photography'
        },
        {
            name: 'Corporate Shoot',
            link: 'corporate-photography'
        },
        {
            name: 'Exposed Photoshoot',
            link: 'exposed-photography'
        },
        {
            name: 'Portfolio Photoshoot',
            link: 'portfolio-photography'
        },
        {
            name: 'Event Photoshoot',
            link: 'event-photography'
        },
        {
            name: 'Beach Photoshoot-updated',
            link: 'beach-photography'
        }
    ];
    const videography = [
        {
            name: 'Music Video',
            link: '/'
        },
        {
            name: 'Short Film',
            link: '/'
        },
        {
            name: 'Drone Shoot',
            link: '/'
        },
        {
            name: 'Documentary',
            link: '/'
        }
    ];
    const graphicDesigning = [
        {
            name: 'Logo Design',
            link: 'logo-designing'
        },
        {
            name: 'Business Card',
            link: 'business-card-and-letterhead-designing'
        },
        {
            name: 'Poster and Banner',
            link: 'poster-banner'
        },
        {
            name: 'Brochure and Flyers',
            link: 'brochure-flyer'
        },
        {
            name: 'Motion Graphics',
            link: 'motion-graphics'
        },
        {
            name: 'UI/UX Design',
            link: 'ui-ux'
        }
    ];

    return (
        <header>
            <nav id="navbar" className="bg-[#131514] md:px-4 flex justify-between px-10 h-32 items-center navar_main">
                <div className="left_colum flex items-center">
                    <div className="text-3xl text-white mr-8">
                        <Link to="/">
                            <img className="h-16 w-36 logo" src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="nav_links items-center hidden sm:flex">
                        <ul className="flex gap-8">
                            {/* <li
                className="text-white main_link text-base font-[Inter]"
                onMouseEnter={() => closeMenu()}
              >
                <Link to="/">Home</Link>
              </li> */}
                            <li className="text-white main_link text-base font-[Inter]" onMouseEnter={() => showMenu('dream-wedding')}>
                                <Link to="/">Dream Wedding</Link>
                            </li>
                            <li className="text-white main_link text-base font-[Inter]" onMouseEnter={() => showMenu('photography')}>
                                <Link to="/">24x7 Photography</Link>
                            </li>
                            <li className="text-white cursor-pointer main_link text-base font-[Inter] services_hover" onMouseEnter={() => showMenu('portfolio')}>
                                <p>Portfolio</p>
                            </li>
                            <li className="text-white main_link text-base font-[Inter]" onMouseEnter={() => showMenu('community')}>
                                Community
                            </li>
                            <Link to="/blogs">
                                <li className="text-white main_link text-base font-[Inter]" onMouseEnter={() => showMenu('blog')}>
                                    Blog
                                </li>
                            </Link>

                            {/* <li
                className="text-white main_link text-base font-[Inter]"
                onMouseEnter={() => showMenu("contact")}
              >
                <Link to="/contact">Contact</Link>
              </li> */}
                            <li className="text-white main_link text-base font-[Inter]" onMouseEnter={() => showMenu('learning')}>
                                Learning
                            </li>
                        </ul>
                    </div>
                    {showMegaMenu && (
                        <div className="mega_menu_container" onMouseLeave={closeMenu}>
                            {(menu === 'portfolio' && (
                                <div className="mega_menu_body">
                                    <div className="mega_menu_section first">
                                        <div className="mega_menu_header photography-toggle" onMouseEnter={() => openPortfolio('photography')}>
                                            <Link to="#">Photography</Link>
                                        </div>
                                        <div className="mega_menu_header videography-toggle" onMouseEnter={() => openPortfolio('videography')}>
                                            <Link to="#">Videography</Link>
                                        </div>
                                        <div className="mega_menu_header graphic-designing-toggle" onMouseEnter={() => openPortfolio('graphic')}>
                                            <Link to="#">Graphics Design</Link>
                                        </div>
                                    </div>
                                    <div className="mega_menu_section second ">
                                        <div className="mega_menu_ind_body photography ">
                                            {(portfolioCategory === 'photography' && (
                                                <div className="photography-section-main">
                                                    <div
                                                        style={{
                                                            display: 'grid',
                                                            gridTemplateColumns: '1fr 1fr',
                                                            width: '60vw',
                                                            placeItems: 'center'
                                                        }}>
                                                        {photography.map((item) => {
                                                            return (
                                                                <div key={Math.random().toString()} className="inner_services">
                                                                    <Link to={`/services/photography/${item.link}`}>{item.name}</Link>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            )) ||
                                                (portfolioCategory === 'videography' && (
                                                    <div className="mega_menu_ind_body ">
                                                        {videography.map((item) => {
                                                            return (
                                                                <div key={Math.random().toString()} className="inner_services">
                                                                    <Link to="/">{item.name}</Link>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                )) ||
                                                (portfolioCategory === 'graphic' && (
                                                    <div className="mega_menu_ind_body ">
                                                        {graphicDesigning.map((item) => {
                                                            return (
                                                                <div key={Math.random().toString()} className="inner_services">
                                                                    <Link to={`/services/graphic-designing/${item.link}`}>{item.name}</Link>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            )) ||
                                (menu === 'dream-wedding' && (
                                    <div style={{ display: 'grid' }} className="mega_menu_body grid grid-cols-3 ">
                                        <li className="inner_services list-none">Wedding Planning</li>
                                        <li className="inner_services list-none">
                                            <Link to="/services/photography/wedding-photography">Wedding Photography</Link>
                                        </li>
                                        <li className="inner_services list-none">Wedding Cinematography</li>
                                        <li className="inner_services list-none">Wedding Vlogs</li>
                                        <li className="inner_services list-none">Live Wedding</li>
                                        <li className="inner_services list-none">Wedding Documentry</li>
                                        <li className="inner_services list-none">Destination Wedding</li>
                                    </div>
                                )) ||
                                (menu === 'photography' && (
                                    <div style={{ display: 'grid' }} className="mega_menu_body grid grid-cols-3 grid-rows-4 grid-flow-col">
                                        <li className="inner_services list-none">Location</li>
                                        <li className="inner_services list-none">Half Day Package</li>
                                        <li className="inner_services list-none">Full Day Package</li>
                                        <li className="inner_services list-none">Beach Shorts</li>
                                        <li className="inner_services list-none">Drone Video</li>
                                        <li className="inner_services list-none">Underwater Shoot</li>
                                        <li className="inner_services list-none">Travel Video</li>
                                        <li className="inner_services list-none">Party Shoot</li>
                                        <li className="inner_services list-none">Portfolio</li>
                                        <li className="inner_services list-none">Nude Shoot</li>
                                    </div>
                                )) ||
                                (menu === 'community' && (
                                    <div style={{ display: 'grid' }} className="mega_menu_body grid grid-cols-3 grid-rows-4 grid-flow-col">
                                        <li className="inner_services list-none">Gifts and Favours</li>
                                        <li className="inner_services list-none">Invites and Stationery</li>
                                        <li className="inner_services list-none">Fitness and Health</li>
                                        <li className="inner_services list-none">Bachelor and Bachelorette Fun</li>
                                        <li className="inner_services list-none">Wedding Fashion</li>
                                        <li className="inner_services list-none">Beauty, Hair & Makeup</li>
                                        <li className="inner_services list-none">Traditions & Ceremonies</li>
                                        <li className="inner_services list-none">Honeymoon</li>
                                        <li className="inner_services list-none">Trending Wedding</li>
                                        <li className="inner_services list-none">Plan a Wedding</li>
                                        <li className="inner_services list-none">FliqaIndia Orignal</li>
                                        <li className="inner_services list-none">Pre-Wedding Functions</li>
                                        <li className="inner_services list-none">Do It Yourself</li>
                                        <li className="inner_services list-none">Married Life</li>
                                        <li className="inner_services list-none">Love/Romance</li>
                                    </div>
                                )) ||
                                (menu === 'blog' && (
                                    <div style={{ display: 'grid', width: '70%' }} className="mega_menu_body grid grid-cols-2 grid-rows-4 grid-flow-col text-center mx-auto">
                                        <li className="inner_services list-none">Inspiration and Ideas</li>
                                        <li className="inner_services list-none">Cinematography</li>
                                        <li className="inner_services list-none">Photography</li>
                                        <li className="inner_services list-none">Graphics</li>
                                        <li className="inner_services list-none">Health and Beauty</li>
                                        <li className="inner_services list-none">Honeymoon</li>
                                        <li className="inner_services list-none">Dream Wedding</li>
                                        <li className="inner_services list-none">Real Wedding</li>
                                    </div>
                                )) ||
                                (menu === 'contact' && (
                                    <div style={{ display: 'grid' }} className="mega_menu_body grid grid-cols-3 grid-rows-3 grid-flow-col">
                                        <li className="inner_services list-none">Vendor</li>
                                        <li className="inner_services list-none">Customer</li>
                                        <li className="inner_services list-none">Collaboration</li>
                                        <li className="inner_services list-none">Sales</li>
                                        <li className="inner_services list-none">
                                            <Link Link to="/contact">
                                                Customer Care
                                            </Link>
                                        </li>
                                    </div>
                                )) ||
                                (menu === 'learning' && (
                                    <div style={{ display: 'grid', width: '70%' }} className="grid-cols-2 grid-rows-2 grid-flow-col text-center mx-auto">
                                        <li className="inner_services list-none">Adobe Software</li>
                                        <li className="inner_services list-none">Documentory Film Making</li>
                                        <li className="inner_services list-none">Editing</li>
                                        <li className="inner_services list-none">Workshop</li>
                                    </div>
                                ))}
                        </div>
                    )}
                </div>
                <div className="nav_btns">
                    <button className="sign-up bg-transparent font-[Inter] text-white rounded-full px-6 py-1 mx-2 sm:inline-block hidden text-xs border-[2px] border-white hover:bg-white hover:text-black transition-all ease-in">
                        Sign Up
                    </button>
                    <button className="login bg-transparent font-[Inter] text-xs text-white rounded-full px-6 py-1 mx-1 sm:inline-block hidden  border-[2px] border-white hover:bg-white hover:text-black transition-all ease-in">
                        Sign In
                    </button>
                    <button className="vendor absolute top-2 right-4 hover:bg-gray-400 font-[Inter] hover:text-white rounded-full px-3 py-[1px] mx-2 sm:inline-block hidden text-xs border-[1px] border-white bg-white text-black transition-all ease-in">
                        Vendor Login
                    </button>
                    <div className="mobile_menu hidden" onClick={handleMenu}>
                        <label htmlFor="menu">
                            <input type="checkbox" name="menu" id="menu" />
                            <div className="hamburger_container">
                                <div id="up_line" className="hamburger" />
                                <div id="center_line" className="hamburger" />
                                <div id="down_line" className="hamburger" />
                            </div>
                        </label>
                    </div>
                </div>
            </nav>

            {toggleMenu && (
                <div id="menu_container_mobile" className="mobile_menu_container fixed w-[100vw] h-[100vh] bg-black opacity-100 flex z-50">
                    <div className="mobile_menu_links flex p-10 h-[100%] w-[100%] justify-start items-center flex-col mt-2">
                        <p className="text-center text-white text-xl opacity-100 font-bold my-4">
                            <Link to="/">Home</Link>
                        </p>
                        <p className="text-center text-white text-xl opacity-100 font-bold my-4">
                            <Link to="/services/all">Services</Link>
                        </p>
                        <p className="text-center text-white text-xl opacity-100 font-bold my-4">Portfolio</p>
                        <p className="text-center text-white text-xl opacity-100 font-bold my-4">Community</p>
                        <Link to="/blogs-all/" className="text-center text-white text-xl opacity-100 font-bold my-4">
                            Blog
                        </Link>
                        <p className="text-center text-white text-xl opacity-100 font-bold my-4">
                            <Link to="/contact">Contact</Link>
                        </p>

                        <p className="text-center text-white underline-offset-4 underline text-3xl opacity-100 font-extrabold mt-10 mb-4">Popular</p>
                        <div className="mobile_popular_container w-[100vw] flex">
                            <div className="right w-1/2">
                                <p className="text-center text-white text-lg opacity-100 font-bold my-4">Website</p>
                                <p className="text-center text-white text-lg opacity-100 font-bold my-4">Design</p>
                                <p className="text-center text-white text-lg opacity-100 font-bold my-4">Logo Design</p>
                            </div>
                            <div className="left w-1/2">
                                <p className="text-center text-white text-lg opacity-100 font-bold my-4">Brochure</p>
                                <p className="text-center text-white text-lg opacity-100 font-bold my-4">Label Design</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
