import React, {useState} from 'react'
import { MovieProps } from '../context'

const MovieCard: React.FC<MovieProps> = ({movie}) : JSX.Element => {
    const [showComments, setShowComments] = useState(false)
    const [newMovieComment, setNewMovieComment] = useState({
        stars: '',
        content: ''
    })

    const handleShowComments = () => setShowComments(!showComments)

    const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
        setNewMovieComment({...newMovieComment, [e.currentTarget.name]: e.currentTarget.value})
    }

    return(
        <div>
            <h3>{movie['title']}</h3>
            <img src={movie['image']}/>
            <button onClick={handleShowComments}>{showComments ? 'Hide Comments' : 'View Comments'}</button>
            {showComments ? (
                <div>
                    <form>
                        <input type='text' placeholder='Enter Comment Here' onChange={handleChange}/>
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