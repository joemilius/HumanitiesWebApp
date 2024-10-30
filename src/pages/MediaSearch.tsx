import React, {useContext} from 'react'
import { StateContext } from '../context'

function MediaSearch(){
    const {mediaSearch, mediaSearchType, handleMediaSearch, handleMediaSearchType, handleMediaSearchSubmit} = useContext(StateContext)
    const mediaKey = mediaSearchType === 'movie' ? 'movie-search': mediaSearchType === 'music' ? 'music-search' : 'book-search'
    return(
        <div>  
            <form onSubmit={() => handleMediaSearchSubmit()}>
            <input type='text' value={mediaSearch[mediaKey]} onChange={handleMediaSearch}/>
                <button type='submit'>Search Music</button>
            </form>
            <select onChange={handleMediaSearchType}>
                <option value='movie'>Movies</option>
                <option value='music'>Music</option>
                <option value='book'>Books</option>
            </select>
        </div>
    )
}

export default MediaSearch