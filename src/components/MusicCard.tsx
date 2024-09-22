import React, {useState} from 'react'
import { MusicProps } from '../context'

const MusicCard: React.FC<MusicProps> = ({album}) : JSX.Element =>{
    const [showComments, setShowComments] = useState(false)

    const handleShowComments = () => setShowComments(!showComments)

    return(
        <div>
            <h3>{album.album_name}</h3>
            <h5>{album.artist_name}</h5>
            <img src={album.image} alt={album.album_name}/>
            <button onClick={handleShowComments}>{showComments ? 'Hide Comments' : 'View Comments'}</button>
            {showComments ? (
                <div>
                    <form>
                        <input type='text' placeholder='Enter Comment Here'/>
                        <button type='submit'>Contribute</button>
                    </form>
                    <ul>
                    {album.music_comments.map(comment => {
                        return (
                            <li>
                                <p>{comment['stars']} Stars</p>
                                <p>{comment['content']}</p>
                                <p>{comment['user']['username']}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
            ) : null}
        </div>
    )
}

export default MusicCard