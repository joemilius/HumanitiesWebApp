import React, {useContext} from 'react'
import { StateContext } from '../context'

function BookSearch(){
    const {mediaSearch, handleMediaSearch} = useContext(StateContext)
    return(
        <div>
            <input type='text' name='book-search' value={mediaSearch['book-search']} onChange={handleMediaSearch}/>
            <button type='submit'>Search Books</button>
        </div>
    )
}

export default BookSearch