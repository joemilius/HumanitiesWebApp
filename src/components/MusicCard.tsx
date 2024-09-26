import React, {useState} from 'react'
import { MusicProps } from '../context'
// import { postRequest } from '../requests'

const MusicCard: React.FC<MusicProps> = ({album}) : JSX.Element =>{
    
    const [showComments, setShowComments] = useState(false)
    const [newMusicComment, setNewMusicComment] = useState({
        stars: '',
        content: ''
    })

    const handleShowComments = () => setShowComments(!showComments)
    const handleChange = (e: React.SyntheticEvent<HTMLSelectElement>) => {
        setNewMusicComment({...newMusicComment, [e.currentTarget.name]: e.currentTarget.value})
    }

    const handleSubmit = () => {
        // postRequest
    }

    return(
        <div>
            <h3>{album.album_name}</h3>
            <h5>{album.artist_name}</h5>
            <img src={album.image} alt={album.album_name}/>
            <button onClick={handleShowComments}>{showComments ? 'Hide Comments' : 'View Comments'}</button>
            {showComments ? (
                <div>
                    <form onSubmit={handleSubmit}>
                        <label>How Many Stars?</label>
                        <select onChange={handleChange}>
                            <option value='4'>4</option>
                            <option value='3'>3</option>
                            <option value='2'>2</option>
                            <option value='1'>1</option>
                        </select>
                        <input name='music-content' type='text' placeholder='Enter Comment Here'/>
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