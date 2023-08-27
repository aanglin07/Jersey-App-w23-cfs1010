import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

const Header = ({text}) => {
  return (
    <div className='page_header'>
        <div className='container'>
            <div data-testid="text" className='app_name'>
                <h1>{text}</h1>
            </div>
        </div>
    </div>
  )
};

Header.defaultProps = {
    text: "Jersey App"
};

Header.Prototypes = {
  text:PropTypes.string,
};


export default Header