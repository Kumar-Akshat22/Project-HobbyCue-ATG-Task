import React from 'react'
import Add from '../assets/Add.svg'

function AddPage() {
  return (
    <section className='w-100 mt-5 d-flex justify-content-center align-items-center p-5' style={{minWidth:'1440px', backgroundColor:'#F7FDFF'}}>
        <div className="d-flex flex-column gap-4 border p-5" style={{width:'1240px', backgroundColor:'white'}}>
            {/* Icon and Title */}
            <div className='d-flex align-items-center gap-3'>
                <img src={Add}></img>
                <h3 className='mb-0 fw-bold' style={{fontSize:'24px'}}>Add your own</h3>
            </div>

            {/* Content */}
            <div>
                <p className='lh-md' style={{fontSize:'18px'}}>
                    Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page
                </p>
            </div>

            {/* Button */}
            <div>
                <button className='btn fw-normal' style={{color:'#8064A2', border:'1px solid #8064A2'}}>Add new</button>
            </div>
        </div>
    </section>
  )
}

export default AddPage