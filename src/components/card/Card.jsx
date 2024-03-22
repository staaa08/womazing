import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = (props) => {
  return (
    <div>
        <div className="card" style={{width: '18rem'}}>
            <img src={props.images} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <NavLink to={`/detail/${props.id}`} className="btn">More</NavLink>
            </div>
        </div>
    </div>
  )
}
  
export default Card
