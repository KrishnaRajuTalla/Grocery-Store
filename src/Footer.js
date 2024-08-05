import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
function Footer() {
  return (
    <div className='container'>
        <hr />
        <footer className='footer'>
                <div className='footer-col'>
                    <h4>store</h4>
                    <ul>
                        <li><a href='#'>About Us</a></li>
                        <li><a href='#'>Our Services</a></li>
                        <li><a href='#'>Privacy Policy</a></li>
                    </ul>
                </div>
                <div className='footer-col'>
                    <h4>get help </h4>
                    <ul>
                        <li><a href='#'>FAQ</a></li>
                        <li><a href='#'>shipping returns</a></li>
                        <li><a href='#'>Order Status</a></li>
                        <li><a href='#'>returns</a></li>
                        <li><a href='#'>payment options</a></li>
                    </ul>
                </div>
                <div className='footer-col'>
                    <h4>online shop</h4>
                    <ul>
                        <li><a href='#'>fruits</a></li>
                        <li><a href='#'>vegetables</a></li>
                        <li><a href='#'>dairy Products</a></li>
                        <li><a href='#'>staples</a></li>
                        <li><a href='#'>snacks</a></li>
                    </ul>
                </div>
                <div className='footer-col'>
                    <h4>follow us</h4>
                        <div className='social-links'>
                            <FacebookIcon />
                            <TwitterIcon />
                            <InstagramIcon/>
                            <LinkedinIcon />
                        </div>
                
            </div>    
        </footer>
        

    </div>
  )
}

export default Footer