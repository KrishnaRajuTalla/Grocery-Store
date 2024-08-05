import React from 'react'
import './ItemCard.css'
function Items({image,title,rate,button}) {
  return (
    <div className='itemcard'>
        <img className='itemcard-image' src={image} />
        <div className='itemcard-info'>
            <h4>{title}</h4>
            <p>{rate} </p>
            <button className='btn' >{button} </button>

        </div>

    </div>
  )
}

export default Items