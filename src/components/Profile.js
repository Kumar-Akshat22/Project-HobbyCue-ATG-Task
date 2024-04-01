import React from 'react'
import UserImage from '../assets/UserImage.svg'
import { GoChevronDown } from "react-icons/go";

function Profile() {
  return (
    <div className='d-flex align-items-center gap-2'>
        <div>
            <img src={UserImage} />
        </div>

        <div>
            <GoChevronDown color='rgba(109, 116, 122, 1)'/>
        </div>

    </div>
  )
}

export default Profile