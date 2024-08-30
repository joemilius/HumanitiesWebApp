import React, {useContext} from 'react'
import { StateContext } from '../context'
import NavBar from '../components/NavBar'


function Home(){
  const {currentUser} = useContext(StateContext)



    return(
        <>
            <header>
                <NavBar />
            </header>
            {currentUser === undefined ?
            <h3>Please Sign In</h3>
            :
            <p>Welcome {currentUser?.first_name}</p>
            }
        </>
    )
}

export default Home