import React, {useState} from 'react'
import { MovieProps } from '../context'

const MovieCard: React.FC<MovieProps> = ({movie}) : JSX.Element => {
    const [showComments, setShowComments] = useState(false)

    const handleShowComments = () => setShowComments(!showComments)

    return(
        <div>
            <h3>{movie['title']}</h3>
            <img src={movie['image']}/>
            <button onClick={handleShowComments}>{showComments ? 'Hide Comments' : 'View Comments'}</button>
            {showComments ? (
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
            ) : null}
            
        </div>
    )
}

export default MovieCard