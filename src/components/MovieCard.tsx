import React from 'react'
import { MovieProps } from '../context'

const MovieCard: React.FC<MovieProps> = ({movie}) : JSX.Element => {

    return(
        <div>
            <h3>{movie['title']}</h3>
            <img src={movie['image']}/>
            <button>View Comments</button>
        </div>
    )
}

export default MovieCard