import React, {useContext} from 'react'
import { StateContext } from '../context'

function Groups(){
    const {currentUser} = useContext(StateContext)
    return(
        <>
        <h3>My Groups</h3>
            <ul>
                {currentUser?.groups.map(group => (
                    <li>{group['group_name']}</li>
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