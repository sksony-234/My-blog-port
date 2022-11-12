import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className="w-full z-50 top-0 px-12 py-4  absolute bg-purple-500">
                <div className="container flex items-center justify-center">
                    <div className="hidden lg:block">
                        <ul className="flex items-center">

                            <li className="group pl-6">
                                <a href="#about"><span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">About</span></a>

                                <span
                                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                                ></span>
                            </li>

                            <li className="group pl-6">

                                <a href="#services"><span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Services</span></a>

                                <span
                                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                                ></span>
                            </li>

                            <li className="group pl-6">

                                <a href="#portfolio"><span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Portfolio</span></a>

                                <span
                                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                                ></span>
                            </li>

                            <li className="group pl-6">

                                <a href="#clients"><span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Clients</span></a>

                                <span
                                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                                ></span>
                            </li>

                            <li className="group pl-6">

                                <a href="#work"><span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Work</span></a>

                                <span
                                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                                ></span>
                            </li>

                            <li className="group pl-6">

                                <a href="#statistics"><span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Statistics</span></a>

                                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                            </li>

                            <li className="group pl-6">
                                <a href="#blog"><span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Blog</span></a>

                                <span
                                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                                ></span>
                            </li>

                            <li className="group pl-6">

                                <a href="#contact"><span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Contact</span></a>

                                <span
                                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                                ></span>
                            </li >

                        </ul >
                    </div >
                    <div className="block lg:hidden">
                        <button >
                            <i className="bx bx-menu text-4xl text-white"></i>
                        </button>
                    </div >
                </div >
            </div >
        </div>
    )
}

export default Navbar