import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className="search">
        <input type="text" placeholder='search' className='searchBox'/>
        <i className="fad fa-search"></i>
      </div>
      <div className="filter">
        <input type="checkbox" name="artist"/>
        <label htmlFor="artist">Artist</label>
        <input type="checkbox" name="album"/>
        <label htmlFor="album">Album</label>
      </div>
      <button className="add">Add new album</button>
    </div>
  )
}

export default NavBar