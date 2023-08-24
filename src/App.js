import React, {useState} from 'react'
import Nav from './components/Nav';
import Rout from './components/Rout';
import Footer from './components/Footer';
import Data from './components/Data';


const App = ({searchbtn}) => {
  //add to wishlist
  const [wishlist, setWishlist] = useState([])
 
  //Jersey Details
  const [close, setClose] = useState(false)
  const [detail, setDetail] = useState([])
  
  //filter jersey
  const [jersey, setJersey] = useState(Data)
  
  
  //jersey detail
  const view = (jersey) =>
  {
    setDetail([{...jersey}])
    setClose(true)
  }
  
  //add to wishlist
 
  const addToWishlist = (jersey) =>
  
  {

    const exit = wishlist.find((x) =>
    {
      return x.id === jersey.id
    }
    )
    
    if(exit)
    {
      alert("This jersey has already been added to your wishlist")
    }
    else
    {
      setWishlist([...wishlist, {...jersey}])
      alert("This jersey has been added to your wishlist")
    }
  }
 
  
  return (
    <>
      <Nav />      
      <Rout jersey={jersey} setJersey={setJersey} detail = {detail} view = {view} close = {close} setClose = {setClose} wishlist ={wishlist} setWishlist = {setWishlist} addToWishlist={addToWishlist} searchbtn = {searchbtn} />
      <Footer />

    </>
  )
}

export default App;
