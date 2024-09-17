import React, {useContext} from 'react'
import { StateContext, BookObject } from '../context'
import BookCard from '../components/BookCard'

function Books(){
    const {selectedGroup} = useContext(StateContext)

    return(
        <>
        {selectedGroup?.books.map((book:BookObject) => <BookCard key={book['id']} book={book}/>)}
        </>
    )
}

export default Books