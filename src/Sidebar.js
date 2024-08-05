import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebar'>
        <Link to='/'>
        <SidebarRow selected title="Home"/>
        </Link>
        <Link to='/fruits'>
        <SidebarRow title="Fruits"/>
        </Link>
        <Link to='/vegetables'>
        <SidebarRow title="Vegetables"/>
        </Link>
        <Link to='/dairy'>
        <SidebarRow title="Dairy"/>
        </Link>
        <Link to='/snacks'>
        <SidebarRow title="Snacks"/>
        </Link>
        <hr/>
        {/*<SidebarRow title="Categories"/>
        <SidebarRow title="Special Diets"/>
        <SidebarRow title="Popular Brands"/>
        <SidebarRow title="Week Deals"/>
        <SidebarRow title="Best Sellers"/>
        <SidebarRow title="New Arrivals"/>
        <SidebarRow title="Recipe Deals"/>
        <SidebarRow title="Customer Account"/>
        <SidebarRow title="User Account"/>
        <SidebarRow title="Local Stores"/>
        <SidebarRow title="Loyality Programs"/>
        <SidebarRow title="Subscription Services"/>
        <SidebarRow title="Trending Now"/>
        <SidebarRow title="Shop by Occasion"/>
        <SidebarRow title="Nutritional Information"/>
        <SidebarRow title="Ethnic Foods"/>
        <SidebarRow title="Farmers Market"/>
        <SidebarRow title="Pet Supplies"/>
        <SidebarRow title="Baby & Kids"/>
        <SidebarRow title="Baking Needs"/>
        <SidebarRow title="Cooking Essentials"/>
        <SidebarRow title="Baking Needs"/>


        <hr />*/}

    </div>
  )
}

export default Sidebar