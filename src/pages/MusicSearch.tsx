import React, {useContext} from 'react'
import { StateContext } from '../context'

function MusicSearch(){
    const {mediaSearch, handleMediaSearch} = useContext(StateContext)
    return(
        <div>  
            <form>
            <input type='text' name='music-search' value={mediaSearch['music-search']} onChange={handleMediaSearch}/>
                <button type='submit'>Search Movies</button>
            </form>
        </div>
    )
}

export default MusicSearch