import React from 'react'
import './Header.css'
import userImg from '../../images/user.png'
const Header = () => {
  return (
    <div className="top-wrap">
            <div className='logo'>
                현쌤의 Movie Time
            </div>
            <div className='user-image'>
                <img src={userImg} alt='유저사진'></img>
            </div>
        </div>
  )
}

export default Header