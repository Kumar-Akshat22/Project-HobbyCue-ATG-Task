import React from 'react'
import Group from "../assets/Group.svg"
import Location from "../assets/Location.svg"
import Basket from "../assets/Basket.svg"
import Event from "../assets/Event.svg"

function CardSection() {
  return (
    <section className='w-100 mt-5 mb-5' style={{minWidth:'1440px'}}>
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 row-gap-3">

            {/* Card-1 */}
            <div className='d-flex flex-column gap-4 p-5 border rounded' style={{width:'608px', height:'297px'}}>
                <div className='d-flex align-items-center gap-4'>
                    <div>
                    <img src={Group} width='40px' height='40px'></img>

                    </div>
                    <h4 className='mb-0 fw-bold'>People</h4>
                </div>

                <div>
                    <p className='lh-md' style={{fontSize:'18px'}}>
                        Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.
                    </p>
                </div>

                <div>
                    <button className='btn fw-normal' style={{color:'#8064A2', border:'1px solid #8064A2'}}>Connect</button>
                </div>

            </div>

            {/* Card-2 */}
            <div className='d-flex flex-column gap-4 p-5 border rounded' style={{width:'608px', height:'297px'}}>
                <div className='d-flex align-items-center gap-4'>
                    <img src={Location}></img>
                    <h4 className='mb-0 fw-bold'>Place</h4>
                </div>

                <div>
                    <p className='lh-md' style={{fontSize:'18px'}}>
                        Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.
                    </p>
                </div>

                <div>
                    <button className='btn fw-normal' style={{color:'#8064A2', border:'1px solid #8064A2'}}>Meet up</button>
                </div>
            </div>

            {/* Card-3 */}
            <div className='d-flex flex-column gap-4 p-5 border rounded' style={{width:'608px', height:'297px'}}>
                <div className='d-flex align-items-center gap-4'>
                    <img src={Basket}></img>
                    <h4 className='mb-0 fw-bold'>Product</h4>
                </div>

                <div>
                    <p className='lh-md' style={{fontSize:'18px'}}>
                        Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.
                    </p>
                </div>

                <div>
                    <button className='btn fw-normal' style={{color:'#8064A2', border:'1px solid #8064A2'}}>Get it</button>
                </div>
            </div>

            {/* Card-4 */}
            <div className='d-flex flex-column gap-4 p-5 border rounded' style={{width:'608px' , height:'297px'}}>
                <div className='d-flex align-items-center gap-4'>
                    <img src={Event}></img>
                    <h4 className='mb-0 fw-bold' style={{fontSize:''}}>Program</h4>
                </div>

                <div>
                    <p className='lh-md' style={{fontSize:'18px'}}>
                        Find events, meetups and workshops related to your hobby.  Register or buy tickets online.
                    </p>
                </div>

                <div>
                    <button className='btn fw-normal' style={{color:'#8064A2', border:'1px solid #8064A2'}}>Attend</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CardSection