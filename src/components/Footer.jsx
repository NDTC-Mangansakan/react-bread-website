import { RiCopyrightLine, RiFacebookCircleLine, RiInstagramLine, RiYoutubeLine } from '@remixicon/react'
import React from 'react'

const Footer = () => {
    return (
        <footer className='py-20'>
            <div className="custom-container">
                <div className="grid gap-10 grid-cols-1 lg:grid-cols-5 lg:gap-0">

                    <div className='text-center lg:text-start lg:col-span-2'>
                        <p className="text-xl italic text-primary font-bold ">Bakery</p>
                        <p className="mt-3 text-gray">We make the best bread <br /> in the city.</p>
                    </div>

                    <div className="text-center lg:text-start">
                        <p className="text-xl font-bold">Address</p>
                        <div className="mt-3 text-gray-400">
                            <p>AV. The Sun #321 <br />Lima, Peru</p>
                            <p>9am - 11 am</p>
                        </div>
                    </div>

                    <div className="text-center lg:text-start">
                        <p className="text-xl font-bold">Contact Me</p>
                        <div className="mt-3 text-gray-400">
                            <p>shaqsakan@gmail.com</p>
                            <p>09609239755</p>
                        </div>
                    </div>

                    <div className="text-center lg:text-start">
                        <p className="text-xl font-bold">Follow Us</p>

                        <div className="mt-3 flex items-center justify-center gap-3 text-gray-400 lg:justify-start">

                            <span className="cursor-pointer transition-colors duration-200 hover:text-white">
                                <RiFacebookCircleLine/>
                            </span>

                            <span className="cursor-pointer transition-colors duration-200 hover:text-white">
                                <RiInstagramLine />
                            </span>

                            <span className="cursor-pointer transition-colors duration-200 hover:text-white">
                                <RiYoutubeLine />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <p className="text-sm text-gray-400 flex items-center justify-center"><RiCopyrightLine/> All Rights Reserved by Ishaq Manganskan</p>
            </div>
        </footer>
    )
}

export default Footer