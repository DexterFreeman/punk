import React from 'react'
import './NavBar.scss'
const NavBar = ({handleInput}) => {
  return (
    <div className='nav-bar'>

          <div>
            <label htmlFor="search">Search:</label>
            <input type="text" id="search" onChange={handleInput}/>
          </div>

          <div>
            <label htmlFor="1">High APV%:</label>
            <input type="checkbox" name="HighAPV" id="1" onChange={handleInput}/>
          </div>

          <div>
            <label htmlFor="2">Classic selection:</label>
            <input type="checkbox" name="Classic" id="2" onChange={handleInput} />
          </div>

          <div>
            <label htmlFor="3">High Acidity:</label>
            <input type="checkbox" name="Classic" id="3" onChange={handleInput} />
          </div>

      </div>
  )
}

export default NavBar