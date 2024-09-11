import React, {useContext} from 'react'
import { StateContext } from '../context'



function OneGroup(){
    const { selectedGroup } = useContext(StateContext)

    
    return(
        <>
        <h2>{selectedGroup?.group_name}</h2>
        <ul>
            {selectedGroup?.memberships.map((membership) => {
                return <li>{membership['user']['username']}</li>
            })}
        </ul>
        </>
    )
}

export default OneGroup