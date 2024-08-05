import React from 'react'
import './Offers.css'
function Offers({image,title,view}) {
  return (
    <div className='offercard'>
        <img className='offercard-image' src={image} />
        <h1>{title} </h1>
        <p>{view} </p>
    
    </div>
  )
}

export default Offers