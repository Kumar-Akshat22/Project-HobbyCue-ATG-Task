import React from 'react'
import Facebook from '../assets/Facebook.svg'
import Twitter from '../assets/Twitter.svg'
import Instagram from '../assets/Instagram.svg'
import Pinterest from '../assets/Pinterest.svg'
import Google from '../assets/GooglePlus.svg'
import Youtube from '../assets/YouTube.svg'
import Telegram from '../assets/Telegram.svg'
import Mail from '../assets/Mail.svg'
function Footer() {
    return (
       

        
        <footer className='w-100 mt-5 d-flex flex-column justify-content-center align-items-center p-0' style={{ minWidth: '1440px' }}>
            <div className="d-flex justify-content-between p-5" style={{ width: '1240px', gap: '2rem' }}>

                <div className='d-flex flex-column gap-3'>

                    <div>
                        <h4 className='fw-bold' style={{fontSize:'18px'}}>Hobbycue</h4>
                    </div>
                    
                    <div>
                        
                    <p style={{fontSize:'14px'}}>About Us</p>
                    <p style={{fontSize:'14px'}}>Our Services</p>
                    <p style={{fontSize:'14px'}}>Work with Us</p>
                    <p style={{fontSize:'14px'}}>FAQ</p>
                    <p style={{fontSize:'14px'}}>Contact Us</p>
                    </div>
                </div>

                <div className='d-flex flex-column gap-3'>
                    <div>
                        <h4 className='fw-bold' style={{fontSize:'18px'}}>How Do I</h4>
                    </div>
                    <div>

                    <p style={{fontSize:'14px'}}>Sign Up</p>
                    <p style={{fontSize:'14px'}}>Add a Listing</p>
                    <p style={{fontSize:'14px'}}>Claim Listing</p>
                    <p style={{fontSize:'14px'}}>Post a Query</p>
                    <p style={{fontSize:'14px'}}>Add a Blog Post</p>
                    <p style={{fontSize:'14px'}}>Other Queries</p>
                    </div>
                </div>

                <div className='d-flex flex-column gap-3'>
                    <div >
                        <h4 className='fw-bold' style={{fontSize:'18px'}}>Quick Links</h4>
                    </div>

                    <div>

                    <p style={{fontSize:'14px'}}>Listings</p>
                    <p style={{fontSize:'14px'}}>Blog Posts</p>
                    <p style={{fontSize:'14px'}}>Shop / Store</p>
                    <p style={{fontSize:'14px'}}>Community</p>
                    </div>
                </div>

                <div className='d-flex flex-column' style={{gap:'4rem'}}>
                    
                    {/* Social Media */}
                    <div>
                        <h4 className='fw-bold' style={{fontSize:'18px'}}>Social Media</h4>
                        <div className='d-flex gap-4 mt-4'>
                            <div className='d-flex align-items-center justify-content-center rounded-circle' style={{width:'24px', height:'24px', backgroundColor:'#EBEDF0', cursor:'pointer'}}>
                                <img src={Facebook}></img>
                            </div>
                            <div className='d-flex align-items-center justify-content-center rounded-circle' style={{width:'24px', height:'24px', backgroundColor:'#EBEDF0', cursor:'pointer'}}>
                                <img src={Twitter}></img>
                            </div>
                            <div className='d-flex align-items-center justify-content-center rounded-circle' style={{width:'24px', height:'24px', backgroundColor:'#EBEDF0', cursor:'pointer'}}>
                                <img src={Instagram}></img>

                            </div>
                            <div className='d-flex align-items-center justify-content-center rounded-circle' style={{width:'24px', height:'24px', backgroundColor:'#EBEDF0', cursor:'pointer'}}>
                                <img src={Pinterest}></img>

                            </div>
                            <div className='d-flex align-items-center justify-content-center rounded-circle' style={{width:'24px', height:'24px', backgroundColor:'#EBEDF0', cursor:'pointer'}}>
                                <img src={Google}></img>
                            </div>
                            <div className='d-flex align-items-center justify-content-center rounded-circle' style={{width:'24px', height:'24px', backgroundColor:'#EBEDF0', cursor:'pointer'}}>
                                <img src={Youtube}></img>
                            </div>
                            <div className='d-flex align-items-center justify-content-center rounded-circle' style={{width:'24px', height:'24px', backgroundColor:'#EBEDF0', cursor:'pointer'}}>
                                <img src={Telegram}></img>
                            </div>
                            <div className='d-flex align-items-center justify-content-center rounded-circle' style={{width:'24px', height:'24px', backgroundColor:'#EBEDF0', cursor:'pointer'}}>
                                <img src={Mail}></img>
                            </div>
                        </div>
                    </div>

                    {/* Invite Friends */}
                    <div>
                        <h4 className='fw-bold' style={{fontSize:'18px'}}>Invite Friends</h4>
                        <div className='position-relative'>

                            <input className="p-2 rounded mt-3" type="search" placeholder="Email ID" aria-label="Search" style={{border:'1px solid rgba(128, 100, 162, 1)', width:'360px'}} />
                    
                            <div className='rounded-end position-absolute text-center p-2 mb-0' style={{width:'65px',height:'40px',backgroundColor:'rgba(128, 100, 162, 1)', bottom:'0px', right:'0px', color:'white', cursor:'pointer'}}>
                                <p className='mb-0'>
                                    Invite
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='w-100 p-3 d-flex align-items-center justify-content-center' style={{backgroundColor:'rgba(247, 245, 249, 1)'}}>
                <p className='mb-0' style={{fontWeight:'600', fontSize:'19px'}}>© Purple Cues Private Limited</p>
            </div>
        </footer>

        
    
    )
}

export default Footer