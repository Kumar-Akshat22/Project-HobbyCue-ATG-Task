import React from 'react'
import Group from "../assets/Group.svg"
import Location from "../assets/Location.svg"
import Cart from "../assets/Cart.svg"
import Event from "../assets/Event.svg"
import Add from '../assets/Add.svg'
import './DashBoardView.css'

function DashBoardView() {
    return (
        <section className='w-100 mb-5 p-4' style={{minWidth:'1440px', minHeight:'100vh', backgroundColor: '#F7F5F9'}}>
            <div className="p-4 rounded d-flex flex-column justify-content-center align-items-center flex-wrap gap-3 row-gap-3 mx-auto" style={{backgroundColor:'rgba(255, 255, 255, 1)', width:'840px'}}>
                {/* Icon and Title */}
                <div className='d-flex align-items-center gap-3'>
                    <img src={Add}></img>
                    <h3 className='mb-0 fw-bold' style={{fontSize:'24px'}}>Add Your Listing</h3>
                </div>

                {/* Cards */}
                <div className='d-flex flex-wrap gap-5 justify-content-center align-items-center mt-3 mb-3'>

                    {/* Card-1 */}
                    <div className='p-3 d-flex flex-column gap-4 rounded' style={{ width: '360px', height: '175px', border:'2px solid rgba(128, 100, 162, 1)', cursor:'pointer'}} id='Card-1'>
                        <div className='d-flex align-items-center gap-4'>
                            <div>
                                <img src={Group} width='40px' height='40px'></img>

                            </div>
                            <h4 className='mb-0 fw-bold' style={{fontSize:'20px'}}>People</h4>
                        </div>

                        <div>
                            <p className='lh-md' style={{ fontSize: '14px' }}>
                                Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.
                            </p>
                        </div>
                    </div>

                    {/* Card-2 */}
                    <div className='p-3 d-flex flex-column gap-4 rounded' style={{ width: '360px', height: '175px', border:'2px solid rgba(119, 147, 60, 1)', cursor:'pointer'}} id='Card-2'>
                        <div className='d-flex align-items-center gap-4'>
                            <div>
                                <img src={Location} width='40px' height='40px'></img>

                            </div>
                            <h4 className='mb-0 fw-bold' style={{fontSize:'20px'}}>Place</h4>
                        </div>

                        <div>
                            <p className='lh-md' style={{ fontSize: '14px' }}>
                                Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.
                            </p>
                        </div>
                    </div>

                    {/* Card-3 */}
                    <div className='p-3 d-flex flex-column gap-4 rounded' style={{ width: '360px', height: '175px', border:'2px solid rgba(192, 80, 77, 1)', cursor:'pointer' }} id='Card-3'>
                        <div className='d-flex align-items-center gap-4'>
                            <div>
                                <img src={Cart} width='40px' height='40px' id='Cart'></img>

                            </div>
                            <h4 className='mb-0 fw-bold' style={{fontSize:'20px'}}>Product</h4>
                        </div>

                        <div>
                            <p className='lh-md' style={{ fontSize: '14px' }}>
                                Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.
                            </p>
                        </div>
                    </div>

                    {/* Card-4 */}
                    <div className='p-3 d-flex flex-column gap-4 rounded' style={{ width: '360px', height: '175px', border:'2px solid rgba(0, 150, 200, 1)', cursor:'pointer'}} id='Card-4'>
                        <div className='d-flex align-items-center gap-4'>
                            <div>
                                <img src={Event} width='40px' height='40px'></img>

                            </div>
                            <h4 className='mb-0 fw-bold' style={{fontSize:'20px'}}>Program</h4>
                        </div>

                        <div>
                            <p className='lh-md' style={{ fontSize: '14px' }}>
                                Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DashBoardView