import React from 'react'
import KADIN1 from '../assets/kadin1.png'
import KADIN2 from '../assets/kadin2.png'
import KADIN3 from '../assets/kadin3.png'
import STRELKA from '../assets/strelka.png'
import '../components/footer/Footer'

const Home = () => {
  return (
    <nav>
      <div>
            <h1 className='h1'>Новые поступления в этом сезоне</h1>
            <p className='text'>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
            <div className='btns'>
            <button className='dgm-2'><img src={STRELKA} alt="" /></button>
            <button className='dgm'>Открыть магазин</button>
            </div>
        </div>
        <div className='kadinlar'>
            <img className='kadin2' src={KADIN2} alt="" />
            <img className='kadin1' src={KADIN1} alt="" />
            <img className='kadin3' src={KADIN3} alt="" />
        </div>
    </nav>
  )
}

export default Home
