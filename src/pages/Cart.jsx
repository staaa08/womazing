import React from 'react'

const Cart = ({cartData}) => {
    const total=cartData.reduce(
        (total, el)=>total + parseInt(el.price.replace(/\$/g, '')),
        0
    )
  return (
    <div>
      {cartData.map((el)=>(
        <div>
            <h2 style={{fontSize: 20}}>{el.name}</h2>
            <img width={300} src={el.images} alt="" />
            <p>{el.price}</p>
        </div>
      ))}
      <h2>Total:{total}$</h2>
    </div>
  )
}

export default Cart
