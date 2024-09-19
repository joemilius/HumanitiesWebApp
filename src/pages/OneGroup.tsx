import React, {useContext} from 'react'
import { StateContext } from '../context'
import { useNavigate } from 'react-router-dom'



function OneGroup(){
    const { selectedGroup } = useContext(StateContext)
    const navigate = useNavigate()

    const handleNavClick = (media: string) => {
        if(media === 'movies'){
            navigate(`groups/${selectedGroup?.id}/movies`)
        }else if (media === 'music'){
            navigate(`groups/${selectedGroup?.id}/music`)
        }else if (media === 'books'){
            navigate(`groups/${selectedGroup?.id}/books`)
        }

    }

    
    return(
        <>
        <h2>{selectedGroup?.group_name}</h2>
        <ul>
            {selectedGroup?.memberships.map((membership) => {
                return <li>{membership['user']['username']}</li>
            })}
        </ul>
        <button onClick={() => handleNavClick('movies')}>View Movies</button>
        <button onClick={() => handleNavClick('music')}>View Music</button>
        <button onClick={() => handleNavClick('books')}>View Books</button>
        </>
    )
}

export default OneGroup