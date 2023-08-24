import React, { useState } from 'react'
import './Search.css'


const Nav = ({ handleInputChange, query }) => {
  return (
    <div className="searchStyle">
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter Team Name."
        />
      </div>
      
    </div>
  );
};

export default Nav