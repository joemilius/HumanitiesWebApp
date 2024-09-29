import React, { createContext, PropsWithChildren, useState } from 'react'
// import { postRequest } from './requests'


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

export type BookObject = {
    id: number,
    title: string,
    author: string,
    image: string,
    description: string,
    book_comments: []
}

export interface BookProps {
    book: BookObject
}






const useValue = () => {
    const [currentUser, setCurrentUser] = useState<IUser>()
    const [selectedGroup, setSelectedGroup] = useState<IGroup>()
    const [newComment, setNewComment] = useState({
        stars: '',
        content: ''
    })


const handleCommentContentChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setNewComment({...newComment, "content": e.currentTarget.value})
}

const handleCommentStarChange = (e:React.SyntheticEvent<HTMLSelectElement>) => {
    setNewComment({...newComment, "stars": e.currentTarget.value})
}

const handleCommentSubmit = (media:string, mediaId: number, userId: number) => {
    let postComment = {}
    if(media === 'movies'){
        postComment = {
            stars: newComment.stars,
            content: newComment.content,
            movie_id: mediaId,
            user_id: userId
        }
    }else if (media === 'music'){
        postComment = {
            stars: newComment.stars,
            content: newComment.content,
            music_id: mediaId,
            user_id: userId
        }
    }else if(media === 'books'){
        postComment = {
            stars: newComment.stars,
            content: newComment.content,
            book_id: mediaId,
            user_id: userId
        }
    }

    console.log(postComment)
    
}

    

    return{
        currentUser,
        setCurrentUser,
        selectedGroup,
        setSelectedGroup,
        newComment,
        setNewComment,
        handleCommentContentChange,
        handleCommentStarChange,
        handleCommentSubmit
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