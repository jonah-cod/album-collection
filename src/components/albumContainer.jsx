import React, {useEffect} from 'react'
import Album from './album'
import gettracks from '../services/getTracks.js'
import data from '../data'
import { useDispatch, useSelector } from 'react-redux'
import  {requestsuccess, requestfailed, requesting}  from '../redux/actions/actions'

const AlbumContainer = () => {
  let albums = useSelector(state=>state.payload);
  const dispatch = useDispatch();
  useEffect(() => {
    
  Promise.all(
    data.albums.map(album=>{
      dispatch(requesting())
      let artist = data.artists.find((artist)=>artist.id === album.artistId).name
      return gettracks({album:album.name, artist})
    })
  ).then(res=>{
  
    dispatch(requestsuccess(res))})
    
  }, [])
  

  return (
    <div className='container'>
      {albums? albums.map(album=>(<Album album={album} key={album.data.album.mbid}/>)): "Loading..."}
    </div>
  )
}

export default AlbumContainer