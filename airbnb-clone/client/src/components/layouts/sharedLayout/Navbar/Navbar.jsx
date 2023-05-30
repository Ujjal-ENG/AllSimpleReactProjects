import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/logo.png';
import Container from '../Container';
import MenuDropdown from './MenuDropdown';
import Search from './Search';

const Navbar = () => {
    return (
        <div className="fixed w-full bg-white z-30 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex justify-between items-center gap-3 md:gap-0">
                        <Link to="/" className="hidden md:block">
                            <img src={logo} alt="logo" className="w-32 h-10 cursor-pointer" />
                        </Link>

                        <Search />

                        <MenuDropdown />
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;
