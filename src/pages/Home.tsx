import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { StateContext } from '../context'
import NavBar from '../components/NavBar'


function Home(){
  const {currentUser} = useContext(StateContext)

  const navigate = useNavigate()

    const myMovies = currentUser?.movies

    const handleSearchClick = (media:string) => {
        navigate(`/search-${media}`)
    }

    return(
        <>
            <header>
                <NavBar />
            </header>
            <h3>
                Movies to Watch
            </h3>
            <button onClick={() => handleSearchClick('movies')}>Search Movies</button>
            <input />
            <ul>
                {currentUser?.my_movies.map(movie => (
                    <li>{movie['title']}</li>
                ))}
                {myMovies}
            </ul>
            <h3>
                Music to Hear
            </h3>
            <button onClick={() => handleSearchClick('music')}>Search Music</button>
            <ul>
                {currentUser?.my_music.map(music => (
                    <li>{music['album_name']}</li>
                ))}
            </ul>
            <h3>
                Books to Read
            </h3>
            <button onClick={() => handleSearchClick('books')}>Search Books</button>
            <ul>
                {currentUser?.my_books.map(book => (
                    <li>{book['title']}</li>
                ))}
            </ul>
            
        </>
    )
}

export default Home