import React, {useContext} from 'react'
import { StateContext } from '../context'

function MediaSearch(){
    const {mediaSearch, handleMediaSearch, handleMediaSearchSubmit} = useContext(StateContext)
    return(
        <div>  
            <form onSubmit={() => handleMediaSearchSubmit('music')}>
            <input type='text' value={mediaSearch['music-search']} onChange={handleMediaSearch}/>
                <button type='submit'>Search Music</button>
            </form>
            <select>
                <option>Movies</option>
                <option>Music</option>
                <option>Books</option>
            </select>
        </div>
    )
}

export default MediaSearch