import React, {useState, useContext} from 'react'
import { MovieProps, StateContext } from '../context'

const MovieCard: React.FC<MovieProps> = ({movie}) : JSX.Element => {
    const [showComments, setShowComments] = useState(false)
    const {handleCommentContentChange} = useContext(StateContext)

    const handleShowComments = () => setShowComments(!showComments)

    return(
        <div>
            <h3>{movie['title']}</h3>
            <img src={movie['image']}/>
            <button onClick={handleShowComments}>{showComments ? 'Hide Comments' : 'View Comments'}</button>
            {showComments ? (
                <div>
                    <form>
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