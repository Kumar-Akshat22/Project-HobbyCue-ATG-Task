import React from 'react'
import Quote from '../assets/Quote.svg'
import Play from '../assets/Play.svg'
import Mic from '../assets/Mic.svg'
import ProfilePic from '../assets/ProfilePic.svg'

function Testimonial() {
  return (
    <section className='w-100 mt-5 d-flex justify-content-center align-items-center p-5' style={{minWidth:'1440px'}}>
        <div className="d-flex flex-column gap-4 p-5 rounded" style={{width:'1240px', backgroundColor:'#F7F5F9'}}>
            {/* Top Level Div */}
            <div className='d-flex align-items-center gap-3'>
                <img src={Quote}></img>
                <h4 className='mb-0 fw-bold'>Testimonials</h4>
            </div>

            {/* Content Part */}
            <div className='p-2'>
                <p style={{color:'#6D747A', fontSize:'18px'}} className='lh-lg'>
                    In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
                </p>
            </div>

            <div className='d-flex justify-content-between'>

                {/* Audio Player */}
                <div className='d-flex p-3 gap-5 align-items-center rounded' style={{width:'776px', backgroundColor:'#CCC1DA'}}>   
                    <div className='d-flex justify-content-center rounded-circle p-2' style={{width:'40px', height:'40px', backgroundColor:'white'}}>
                        <img src={Play}></img>
                    </div>

                    <div className='position-relative' style={{height:'2px',width:'468px', backgroundColor:'white'}}>
                        <div className='position-absolute start-0 top-0 translate-middle rounded-circle' style={{width:'12px', height:'12px', backgroundColor:'#8064A2'}}></div>
                    </div>

                    <div>
                        <p className='mb-0' style={{color:'#8064A2'}}>0:00</p>
                    </div>

                    <div className='position-relative'>
                        <img src={ProfilePic} width={60} height={60}></img>
                        <div className='position-absolute translate-middle-y'>
                            <img src={Mic} ></img>
                        </div>
                    </div>



                </div>

                {/* Profile Description */}
                <div className='d-flex align-items-center gap-4'>

                    <div>
                        <img src={ProfilePic}></img>
                    </div>

                    {/* Name and Profession */}
                    <div>
                        <p className='fw-bold mb-0' style={{color:'#8064A2', fontSize:'18px'}}>Shubha Nagarajan</p>
                        <p className='mb-0' style={{color:'#0096C8', fontSize:'14px', fontWeight:'600'}}>Classical Dancer</p>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial