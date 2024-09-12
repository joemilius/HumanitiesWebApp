import React, {useContext} from 'react'
import { StateContext, MovieObject } from '../context'
import MovieCard from '../components/MovieCard'


function Movies(){
    const {selectedGroup} = useContext(StateContext)
    return(
        <>
            {selectedGroup?.movies.map((movie:MovieObject) => <MovieCard key={movie['id']} movie={movie}/>)}
        </>
    )
}

export default Movies