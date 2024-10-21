import React, { createContext, PropsWithChildren, useState } from 'react'
import { postRequest } from './requests'


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

    const [mediaSearch, setMediaSearch] = useState({
        'movie-search': '',
        'music-search': '',
        'book-search': '' 
    })


const handleCommentContentChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setNewComment({...newComment, "content": e.currentTarget.value})
}

const handleCommentStarChange = (e:React.SyntheticEvent<HTMLSelectElement>) => {
    setNewComment({...newComment, "stars": e.currentTarget.value})
}

const handleCommentSubmit = (media:string, mediaId: number, userId: number) => {
    // media is a string of 'music', 'movie', or 'book' to be used in the url for the appropriate route in the api
    // in the route for the coment creation media_id in the postComment data sent to the api is converted to 'movie_id', 'music_id', or 'book_id'
    const postComment = {
        stars: newComment.stars,
        content: newComment.content,
        media_id: mediaId,
        user_id: userId
    }

    postRequest(`/api/${media}`, postComment)
    
}

const handleAddMyMedia = (media:string, body: object) => {
    postRequest(`/api/my${media}`, body)
}

const handleMediaSearch = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setMediaSearch({...mediaSearch, [e.currentTarget.name]: e.currentTarget.value})

}

const handleMediaSearchSubmit = (media: string) => {

    if (media === 'movies'){
        const newMovie = {
            title: '',
            image: '',
            year: '',
            director: '',
            cast: '',
            description: ''
        }
        console.log(newMovie)
    }else if (media === 'music'){
        const newMusic = {
            artist_name: '',
            album_name: '',
            image: '',
            year: '',
            description: ''
        }
        console.log(newMusic)
    }else if(media === 'books'){
        const newBook = {
            title: '',
            author: '',
            image: '',
            description: ''
        }
        console.log(newBook)
    }

}

    

    return{
        currentUser,
        setCurrentUser,
        selectedGroup,
        setSelectedGroup,
        newComment,
        setNewComment,
        mediaSearch,
        setMediaSearch,
        handleCommentContentChange,
        handleCommentStarChange,
        handleCommentSubmit,
        handleAddMyMedia,
        handleMediaSearch,
        handleMediaSearchSubmit
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