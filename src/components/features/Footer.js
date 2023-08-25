import React from 'react'
import { FaTiktok } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    let currentYear = new Date().getFullYear();
  return (
    <>
        <div className='footer'>
            <div className='container'>
                <div className='about'>
                    <div className='app_name'>
                        <h1>Jersey App</h1>
                    </div>
                    <div className='detail'>
                           
                        <div className='icon'>
                        
                        <li><FaTiktok /></li>
                        <li><FaFacebookF /></li>
                        <li><AiOutlineInstagram /></li>
                    
                </div> 
                        <p>{"©" + currentYear} Jersey App</p>                       
                    </div>
                   
                </div>
            
            <div className='page'>
                <h3>Pages</h3>
                <ul>
                    <Link to="/" className='link'><li>Home</li></Link>
                    <Link to="/about" className='link'><li>About</li></Link>
                    <Link to="/jerseys" className='link'><li>Jerseys</li></Link>
                    <Link to="/contact" className='link'><li>Contact</li></Link>
                </ul>

            </div>
            <div className='account'>
                <h3>My Account</h3>
                <ul>
                <Link to="/wishlist" className='link'><li>Wishlist</li></Link>
                </ul>
            </div>
            
            </div>

        </div>
    </>
  )
}

export default Footer