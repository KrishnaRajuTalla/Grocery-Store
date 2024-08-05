import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AvatarIcon from '@mui/material/Avatar';
import './Header.css';
import { Link } from 'react-router-dom';
import LoginPage from './LoginPage';
function Header() {
  const [inputSearch,setInputSearch] = useState('');
  return (
    <div className='header'>
        <div className='header-left'>
          <img className='header-logo' src="https://e7.pngegg.com/pngimages/368/908/png-clipart-graphy-shopping-supermarket-basket-food-shopping-cart-natural-foods-photography.png" />
          <Link to="/">
          <h1 className='heading'>Grocery</h1>
          </Link>
            
        </div>
        <div className='header-input'>
            <input onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} type='text' placeholder='Search' />
            <Link to={`/search/${inputSearch}`}>
            <SearchIcon className='search-icon'/>
            </Link>
            

        </div>
        <div className='header-icon'>
            
            <Link to="/login" >
            <AvatarIcon className='avatarIcon'/>    
            </Link>
          
            
            
        </div>
    </div>

  )
}

export default Header