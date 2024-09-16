import React, { createContext, PropsWithChildren, useState } from 'react'

export interface IUser {
    id: number,
    username: string,
    email: string,
    first_name: string,
    last_name: string,
    logins: number,
    password: string,
    memberships: [],
    invitations: [],
    groups: [],
    movies: [],
    music: [],
    books:[],
    my_movies:[],
    my_music: [],
    my_books: [],
    movie_comments: [],
    music_comments: [],
    book_comments: []
}

export interface IGroup {
    id: number,
    group_name: string,
    memberships: [],
    users: [],
    invitations: [],
    activities: [],
    movies: [],
    music: [],
    books: []
}

export type MovieObject = {
    id: number,
    title: string
    image: string,
    year: number,
    director: string,
    cast: string,
    description: string,
    group: object,
    movie_comments:[]
}

export interface MovieProps {
    movie: MovieObject
}

export type MusicObject = {
    id: number,
    artist_name: string,
    album_name: string,
    image: string,
    year: number,
    description: string,
    songs: [],
    music_comments: []
}

export interface MusicProps {
    album: MusicObject 
}

const useValue = () => {
    const [currentUser, setCurrentUser] = useState<IUser>()
    const [selectedGroup, setSelectedGroup] = useState<IGroup>()
    

    return{
        currentUser,
        setCurrentUser,
        selectedGroup,
        setSelectedGroup
    }
}

export const StateContext = createContext({} as ReturnType<typeof useValue>)

export const StateContextProvider: React.FC<PropsWithChildren> = (props) => {
    return(
                    <StateContext.Provider value={useValue()}>
                        {props.children}
                    </StateContext.Provider>
            )
}

// export function StateProvider ({ children }) {
//     const[user, setUser] = useState(null)

//     return(
//         <div>
//             <StateContext.Provider value={{user , setUser}}>
//                 {children}
//             </StateContext.Provider>
//         </div>
//     )
// }