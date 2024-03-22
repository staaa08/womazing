import React from 'react'
import KARTA from '../assets/karta.png'
import '../components/footer/Footer'

const Contacts = () => {
  return (
    <div className='contacts'>
      <h1>Контакты</h1>
      <div>
        <img src={KARTA} alt="" />
        <div>
            <div className='bilgiler'>
                <div>
                    <p>Телефон</p>
                    <p>+7 (495) 823-54-12</p>
                </div>
                <div>
                    <p>E-mail</p>
                    <p>info@sitename.com</p>
                </div>
                <div>
                    <p>Адрес</p>
                    <p>г. Москва, 3-я улица Строителей, 25</p>
                </div>
            </div>
            <div className='bise'>
                <h5>Напишите нам</h5>
                <p>Имя</p>
                <p className='p'></p>
                <p>E-mail</p>
                <p className='p'></p>
                <p>Телефон</p>
                <p className='p'></p>
                <p>Сообщение</p>
                <p className='p2'></p>
                <button className='dgm'>Отправить</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
