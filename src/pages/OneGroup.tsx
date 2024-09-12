import React, {useContext} from 'react'
import { StateContext } from '../context'
import { useNavigate } from 'react-router-dom'



function OneGroup(){
    const { selectedGroup } = useContext(StateContext)
    const navigate = useNavigate()

    function handleMoviesClick(){
        navigate(`groups/${selectedGroup?.id}/movies`)
    }

    
    return(
        <>
        <h2>{selectedGroup?.group_name}</h2>
        <ul>
            {selectedGroup?.memberships.map((membership) => {
                return <li>{membership['user']['username']}</li>
            })}
        </ul>
        <button onClick={handleMoviesClick}>View Movies</button>
        </>
    )
}

export default OneGroup