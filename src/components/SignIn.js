import React from 'react'
import { CiLock } from "react-icons/ci";
function SignIn() {
  return (
    <div className='mt-4 w-100 d-flex flex-column gap-3'>
      <div className='d-flex justify-content-between'>

        <div className='d-flex align-items-center gap-2'>

          <input type='checkbox' id='RememberMe' style={{width:'16px', height:'16px', border:'1px solid rgba(128, 100, 162, 1)'}}></input>
          <label htmlFor='RememberMe' style={{fontSize:'12px'}}>Remember me</label>
        </div>

        <div className='d-flex align-items-center gap-2' style={{cursor:'pointer'}}>
          <CiLock />
          <p className='mb-0' style={{fontSize:'12px'}}>Forgot password?</p>
        </div>

      </div>

      {/* Continue Button */}
      <button className='btn rounded py-2 fw-bold' style={{border:'1px solid rgba(128, 100, 162, 1)', backgroundColor:'rgba(128, 100, 162, 1)', color:'white', fontSize:'15px'}}>
          Continue  
      </button>
    </div>
  )
}

export default SignIn