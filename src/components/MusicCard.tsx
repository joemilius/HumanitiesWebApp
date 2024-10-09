import React, {useState, useContext} from 'react'
import { MusicProps, StateContext } from '../context'
// import { postRequest } from '../requests'

const MusicCard: React.FC<MusicProps> = ({album}) : JSX.Element =>{
    
    const [showComments, setShowComments] = useState(false)
    const {currentUser, handleCommentContentChange, handleCommentStarChange, handleCommentSubmit, handleAddMyMedia} = useContext(StateContext)

    const handleShowComments = () => setShowComments(!showComments)

    const userId = currentUser ? currentUser.id : 0
    
    

    return(
        <div>
            <h3>{album.album_name}</h3>
            <h5>{album.artist_name}</h5>
            <img src={album.image} alt={album.album_name}/>
            <button onClick={() => {handleAddMyMedia('music', album)}}>Add Album to Listen List</button>
            <button onClick={handleShowComments}>{showComments ? 'Hide Comments' : 'View Comments'}</button>
            {showComments ? (
                <div>
                    <form onSubmit={() => handleCommentSubmit('music', album.id, userId)}>
                        <label>How Many Stars?</label>
                        <select onChange={(e:React.SyntheticEvent<HTMLSelectElement>) => handleCommentStarChange(e)}>
                            <option value='4'>4</option>
                            <option value='3'>3</option>
                            <option value='2'>2</option>
                            <option value='1'>1</option>
                        </select>
                        <input name='content' type='text' placeholder='Enter Comment Here' onChange={(e:React.SyntheticEvent<HTMLInputElement>) => handleCommentContentChange(e)}/>
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