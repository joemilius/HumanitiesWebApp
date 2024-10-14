import React, {useContext} from 'react'
import { StateContext } from '../context'

function MovieSearch(){
    const {mediaSearch, handleMediaSearch} = useContext(StateContext)
    return(
        <div>
            <form>
                <input type='text' name='movie-search' value={mediaSearch['movie-search']} onChange={handleMediaSearch}/>
                <button type='submit'>Search Movies</button>
            </form>
        </div>
    )
}

export default MovieSearch