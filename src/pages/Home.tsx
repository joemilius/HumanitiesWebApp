import React, {useContext} from 'react'
import { StateContext } from '../context'
import NavBar from '../components/NavBar'


function Home(){
  const {currentUser} = useContext(StateContext)

    const myMovies = currentUser?.movies

    return(
        <>
            <header>
                <NavBar />
            </header>
            <h3>
                Movies to Watch
            </h3>
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
            <ul>
                {currentUser?.my_music.map(music => (
                    <li>{music['album_name']}</li>
                ))}
            </ul>
            <h3>
                Books to Read
            </h3>
            <ul>
                {currentUser?.my_books.map(book => (
                    <li>{book['title']}</li>
                ))}
            </ul>
            
        </>
    )
}

export default Home