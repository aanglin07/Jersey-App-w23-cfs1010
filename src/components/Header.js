import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='page_header'>
        <div className='container'>
            <div className='app_name'>
                <Link to="/" className='link'><h1>Jersey App</h1></Link>
            </div>
        </div>
    </div>
  )
}

export default Header