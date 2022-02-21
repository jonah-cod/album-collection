import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { filter } from '../redux/actions/actions'

const NavBar = () => {
  const dispatch = useDispatch()
  let [artist, setartist] = useState()
  let [album, setalbum] = useState()
  const handleSearch = (text)=>{
    console.log(album, artist);
    if (album || artist) {
      console.log("one is true");
      dispatch(filter(text))
    }
  }
  return (
    <div className='navbar'>
      <div className="search">
        <input type="text" 
              placeholder='search' 
              className='searchBox' 
               
              onChange={(e)=>{
                handleSearch(e.target.value)
              }}
        />
        <i className="fad fa-search"></i>
      </div>
      <div className="filter">
        <input type="checkbox" name="artist" onClick={(e)=>e.currentTarget.checked? setartist(true): setartist (false)}/>
        <label htmlFor="artist">Artist</label>
        <input type="checkbox" name="album" onClick={(e)=>e.currentTarget.checked? setalbum(true): setalbum(false)}/>
        <label htmlFor="album">Album</label>
      </div>
      <button className="add">Add new album</button>
    </div>
  )
}

export default NavBar