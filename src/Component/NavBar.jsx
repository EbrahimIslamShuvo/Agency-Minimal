import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { TiArrowSortedDown } from "react-icons/ti";
import { HiMenu, HiX } from 'react-icons/hi'; 

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="bg-[#F6F8FB]">
            <div className="flex justify-between items-center py-5 container lg:px-20 px-6 mx-auto">
                <img className="w-[190px]" src={logo} alt="Logo" />
                <div className="hidden md:flex text-[#02073E] text-xl items-center gap-5 dm-sans-font">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/advertise">
                        <div className="flex items-center gap-1">
                            Advertise <TiArrowSortedDown />
                        </div>
                    </NavLink>
                    <NavLink to="/supports">
                        <div className="flex items-center gap-1">
                            Supports <TiArrowSortedDown />
                        </div>
                    </NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
                <div className="hidden md:block hover:bg-[#8D448B] hover:text-white duration-500 text-[#8D448B] border-2 border-[#8D448B] rounded-xl px-5 py-3 text-lg dm-sans-font">
                    Register Now
                </div>
                <div className="md:hidden text-3xl text-[#8D448B]" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <HiX /> : <HiMenu />}
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden flex flex-col gap-4 text-[#02073E] text-lg px-6 pb-4 dm-sans-font">
                    <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink to="/advertise" onClick={() => setMenuOpen(false)}>
                        <div className="flex items-center gap-1">
                            Advertise <TiArrowSortedDown />
                        </div>
                    </NavLink>
                    <NavLink to="/supports" onClick={() => setMenuOpen(false)}>
                        <div className="flex items-center gap-1">
                            Supports <TiArrowSortedDown />
                        </div>
                    </NavLink>
                    <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
                    <NavLink to="/register" onClick={() => setMenuOpen(false)}>
                        <div className="hover:bg-[#8D448B] hover:text-white duration-300 text-[#8D448B] border-2 border-[#8D448B] rounded-xl px-4 py-2 text-base w-fit">
                            Register Now
                        </div>
                    </NavLink>
                </div>
            )}
        </div>
    );
};

export default NavBar;
