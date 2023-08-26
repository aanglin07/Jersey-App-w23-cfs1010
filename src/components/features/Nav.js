import React, { useState, useRef, useEffect } from 'react'
import {BsFillBagHeartFill} from 'react-icons/bs';
import { GiSoccerKick } from 'react-icons/gi';
import './Nav.css'
import Header from './Header';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import NavTop from './NavTop';
import HamburgerMenu from './HamburgerMenu';
// import Data from './Data';



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
              
              <div className='resp_menu' ref={menuRef}>
                  <div className='resp_nav'>
                 
                  <ul className = {menuOpen ? "open" : ""}>
                      <li>
                          <Link to="/" className='link'>Home</Link>
                      </li>
                      <li>
                          <Link to="/jerseys" className='link'>Jerseys</Link>
                      </li>
                      <li>
                          <Link to="/about" className='link'>About Us</Link>
                      </li>
                      <li>
                          <Link to="/contact" className='link'>Contact</Link>
                      </li>
                  </ul>
                  </div>
                  </div>
                  <div className='container'>
                  
                      <Header />
                      
                    <div className='LoginInfo'> 
                    <div className='icon'>
                        {
                          isAuthenticated &&
                          (
                            <div className='account'>
                            <div className='user_icon'>
                                <GiSoccerKick />
                            </div>
                            <p>Hello, {user.name}</p>

                        </div>
                          )
                        }
                        
                      <div className='bag_icon'>
                          <Link to="/wishlist" className='link'><BsFillBagHeartFill /></Link>
                      </div>
                    </div>
                  </div>
            </div>
            </div>
            <div className='nav_header'>
                        
              <div className='menu_container'>
                  <div className='nav'>
                 
                  <ul>
                      <li>
                          <Link to="/" className='link'>Home</Link>
                      </li>
                      <li>
                          <Link to="/jerseys"  className='link'>Jerseys</Link>
                      </li>
                      <li>
                          <Link to="/about" className='link'>About Us</Link>
                      </li>
                      <li>
                          <Link to="/contact" className='link'>Contact</Link>
                      </li>
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
            </div>
          
      </div>
  )     
  
}

export default Nav;