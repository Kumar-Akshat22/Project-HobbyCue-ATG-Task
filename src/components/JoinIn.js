import React from 'react'

function JoinIn() {
  return (
    <div className='mt-4 w-100 d-flex flex-column gap-3'>
      <div className='d-flex align-items-center justify-content-between'>
        <div className='d-flex gap-1'>
          
          <div className="rounded" style={{width:'60px', height:'4px', backgroundColor:'rgba(255, 255, 255, 1)'}}>
          </div>

          <div className="rounded" style={{width:'60px', height:'4px', backgroundColor:'rgba(255, 255, 255, 1)'}}>

          </div>

          <div className="rounded" style={{width:'60px', height:'4px', backgroundColor:'rgba(255, 255, 255, 1)'}}></div>
        </div>
        <p className='mb-0' style={{fontSize:'10px', color:'rgba(147, 156, 163, 1)'}}>Password strength</p>
      </div>

      <p className='lh-md mb-0' style={{fontSize:'12px', fontWeight:'400'}}>By continuing, you agree to our <span className='fw-bold'>Terms of Service</span> and <span className='fw-bold'>Privacy Policy</span>.</p>

      <button className='btn rounded py-2 fw-bold' style={{border:'1px solid rgba(128, 100, 162, 1)', backgroundColor:'rgba(128, 100, 162, 1)', color:'white', fontSize:'14px'}}>Agree and Continue</button>
    </div>
  )
}

export default JoinIn