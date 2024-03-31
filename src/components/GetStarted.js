import React from 'react'
import GSLeft from '../assets/GSLeft.svg'
import GSRight from '../assets/GSRight.svg'

function GetStarted() {
  return (
    <section className='w-100 mt-5 d-flex justify-content-center align-items-center p-5' style={{minWidth:'1440px', backgroundColor:'#F7FDFF'}}>
        <div className="d-flex flex-column p-5" style={{width:'1240px', gap:'2rem'}}>
            {/* Title */}
            <div>
                <h2 className='fst-italic fw-bold '>Your <span style={{color:'#8064A2'}}>Hobby</span>, Your <span style={{color:'#0096C8'}}>Community...</span></h2>
            </div>

            {/* Get Started Button */}
            <div>
                <button className='btn rounded p-2' style={{backgroundColor:'#8064A2' , color:'white'}}>Get started</button>
            </div>

            {/* Vector Images */}
            <div className='d-flex align-items-center gap-4 mt-5'>
                {/* Left Vector Image */}
                <div>
                    <img src={GSLeft}></img>
                </div>
                {/* Right Vector Image */}
                <div>
                    <img src={GSRight}></img>
                </div>
            </div>
        </div>
    </section>
  )
}

export default GetStarted