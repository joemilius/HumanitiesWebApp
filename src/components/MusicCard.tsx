import React from 'react'
import { MusicProps } from '../context'

const MusicCard: React.FC<MusicProps> = ({album}) : JSX.Element =>{

    return(
        <div>
            <h3>{album.album_name}</h3>
            <h5>{album.artist_name}</h5>
            <img src={album.image} alt={album.album_name}/>
        </div>
    )
}

export default MusicCard