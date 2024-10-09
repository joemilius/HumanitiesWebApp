import React, {useState, useContext} from 'react'
import { MovieProps, StateContext } from '../context'

const MovieCard: React.FC<MovieProps> = ({movie}) : JSX.Element => {
    const [showComments, setShowComments] = useState(false)
    const {currentUser, handleCommentContentChange, handleCommentStarChange, handleCommentSubmit, handleAddMyMedia} = useContext(StateContext)

    const handleShowComments = () => setShowComments(!showComments)

    const userId = currentUser ? currentUser.id : 0

    return(
        <div>
            <h3>{movie['title']}</h3>
            <img src={movie['image']}/>
            <button onClick={() => {handleAddMyMedia('movies', movie)}}>Add Movies to Watch List</button>
            <button onClick={handleShowComments}>{showComments ? 'Hide Comments' : 'View Comments'}</button>
            {showComments ? (
                <div>
                    <form onSubmit={() => handleCommentSubmit('movie', movie.id, userId)}>
                    <label>How Many Stars?</label>
                        <select onChange={(e:React.SyntheticEvent<HTMLSelectElement>) => handleCommentStarChange(e)}>
                            <option value='4'>4</option>
                            <option value='3'>3</option>
                            <option value='2'>2</option>
                            <option value='1'>1</option>
                        </select>
                        <input name='content' type='text' placeholder='Enter Comment Here' onChange={(e: React.SyntheticEvent<HTMLInputElement>) => handleCommentContentChange(e)}/>
                        <button type='submit'>Contribute</button>
                    </form>
                    <ul>
                    {movie.movie_comments.map(comment => {
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

export default MovieCard