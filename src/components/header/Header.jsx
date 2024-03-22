import React from 'react'
import { NavLink } from 'react-router-dom'
import LOGO from '../../assets/logo.png'
import TEL from '../../assets/tel.png'
import BAG from '../../assets/bag.png'


const Header = (props) => {
  return (
    <div>
      <nav>
        <div className="nav-logo">
            <img src={LOGO} alt="" />
        </div>
        <div className="nav-links">
            <NavLink to='/' className='navLink'>Главная</NavLink>
            <NavLink to='/shop' className='navLink'>Магазины</NavLink>
            <NavLink to='/contacts' className='navLink'>Контакты</NavLink>
            <NavLink to='/about' className='navLink'>О нас</NavLink>
        </div>
        <div className="nav-info">
            <img src={TEL} alt="" />
            <span>+7 (495) 823-54-12</span>
            <NavLink to='/cart'><img className='bag' src={BAG} alt="" /></NavLink>
            <span>{props.cartData.length>0 ? props.cartData.length : ''}</span>
        </div>
      </nav>
    </div>
  )
}

export default Header
