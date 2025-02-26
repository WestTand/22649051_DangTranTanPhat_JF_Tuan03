import React from 'react'
import icon from '../assets/icon.jpg'
import avatar from '../assets/avatar.jpg'
import Capture from '../assets/Capture.PNG'
import './Header.css'
const Header = () => {
  return (
    <div className='Header'>
        <div className="flex-container">
          <img src={icon} alt="" />
          <input type="text" />
          <div>What to cook</div>
          <div>Recipes</div>
          <div>Ingredients</div>
          <div>Occacions</div>
          <div>About Us</div>
          <button> <img src={Capture} alt="" />Your Recipe Box</button>
          <img src={avatar} alt="" />
        </div>
    </div>
  )
}

export default Header