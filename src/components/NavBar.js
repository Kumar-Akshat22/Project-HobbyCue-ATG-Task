import React from 'react'
import logo from "../assets/Logo.png"
import { MdOutlineExplore } from "react-icons/md";
import { GoChevronDown } from "react-icons/go";
import { RiShieldStarFill } from "react-icons/ri";
import { FaBookmark } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";

function NavBar() {
    return (
        <nav className="navbar-expand-lg w-100 shadow-sm p-2 rounded" style={{background:'#FFFFFF', minWidth:'1440px'}}>
            
                <div className='d-flex align-items-center justify-content-center column-gap-2'>
                    <div>
                        <a className="navbar-brand" href="/">
                            <img src={logo} width="293.26px" height="60px" />
                        </a>
                    </div>

                    <div style={{width:'300px'}}>
                        <div className='position-relative'>
                            <input className="p-2 border border-1 rounded w-100" type="search" placeholder="Search here..." aria-label="Search" />
                        
                            <div className='rounded-end position-absolute text-center p-2' style={{width:'65px',height:'40px',backgroundColor:'rgba(128, 100, 162, 1)', bottom:'0px', right:'0px', color:'white'}}>
                            
                                <IoSearch />
                        
                            </div>
                        </div>
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
                                    <ul className="dropdown-menu dropdown-menu-light" style={{top:'9px', left:'2px', border:'none'}}>
                                        <li style={{borderBottom:'1px solid rgba(206, 212, 218, 1)', fontSize:'15px', color:'rgba(109, 116, 122, 1)'}}><a className="dropdown-item" href="/">People - Community</a></li>
                                        <li style={{borderBottom:'1px solid rgba(206, 212, 218, 1)', fontSize:'15px', color:'rgba(109, 116, 122, 1)'}}><a className="dropdown-item" href="/">Places - Venues</a></li>
                                        <li style={{borderBottom:'1px solid rgba(206, 212, 218, 1)', fontSize:'15px', color:'rgba(109, 116, 122, 1)'}}><a className="dropdown-item" href="/">Programs - Events</a></li>
                                        <li style={{borderBottom:'1px solid rgba(206, 212, 218, 1)',fontSize:'15px', color:'rgba(109, 116, 122, 1)'}}><a className="dropdown-item" href="/">Products - Store</a></li>
                                        <li style={{fontSize:'15px', color:'rgba(109, 116, 122, 1)'}}><a className="dropdown-item" href="/" >Blogs</a></li>
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
                                    <ul className="dropdown-menu dropdown-menu-light" style={{top:'9px', left:'2px', border:'none'}}>
                                        <li style={{borderBottom:'1px solid rgba(206, 212, 218, 1)', fontSize:'15px', color:'rgba(109, 116, 122, 1)'}}><a className="dropdown-item" href="/">Singing</a></li>
                                        <li style={{borderBottom:'1px solid rgba(206, 212, 218, 1)', fontSize:'15px', color:'rgba(109, 116, 122, 1)'}}><a className="dropdown-item" href="/">Dancing</a></li>
                                        <li style={{borderBottom:'1px solid rgba(206, 212, 218, 1)', fontSize:'15px', color:'rgba(109, 116, 122, 1)'}}><a className="dropdown-item" href="/">Cooking</a></li>
                                        <li style={{fontSize:'15px'}}><a className="dropdown-item" href="/">Painting</a></li>
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
                        <Link to='/dashboard' >
                            <div>
                                <button className='btn rounded p-2' style={{border:'1px solid #8064A2', color:'#8064A2'}}>
                                    Sign In
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>

        </nav>
    )
}

export default NavBar