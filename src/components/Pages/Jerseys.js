
import './Jerseys.css'
import { BsEye } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { RiHeartAddLine } from "react-icons/ri";
import { useAuth0 } from "@auth0/auth0-react";
import Data from '../features/Data';
import {React, useState} from 'react';
import { Link } from 'react-router-dom';


const Jerseys = ({jersey, setJersey, detail, view, close, setClose, addToWishlist}) => {
  const [query, setQuery] = useState("")
  const { loginWithRedirect, isAuthenticated} = useAuth0();
  const filterjersey = (jersey) => 
  {
    const update = Data.filter((x)  =>
    {
      return x.category === jersey;
    })
    setJersey(update)
  }
  
  const AllJerseys = () =>
  {
    setJersey(Data)
  }

  const searchbtn = () =>
  {
    const change = Data.filter((x) => 
    {
      return x.teamName.toLowerCase().indexOf(query.toLowerCase()) !== -1  
    })

   
    setJersey(change)
  }


  
  return (
    <>
    {
      close ?
      <div className='jersey_detail'>
      <div className='container'>
          <button onClick={() => setClose(false)} className='closebtn'><AiOutlineClose /></button>
        {
            detail.map((curElm) =>
            {
              return(
                <div className='jerseybox'>
                    <div className='img-box'>
                        <img src = {curElm.img} alt={curElm.teamName} />
                    </div>
                    <div className='detailInfo'>
                    <h4>{curElm.category}</h4>
                    <h2>{curElm.teamName} - {curElm.teamKit}</h2><br />
                    <p>{curElm.description}</p><br />
                    {
                                  isAuthenticated ?
                                  <button onClick={() => addToWishlist(curElm)}>Add to Wishlist</button>
                                  :
                                  <button onClick={() => loginWithRedirect()}>Add to Wishlist</button>

                                }
                    
                    <Link to={curElm.purchaseLink} target="_blank"><button>Purchase here</button></Link>
                    </div>
                </div>
              )
            }
            
            )
        }
        <div className='jerseybox'>

        </div>

      </div>

    </div> : null
    }
    
    <div className='jerseys'>
      <h2># Jerseys</h2>
      <p>Home . Jerseys</p>
        <div className='search_box'>
            <input type='text' value={query} placeholder='Search Team...' autoComplete='off' onChange={(e) => setQuery(e.target.value)} />
            <button onClick={()=>searchbtn(query)}>Search</button>
        </div>
        <div className="dropdown">
            
            <select id="leagues" onChange={(e) => filterjersey(e.target.value)} placeholder='Search leagues'>
                <option value="" selected disabled hidden>Search by League</option>
                <option>English Premier League</option>
                <option>La Liga</option>
                <option>Serie A</option>
               
            </select>
            <button onClick={() => AllJerseys()}>Show All</button>

                       
        </div>
      <div className='container'>
          <div className='filter'>
              <div className='leagues'>
              <h3>Search by Leagues</h3>
                  <ul>
                  <li onClick={() => AllJerseys()}>All Jerseys</li>
                    <li onClick={() => filterjersey("English Premier League")}>English Premier League</li>
                    <li onClick={() => filterjersey("La Liga")}>La Liga</li>
                    <li onClick={() => filterjersey("Serie A")}>Serie A</li>                    
                  </ul>
                  
              </div>
              
          </div>
          
          <div className='jerseybox'>
              <div className='container'>
                  {
                    jersey.map((curElm) => 
                    {
                        return(
                          <>
                            <div className='box' key={curElm.id}>
                                <div className='icon'>
                                {
                                  isAuthenticated ?
                                  <li onClick={() => addToWishlist(curElm)}><RiHeartAddLine /></li>
                                  :
                                  <li onClick={() => loginWithRedirect()}><RiHeartAddLine /></li>

                                }
                                            
                                            <li onClick={()=> view (curElm)}><BsEye /></li>
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
    </div>
         
        
      </div>
    </>
  )
}

export default Jerseys
