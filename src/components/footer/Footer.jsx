import React from 'react'
import LOGO from '../../assets/logo.png'
import LOGOS from '../../assets/logos.png'
import VISA from '../../assets/visa.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='enha'>
        <img src={LOGO} alt="" />
        <p>© Все права защищены <br /> Политика конфиденциальности <br /> Публичная оферта</p>
      </div>
      <div className='skz'>
        <p>+7 (495) 823-54-12</p>
        <p>hello@womazing.com</p>
        <img src={LOGOS} alt="" />
        <img src={VISA} alt="" />
      </div>
    </div>
  )
}

export default Footer
