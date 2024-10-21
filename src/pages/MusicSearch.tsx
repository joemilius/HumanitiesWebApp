import React, {useContext} from 'react'
import { StateContext } from '../context'

function MusicSearch(){
    const {mediaSearch, handleMediaSearch, handleMediaSearchSubmit} = useContext(StateContext)
    return(
        <div>  
            <form onSubmit={() => handleMediaSearchSubmit('music')}>
            <input type='text' name='music-search' value={mediaSearch['music-search']} onChange={handleMediaSearch}/>
                <button type='submit'>Search Music</button>
            </form>
        </div>
    )
}

export default MusicSearch