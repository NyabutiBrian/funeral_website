import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 max-w-7xl mx-auto rounded-3xl bg-primary shadow-2xl text-white font-semibold z-50">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] px-2 py-4 shadow-2xl bg-primary rounded-box w-60">
                    <li><a href="#gallery" className="text-lg">Gallery</a></li>
                    <li><a href="#messages" className="text-lg">Testimonials</a></li>
                    <li><a href="#contactus" className="text-lg">Contact Us</a></li>
                </ul>
            </div>
            <div className="hidden lg:block">
                <Link to="/" className="ml-4 text-xl">Farewell</Link>
            </div>
        </div>
        <div className="navbar-end">
            <div className="hidden lg:block">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="#gallery" className="text-md">Gallery</a></li>
                    <li><a href="#messages" className="text-md">Testimonials</a></li>
                    <li><a href="#contactus" className="text-md">Contact Us</a></li>
                </ul>
            </div>
            
            <div className="lg:hidden">
                <Link to="/" className="mr-4 text-xl">Farewell</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar