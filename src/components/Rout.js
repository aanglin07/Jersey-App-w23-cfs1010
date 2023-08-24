import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Jerseys from './Pages/Jerseys';
import Contact from './Pages/Contact';
import Wishlist from './Wishlist';

const Rout = ({jersey, setJersey, detail, view, close, setClose, wishlist, setWishlist, addToWishlist}) => {

  return (
   <>
    <Routes>
          <Route path='/about' element = {<About />} />
          <Route path='/contact' element = {<Contact />} />
          <Route path='/jerseys' element = {<Jerseys jersey={jersey} setJersey={setJersey} detail = {detail} view = {view} close = {close} setClose = {setClose} addToWishlist={addToWishlist}/>} />
          <Route path='/' element = {<Home />} />
          <Route path='/wishlist' element = {<Wishlist wishlist ={wishlist} setWishlist = {setWishlist} />} />
          
    </Routes>     
   </>
  )
}

export default Rout