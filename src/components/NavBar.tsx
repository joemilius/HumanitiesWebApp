import React, {useContext} from 'react'
import { StateContext } from '../context'
import { deleteRequest } from '../requests'
import { NavLink } from 'react-router-dom'


function NavBar(){
    const {currentUser, setCurrentUser} = useContext(StateContext)

    function handleLogout(){
        deleteRequest(`/api/logout`)
        setCurrentUser(undefined)
    }

    return (
        <nav>
            <NavLink to='/' className='nav-link'>Home</NavLink>
            {currentUser ? 
            <button onClick={handleLogout}>Logout</button>
            :
            <NavLink to='/login' className='nav-link'>Login</NavLink>
            }
            
        </nav>
    )
}

export default NavBar