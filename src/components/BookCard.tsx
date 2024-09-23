import React, {useState} from 'react'
import { BookProps } from '../context'


const BookCard: React.FC<BookProps> = ({book}) : JSX.Element => {

    const [showComments, setShowComments] = useState(false)

    const handleShowComments = () => setShowComments(!showComments)

    return(
        <div>
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
            <img src={book.image} alt={book.title}/>
            <button onClick={handleShowComments}>{showComments ? 'Hide Comments' : 'View Comments'}</button>
            {showComments ? (
                <div>
                    <form>
                        <input type='text' placeholder='Enter Comment Here'/>
                        <button type='submit'>Contribute</button>
                    </form>
                    <ul>
                    {book.book_comments.map(comment => {
                        return (
                            <li>
                                <p>{comment['stars']} Stars</p>
                                <p>{comment['content']}</p>
                                <p>{comment['user']['username']}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
            ) : null}
        </div>
    )
}

export default BookCard