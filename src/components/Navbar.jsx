import { RiCloseFill, RiMenu2Fill } from '@remixicon/react'
import React, { useState } from 'react'

const Navbar = () => {

    const [showNav, setShowNav] = useState(false)

    const handleShowNav = () => {
        setShowNav(prev => !prev)
    }

    return (
        <nav className='h-[10vh] sticky top-0 right-0 left-0 flex items-center z-99 bg-transparent backdrop-blur-xs'>
            <div className="custom-container flex justify-between items-center">
                <p className="text-xl italic text-primary font-bold ">Bakery</p>

                <span className="cursor-pointer lg:hidden" onClick={handleShowNav}>
                    <RiMenu2Fill size={20} />
                </span>

                {/* Nav links for screens below lg */}
                <div className={`bg-gray-950 fixed top-0 ${showNav ? 'right-0' : '-right-[270px]'} w-[250px] h-screen flex flex-col gap-10 pt-20 px-5 transition-all duration-300 lg:hidden shadow-[0_5px_25px_rgba(255,255,255,0.742)]`}>
                    <a href="#home" className='inline-block text-3xl' onClick={handleShowNav}>Home</a>
                    <a href="#new" className='inline-block text-3xl' onClick={handleShowNav}>New</a>
                    <a href="#about" className='inline-block text-3xl' onClick={handleShowNav}>About us</a>
                    <a href="#favourites" className='inline-block text-3xl' onClick={handleShowNav}>Favourites</a>
                    <a href="#location" className='inline-block text-3xl' onClick={handleShowNav}>Location</a>
                    <span className="absolute top-5 right-5 cursor-pointer" onClick={handleShowNav}>
                        <RiCloseFill size={40} />
                    </span>
                </div>

                {/* Nav links for lg screens and above */}
                <div className="hidden lg:flex items-center gap-10">
                    <a href="#home" className='' onClick={handleShowNav}>Home</a>
                    <a href="#new" className='' onClick={handleShowNav}>New</a>
                    <a href="#about" className='' onClick={handleShowNav}>About us</a>
                    <a href="#favourites" className='' onClick={handleShowNav}>Favourites</a>
                    <a href="#location" className='' onClick={handleShowNav}>Location</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar