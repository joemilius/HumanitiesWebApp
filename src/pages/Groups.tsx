import React, {useContext} from 'react'
import { IGroup, StateContext } from '../context'

function Groups(){
    const {currentUser, setSelectedGroup} = useContext(StateContext)

    function handleGroupClick(group:IGroup){
        setSelectedGroup(group)
    }
    return(
        <>
        <h3>My Groups</h3>
            <ul>
                {currentUser?.groups.map(group => (
                    <li>{group['group_name']}
                    <button onClick={() => handleGroupClick(group)}>View Group</button>
                    </li>
                ))}
            </ul>
            <h3>My Invitations</h3>
            <ul>
                {currentUser?.invitations.map(invitation => (
                    <li>{invitation['group']['group_name']}</li>
                ))}
            </ul>
        </>
    )
}

export default Groups