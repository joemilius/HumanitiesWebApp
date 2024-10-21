import React, {useContext} from 'react'
import { StateContext } from '../context'

function MovieSearch(){
    const {mediaSearch, handleMediaSearch, handleMediaSearchSubmit} = useContext(StateContext)
    return(
        <div>
            <form onSubmit={() => handleMediaSearchSubmit('movies')}>
                <input type='text' name='movie-search' value={mediaSearch['movie-search']} onChange={handleMediaSearch}/>
                <button type='submit'>Search Movies</button>
            </form>
        </div>
    )
}

export default MovieSearch