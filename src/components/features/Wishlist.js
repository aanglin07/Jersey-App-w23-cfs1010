import React from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './Wishlist.css'
const Wishlist = ({wishlist, setWishlist}) => {
  
    const removeJersey = (jersey) =>
    {      
  
    setWishlist(wishlist.filter((x)=>
    {
        return x.id !== jersey.id
    }))

    }



  
    return (
    <>
        <div className='wish_container'>
        <Link to ='/jerseys'><AiOutlineArrowLeft/>Browse more jerseys</Link>
            {
                wishlist.length === 0 &&
                <div className='emptycart'>
                <h2 className='empty'>Wishlist is Empty</h2>
                <Link to ='/jerseys' className='emptyCartBtn'>Browse Now</Link>
                </div>

            }
            <div className='content'>
                {
                    wishlist.map((curElm) =>
                    {
                        return(
                            <div className='wish_item' key={curElm.id}>
                            
                                <div className='img_box'>
                                
                                    <img src= {curElm.img} alt={curElm.teamName} />
                                </div>
                                <div className='detail'>
                                
                                    <h4>{curElm.category}</h4>
                                    <h3>{curElm.teamName} - {curElm.teamKit} - {curElm.Year}</h3>
                                    <button onClick={() => removeJersey(curElm)} className='removeBtn'>Remove</button>
                                    <Link to={curElm.purchaseLink} target="_blank"><button className='purchBtn'>Purchase here</button></Link>
                                   
                                </div>
                                
                            </div>
                            

                        )
                    })
                }
                

            </div>

        </div>
    </>
  )
}

export default Wishlist