import React from 'react'
import './DairyPage.css';
import ItemCard from './ItemCard'
function DairyPage() {
  return (
    <div className='dairypage'>
    <h1 className='content-title'>
        Dairy Products
    </h1>
    <div className='items'>
        <ItemCard 
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRftIjD-j57G7g0Ug1_NFUK6rA5iIaMjwlDS1NxRfzYijaaKhlQ_-Ihb9wGcI7d2ZHYHy0&usqp=CAU"
        title = "Curd"
        rate = "$2.00" 
        button = "Add"/>
        
        <ItemCard 
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw7JE7FasZE2JdINiR3Gvsj1bc1VjU0Qca8w&s"
        title = "Cow Ghee"
        rate = "$2.50" 
        button = "Add"/>
        <ItemCard 
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOeCGippOtqG64O5JpHnPR47PwikwIc9kCe5_zYo1RixgMXAv442HRG38exmbCECRnWP4&usqp=CAU"
        title = "Milk"
        rate = "$2.50" 
        button = "Add"/>
        <ItemCard 
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5___ZI-gM2cFXdhd-bilIaECV-fa1Vl4e9A&s"
        title = "Buttermilk"
        rate = "$1.00" 
        button = "Add"/>
        <ItemCard 
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5rL50D_uS6bllHvBtc3vjpziQ5FiqeinbQhG-Wkw1Y_YSILq8sHPnb-l_VxcNY30Inew&usqp=CAU"
        title = "Lassy"
        rate = "$0.50" 
        button = "Add"/>
        <ItemCard 
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdJ8q0rlbpLBE-MGvhM_Qp5cyXzSF7sZyawgWRlbqTqn_vE3Oqa2FpLcR33qZfa6CBaHc&usqp=CAU"
        title = "Badam Milk"
        rate = "$2.00" 
        button = "Add"/>
        
        <ItemCard 
        image = "https://i.pinimg.com/originals/16/04/08/16040852a2499a025770a70b8174604a.png"
        title = "Dooth Peda"
        rate = "$1.50" 
        button = "Add"/>
        <ItemCard 
        image = "https://dms.mydukaan.io/original/jpeg/3269812/d1044a9f-0b45-4679-bd47-8a8edae9981d/khova-98a5dc9e-1740-4b75-a06e-7c7d026b14cf.jpg"
        title = "Khova"
        rate = "$2.50" 
        button = "Add"/>
        <ItemCard 
        image = "https://shop.milkymist.com/cdn/shop/files/1_21f417de-841d-4f19-80a8-972ace200323_1024x1024.jpg?v=1717387498"
        title = "Milky Mist"
        rate = "$1.00" 
        button = "Add"/>
        <ItemCard 
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSSfSNbqsY_bUWYVFqxzJskDEOSDKo4QTNj2hkFycI33thujXFbYBvl_Kq4j3E17l7xJk&usqp=CAU"
        title = "Butter"
        rate = "$0.50" 
        button = "Add"/>
    </div>
  </div>  
  )
}

export default DairyPage