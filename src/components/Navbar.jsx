import React from 'react'

const Navbar = () => {
    return (
        <nav className="fixed w-full bg-white shadow-sm z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-semibold tracking-wide">
                    Arun.
                </h1>

                <ul className="hidden md:flex space-x-8 text-sm font-medium">
                    <li><a href="#about" className="hover:text-gray-500">About</a></li>
                    <li><a href="#skills" className="hover:text-gray-500">Skills</a></li>
                    <li><a href="#projects" className="hover:text-gray-500">Projects</a></li>
                    <li><a href="#contact" className="hover:text-gray-500">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
