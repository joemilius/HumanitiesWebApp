import React, {useState, useContext} from 'react'
import { BookProps, StateContext } from '../context'



const BookCard: React.FC<BookProps> = ({book}) : JSX.Element => {

    const [showComments, setShowComments] = useState(false)
    const {currentUser, handleCommentContentChange, handleCommentStarChange, handleCommentSubmit} = useContext(StateContext)

    const handleShowComments = () => setShowComments(!showComments)

    const userId = currentUser ? currentUser.id : 0


    return(
        <div>
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
            <img src={book.image} alt={book.title}/>
            <button onClick={handleShowComments}>{showComments ? 'Hide Comments' : 'View Comments'}</button>
            {showComments ? (
                <div>
                    <form onSubmit={() => handleCommentSubmit('books', book.id, userId)}>
                    <label>How Many Stars?</label>
                        <select onChange={(e:React.SyntheticEvent<HTMLSelectElement>) => handleCommentStarChange(e)}>
                            <option value='4'>4</option>
                            <option value='3'>3</option>
                            <option value='2'>2</option>
                            <option value='1'>1</option>
                        </select>
                        <input className='book-content' name='content' type='text' placeholder='Enter Comment Here' onChange={(e: React.SyntheticEvent<HTMLInputElement>) => handleCommentContentChange(e)}/>
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