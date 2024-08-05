import React from 'react';
import './Content.css';
import ItemCard from './ItemCard';
import Offers from './Offers';
import TopOffer from './TopOffer';
function Content() {
  return (
    <div className='content'>
        <h1 className='content-title'>
            Smart Basket
        </h1>
        <div className='items'>
            <ItemCard 
            image = "https://images.squarespace-cdn.com/content/v1/55bbe7f0e4b0a7be0915dc3b/1567695809125-9P6SOE8MF7TBINODZZQJ/single-red-apple.jpg?format=1500w"
            title = "Apple"
            rate = "$2.00" 
            button = "Add"/>
            
            <ItemCard 
            image = "https://newsthump.com/wp-content/uploads/2021/11/potatoes-1024x538.jpg"
            title = "Potato"
            rate = "$1.50" 
            button = "Add"/>
            <ItemCard 
            image = "https://cdn.firstcry.com/education/2022/11/07145239/Dairy-Product-List-For-Kids-with-their-Benefits-And-Facts.jpg"
            title = "Milk"
            rate = "$2.50" 
            button = "Add"/>
            <ItemCard 
            image = "https://5.imimg.com/data5/SELLER/Default/2023/4/300181139/BO/NT/JW/55913691/whole-wheat-grain-500x500.jpeg"
            title = "Grains"
            rate = "$1.00" 
            button = "Add"/>
            <ItemCard 
            image = "https://m.media-amazon.com/images/I/71bUrhgCreL.jpg"
            title = "Crunchy"
            rate = "$0.50" 
            button = "Add"/>

        </div>
        <hr />
        <h1 className='content-title'>
            Best Sellers
        </h1>
        <div className='items'>
            <ItemCard 
            image = "https://t3.ftcdn.net/jpg/01/23/23/54/360_F_123235458_cJRxxWxG9qiEEzr7DdMYYe2H093wmQ2E.jpg"
            title = "Fruits"
            rate = "$2.00 - $3.00" 
            button = "View More"/>
            
            <ItemCard 
            image = "https://assistinghands.com/6/wp-content/uploads/sites/29/2019/01/Eat-Vegetables.jpg"
            title = "Vegetables"
            rate = "$1.50 - $2.50" 
            button = "View More"/>
            <ItemCard 
            image = "https://scitechdaily.com/images/Organic-Dairy-Products.jpg"
            title = "Dairy Products"
            rate = "$2.50 - $3.50" 
            button = "View More"/>
            <ItemCard 
            image = "https://researchoutreach.org/wp-content/uploads/2020/12/shutterstock_1861580353.jpg"
            title = "Staples"
            rate = "$1.00 - $2.00" 
            button = "View More"/>
            <ItemCard 
            image = "https://gracefoodpack.com/blog/wp-content/uploads/2020/12/Blog-GRACE-1-1024x768.jpg"
            title = "Snacks"
            rate = "$0.50 - $1.00" 
            button = "View More"/>

        </div>
        <hr />
        <h1 className='content-title'>
            Bank Offers
        </h1>
        <div className='items'>
        <Offers
            image="https://assets.ajio.com/medias/sys_master/images/images/hcd/he8/29022772264990/03122020-M-Bankoffer-Topbanner-HDFC.jpg" 
            />
        <Offers
            image="https://www.nykaa.com/media/wysiwyg/2021/BankOffers/AxisBank_TnCBanner.jpg" 
            />    
        <Offers
            image="https://offercdn.paytm.com/blog/2021/08/hd-3487-app.png" 
            />
        <Offers
            image="https://www.nykaa.com/media/wysiwyg/2021/BankOffers/tnc_man_banner.jpg" 
            />       
        </div>
        <hr />
        <h1 className='content-title'>
            Top Offers
        </h1>
        <div className='items'>
        <TopOffer 
            title="DEALS OF THE WEEK"
            view = "View Offer"
        />
        <TopOffer 
            title="BIG PACK BIGGER DISCOUNTS"
            view = "View Offer"
        />
        <TopOffer 
            title="COMBOS YOU CAN'T MISS"
            view = "View Offer"
        />
        <TopOffer 
            title="THE $10 CORNER"
            view = "View Offer"
        />
        </div>
   
    </div>
  )
}

export default Content