import React from 'react'
import Tracklist from './tracklist'

const Album = ({album}) => {
  let {artist, image, mbid, name, tracks, } = album.data.album
  return (
    <div className='album' id={mbid}>
        <div className="album-header">
            <img src={image[3]['#text']} alt={image[3]['#text']? " ": "No album picture uploaded"} />
            <div className="details">
                <h3>ALBUM</h3>
                <h2>{name}</h2>
                <h4>By {artist}</h4>
            </div>
        </div>
        <Tracklist tracks={tracks? tracks.track: null}/>
    </div>
  )
}

export default Album