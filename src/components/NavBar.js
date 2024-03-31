import React from 'react'
import logo from "../assets/Logo.png"
import { MdOutlineExplore } from "react-icons/md";
import { GoChevronDown } from "react-icons/go";
import { RiShieldStarFill } from "react-icons/ri";
import { FaBookmark } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg w-100 shadow-sm p-2 rounded" style={{background:'#FFFFFF'}}>
            
                <div className='d-flex align-items-center justify-content-center column-gap-5' style={{minWidth:'1440px'}}>
                    <div>
                        <a className="navbar-brand" href="/">
                            <img src={logo} width="293.26px" height="60px" />
                        </a>
                    </div>

                    <div style={{width:'300px'}}>
                        <input className="me-2 mx-2 p-2 border border-1 rounded w-100" type="search" placeholder="Search here..." aria-label="Search" />
                    </div>

                    <div className='mx-4 d-flex align-items-center jusitfy-content-between column-gap-3'>
                        {/* Explore */}
                        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <button className="btn d-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                                        <div>
                                            <MdOutlineExplore size={20} color='#8064A2'/>
                                        </div>
                                        <span className='mx-1'>Explore</span>
                                        <div>
                                            <GoChevronDown />
                                        </div>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <li><a className="dropdown-item" href="/">Action</a></li>
                                        <li><a className="dropdown-item" href="/">Another action</a></li>
                                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        {/* Hobbies */}
                        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <button className="btn d-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                                        <div>
                                            <RiShieldStarFill size={20} color='#8064A2'/>
                                        </div>
                                        <span className='mx-1'>Explore</span>
                                        <div>
                                            <GoChevronDown />
                                        </div>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <li><a className="dropdown-item" href="/">Action</a></li>
                                        <li><a className="dropdown-item" href="/">Another action</a></li>
                                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className='d-flex column-gap-3'>
                        
                            {/* BookMark */}
                            <div className='btn'>
                                <FaBookmark size={16} color='#8064A2'/>
                            </div>

                            {/* Notification */}
                            <div className='btn'>
                            <FaBell size={16} color='#8064A2'/>

                            </div>

                            {/* Cart */}
                            <div className='btn'>
                            <FaShoppingCart size={16} color='#8064A2'/>

                            </div>
                        </div>

                        {/* Sign In Button */}
                        <div>
                            <button type="button" className="btn rounded border p-2"  style={{width:'112px'}}>
                            <span>Sign In</span>
                            </button>
                        </div>
                    </div>
                </div>

        </nav>
    )
}

export default NavBar