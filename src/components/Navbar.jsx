import { RiCloseFill, RiMenu2Fill } from '@remixicon/react'
import React, { useEffect, useState } from 'react'


const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'New', href: '#new' },
    { name: 'About Us', href: '#about' },
    { name: 'Favourites', href: '#favourites' },
    { name: 'Location', href: '#location' }
]

const Navbar = () => {

    const [showNav, setShowNav] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    const handleShowNav = () => {
        setShowNav(prev => !prev)
    }

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px', // triggers when section is around middle
            threshold: 0,
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(`#${entry.target.id}`);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections
        navItems.forEach(item => {
            const section = document.querySelector(item.href);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, [])

    return (
        <nav className='h-[10vh] fixed top-0 right-0 left-0 flex items-center z-99 bg-transparent backdrop-blur-xs'>
            <div className="custom-container flex justify-between items-center">
                <p className="text-xl italic text-primary font-bold ">Bakery</p>

                <span className="cursor-pointer lg:hidden" onClick={handleShowNav}>
                    <RiMenu2Fill size={20} />
                </span>

                {/* Nav links for screens below lg */}
                <div className={`bg-gray-950 fixed top-0 ${showNav ? 'right-0' : '-right-[270px]'} w-[250px] h-screen flex flex-col gap-10 pt-20 px-5 transition-all duration-300 lg:hidden shadow-[0_5px_25px_rgba(255,255,255,0.742)]`}>
                    {navItems.map(item => (
                        <a
                            href={item.href}
                            key={item.href}
                            onClick={handleShowNav}
                            className={`inline-block text-3xl ${activeSection === item.href ? 'text-primary font-bold' : ''
                                }`}
                        >
                            {item.name}
                        </a>
                    ))}
                    <span className="absolute top-5 right-5 cursor-pointer" onClick={handleShowNav}>
                        <RiCloseFill size={40} />
                    </span>
                </div>

                {/* Nav links for lg screens and above */}
                <div className="hidden lg:flex items-center gap-10">
                    {navItems.map(item => (
                        <a href={item.href}
                            key={item.href}
                            className={`${activeSection === item.href ? 'text-primary font-bold' : ''
                                }`}
                            onClick={handleShowNav}>
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar