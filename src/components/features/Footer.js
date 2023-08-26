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
                    <Link to="/" className='link'><h1>Jersey App</h1></Link>
                    </div>
                    <div className='detail'>
                           
                        <div className='icon'>
                        
                        <Link to='https://www.tiktok.com/' target="_blank"><li><FaTiktok /></li></Link>
                        <Link to='https://www.facebook.com/' target="_blank"><li><FaFacebookF /></li></Link>
                        <Link to='https://www.instagram.com/' target="_blank"><li><AiOutlineInstagram /></li></Link>
                        
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