import React, { useState } from 'react'
import HeroLeft from '../assets/HeroLeft.svg'
import HeroRight from '../assets/HeroRight.svg'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from 'react-icons/fa6';
import { AiOutlineEye , AiOutlineEyeInvisible } from "react-icons/ai"
import SignIn from './SignIn';
import './HeroSection.css';
import JoinIn from './JoinIn';

function HeroSection() {

    const [mode, setModde] = useState('signIn');

    return (
        <section className='w-100 p-5' style={{ backgroundColor: '#F7F5F9', minWidth: '1440px' }}>
            <div className="d-flex flex-column align-items-center flex-md-row justify-content-evenly gap-3">

                {/* Left Div */}
                <div className='d-flex flex-column row-gap-5 position-relative' style={{ width: '707px' }}>

                    {/* Title */}
                    <div>
                        <h2 className='fst-italic fw-bold '>Explore your <span style={{ color: '#0096C8' }}>hobby</span> or <span style={{ color: '#8064A2' }}>passion</span></h2>
                    </div>

                    {/* Content */}
                    <div>
                        <p className='lh-lg' style={{ fontSize: '14px' }}>
                            Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
                        </p>

                        <p className='lh-lg' style={{ fontSize: '14px' }}>
                            If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
                        </p>
                    </div>

                    {/* Vector Graphics */}
                    <div className='d-flex mt-3'>

                        {/* Left */}
                        <div>
                            <img src={HeroLeft}></img>
                        </div>

                        {/* Right */}
                        <div>
                            <img src={HeroRight}></img>
                        </div>

                    </div>
                </div>

                {/* Right Div */}
                <div className="d-flex flex-column" style={{ width: '430px' }}>
                    
                    <div className='d-flex gap-3'>
                        <div>
                            <p style={{cursor:'pointer'}} className={mode==='signIn' ? 'active' : 'Tab'} onClick={()=>{setModde('signIn')}}>Sign In</p>
                        </div>

                        <div>
                            <p style={{cursor:'pointer'}} className={mode==='joinIn' ? 'active' : 'Tab'} onClick={()=>{setModde('joinIn')}}>Join In</p>
                        </div>
                    </div>

                    <div className='d-flex flex-column gap-4 w-100 mt-3'>
                        
                        <button className='btn d-flex gap-5 align-items-center rounded py-2' style={{border:'1px solid rgba(128, 100, 162, 1)'}}>
                            <FcGoogle />
                            <p className='mb-0'>Continue with Google</p>
                        </button>
                        
                        <button className='btn d-flex gap-5 align-items-center rounded py-2' style={{border:'1px solid rgba(128, 100, 162, 1)'}}>
                            <FaFacebook color='rgba(24, 119, 242, 1)'/>
                            <p className='mb-0'>Continue with Facebook</p>
                        </button>
                        
                        <div className='d-flex flex-row align-items-center gap-1'>
                            
                            <div className='' style={{width:'149px', height:'2px' ,backgroundColor:'rgba(206, 212, 218, 1)'}}></div>

                            <p className='mb-0 fw-bold mx-2' style={{fontSize:'12px'}}>Or connect with</p>

                            <div lassName='' style={{width:'149px', height:'2px' ,backgroundColor:'rgba(206, 212, 218, 1)'}}></div>
                        </div>

                        {/* Input Fields */}
                        <div className='d-flex flex-column gap-4'>

                            <input required type='email' placeholder='Email' className='form-control p-2' style={{fontSize:'14px'}}></input>

                            <div className='position-relative'>
                                <input required type='password' placeholder='Password' className='form-control p-2' style={{fontSize:'14px'}}></input>

                                <AiOutlineEye className='position-absolute' style={{right:'15px' , bottom:'10px', cursor:'pointer'}} size={18}/>
                            </div>
                        </div>

                    </div>

                    {mode === 'signIn' ? <SignIn /> : <JoinIn />}

                </div>


            </div>
        </section>
    )
}

export default HeroSection