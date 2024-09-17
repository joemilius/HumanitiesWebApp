import React from 'react'
import { BookProps } from '../context'


const BookCard: React.FC<BookProps> = ({book}) : JSX.Element => {

    return(
        <div>
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
            <img src={book.image} alt={book.title}/>
        </div>
    )
}

export default BookCard