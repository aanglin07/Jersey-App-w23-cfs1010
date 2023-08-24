import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import './Home.css'

const Home = () => {
  return (
    <>
        <div className='top_banner'>
            <div className='container'>
                <div className='detail'>
                    <h2>Soccer Jersey Database</h2>
                    <Link to='/jerseys' className='link'>Browse Now<BsArrowRight /></Link>
                </div>
                <div className='img_box'>
                    <img src='https://drive.google.com/uc?export=view&id=13ntXD5w-_3NZMW1xbRPdhVtOD-5fRlJs' alt='Rashford'/>
                   

                </div>

            </div>

        </div>
    </>
  )
}

export default Home