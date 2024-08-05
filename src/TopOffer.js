import React from 'react'
import './TopOffer.css';
function TopOffer({title,view}) {
  return (
    <div className='topoffer'>
        <div className='top'>
        <h1>{title} </h1>
        <p>{view} </p>
        </div>
    </div>
  )
}

export default TopOffer