import React, {useContext} from 'react'
import { StateContext } from '../context'

function BookSearch(){
    const {mediaSearch, handleMediaSearch, handleMediaSearchSubmit} = useContext(StateContext)
    return(
        <div>
            <form onSubmit={() => handleMediaSearchSubmit('books')}>
                <input type='text' name='book-search' value={mediaSearch['book-search']} onChange={handleMediaSearch}/>
                <button type='submit'>Search Books</button>
            </form>
        </div>
    )
}

export default BookSearch