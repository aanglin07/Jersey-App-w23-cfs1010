import React, { useState, useRef, useEffect } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import NavTop from './NavTop';
import HamburgerMenu from './HamburgerMenu';
import RespMenu from './RespMenu';
import LoginSection from './LoginSection';




const Nav = () => {

   
  const { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
  const [menuOpen, setMenuOpen] = useState(false)
  let menuRef = useRef();
  
  useEffect(() => {let handler = (e)=>{
  
    if (!menuRef.current.contains(e.target)){
    setMenuOpen(false);
    }  
    
  };
      document.addEventListener("mousedown", handler)
      
       return () => {
        document.removeEventListener("mousedown", handler)
      } 
    })  
  return (
      <div>
        
            <NavTop />
            <div className='main_header'>
              <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              <RespMenu menuRef={menuRef} menuOpen={menuOpen} />
              <LoginSection isAuthenticated={isAuthenticated} user={user} />                  
            </div>
            
            <nav>                        
              <div className='menu_container'>
                  <div className='nav'>                 
                  <ul>
                      <li><Link to="/" className='link'>Home</Link></li>
                      <li><Link to="/jerseys"  className='link'>Jerseys</Link></li>
                      <li><Link to="/about" className='link'>About Us</Link></li>
                      <li><Link to="/contact" className='link'>Contact</Link></li>
                  </ul>
                  </div>
                  
                  <div className='login'>
                  {
                    isAuthenticated ?
                    <p onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</p>
                    :
                    <p onClick={()=> loginWithRedirect()}>Login</p>
                  }                     
                  </div>
              </div>
            </nav>          
      </div>
  )     
  
}

export default Nav;