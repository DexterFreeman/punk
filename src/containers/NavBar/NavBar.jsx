import React from 'react'
import './NavBar.scss'
const NavBar = ({handleInput}) => {
  return (
    <div className='nav-bar'>
          <label htmlFor="search">Search:</label>
          <input type="text" id="search" onChange={handleInput}/>
          <label htmlFor="1">High APV%:</label>
          <input type="checkbox" name="HighAPV" id="1" onChange={handleInput}/>
          <label htmlFor="2">Classic selection:</label>
          <input type="checkbox" name="Classic" id="2" onChange={handleInput} />
          <label htmlFor="3">High Acidity:</label>
          <input type="checkbox" name="Classic" id="3" onChange={handleInput} />
   

      </div>
  )
}

export default NavBar