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
                {/* map movies here */}
                {myMovies}
            </ul>
            <h3>
                Music to Hear
            </h3>
            <ul>
                {/* map music hear */}
            </ul>
            <h3>
                Books to Read
            </h3>
            <ul>
                {/* map books here */}
            </ul>
            <h3>My Groups</h3>
            <ul>
                {/* map groups here */}
            </ul>
        </>
    )
}

export default Home