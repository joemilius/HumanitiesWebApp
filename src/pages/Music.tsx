import React, {useContext} from 'react'
import { StateContext, MusicObject } from '../context'
import MusicCard from '../components/MusicCard'

function Music(){

    const {selectedGroup} = useContext(StateContext)
    return(
        <>
            {selectedGroup?.music.map((album: MusicObject) => <MusicCard key={album['id']} album={album}/>)}
        </>
    )
}

export default Music