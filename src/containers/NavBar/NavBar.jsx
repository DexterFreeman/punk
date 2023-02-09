import React from 'react'

const NavBar = () => {
  return (
    <div className='nav-bar'>
        <label htmlFor="search">Search:</label>
        <input type="text" id="serach" />
        <label htmlFor="1">High APV%:</label>
        <input type="checkbox" name="HighAPV" id="1" />
        <label htmlFor="2">Classic selection:</label>
        <input type="checkbox" name="Classic" id="2" />
    </div>
  )
}

export default NavBar