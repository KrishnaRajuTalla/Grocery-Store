import React from 'react'
import './SnacksPage.css'
import ItemCard from './ItemCard'
function SnacksPage() {
  return (
    <div className='snackpage'>
    <h1 className='content-title'>
        Snack Items
    </h1>
    <div className='items'>
        <ItemCard 
        image = "https://m.media-amazon.com/images/I/515fcZ-fk8L.jpg"
        title = "Biscuits"
        rate = "$2.00" 
        button = "Add"/>
        
        <ItemCard 
        image = "https://m.media-amazon.com/images/I/6169KcUhKUL.jpg"
        title = "Nutty Chips"
        rate = "$1.50" 
        button = "Add"/>
        <ItemCard 
        image = "https://www.designerpeople.com//wp-content/uploads/2020/03/snack-pouch-packaging-design-1.jpg"
        title = "Freky Fries"
        rate = "$2.50" 
        button = "Add"/>
        <ItemCard 
        image = "https://fetchnbuy.in/cdn/shop/products/40012929_8-bingo-potato-chips-original-style-chilli-sprinkled_grande.jpg?v=1657530173"
        title = "Potato Chips"
        rate = "$1.00" 
        button = "Add"/>
        <ItemCard 
        image = "https://m.media-amazon.com/images/I/71bUrhgCreL.jpg"
        title = "Crunchy"
        rate = "$0.50" 
        button = "Add"/>
        <ItemCard 
        image = "https://m.media-amazon.com/images/I/71dLAY0WrDL.jpg"
        title = "Choco chips"
        rate = "$2.00" 
        button = "Add"/>
        
        <ItemCard 
        image = "https://www.bigbasket.com/media/uploads/p/l/298588_10-lays-potato-chips-classic-salted.jpg"
        title = "Lays"
        rate = "$1.50" 
        button = "Add"/>
        <ItemCard 
        image = "https://www.haldirams.com/media/catalog/product/cache/71134970afb779eb7860339989626b7e/m/o/moong_dal_1.jpg"
        title = "Moong Dal"
        rate = "$2.50" 
        button = "Add"/>
        <ItemCard 
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3SpjQsao47i-egVZpIClB2LGPB17ephRKmg&s"
        title = "Momos"
        rate = "$1.00" 
        button = "Add"/>
        <ItemCard 
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxhsG6OcE-xatUkfYmM5uJkDCojkJD8IMTjQ&s"
        title = "Kurkure"
        rate = "$0.50" 
        button = "Add"/>


    </div>
  </div>  
  )
}

export default SnacksPage