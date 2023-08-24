import React from 'react'
import Data from './Data'
import { BsFillBagFill } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import './Card.css'


const Card = () => {
  return (
    <>
        
       <div className='jerseybox'>
              <div className='container'>
                  {
                    Data.map((curElm) => 
                    {
                        return(
                          <>
                            <div className='box' key={curElm.id}>
                                <div className='icon'>
                                            <li><BsFillBagFill /></li>
                                            <li><BsEye /></li>
                                </div>
                                <div className='img_box'>
                                        
                                  <img src = {curElm.img} alt= {curElm.teamName} />
                                  
                                </div>
                                <div className='detail'>
                                    <p>{curElm.category}</p>
                                    <h3>{curElm.teamName}</h3>
                                    <h4>{curElm.teamKit}</h4>
                                    <h5>{curElm.Year}</h5>
                                        
                                </div>

                            </div>
                          </>
                        )
                    })
                  }

              </div>

          </div>
    </>
  )
}

export default Card