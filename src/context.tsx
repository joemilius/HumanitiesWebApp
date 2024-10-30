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
    const [mediaSearchType, setMediaSearchType] = useState('movie')
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

const handleMediaSearch = (e: React.SyntheticEvent<HTMLInputElement>, ) => {
    setMediaSearch({...mediaSearch, [`${mediaSearchType}-search`]: e.currentTarget.value})

}

const handleMediaSearchType = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    setMediaSearchType(e.currentTarget.value)
}

const handleMediaSearchSubmit = () => {

    if (mediaSearchType === 'movie'){
        const newMovie = {
            title: '',
            image: '',
            year: '',
            director: '',
            cast: '',
            description: ''
        }
        const movieAPI = import.meta.env.VITE_APP_TMDB_API_KEY
        fetch(`https://api.themoviedb.org/3/search/movie?query=${mediaSearch['movie-search']}&api_key=${movieAPI}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            newMovie.title = data.title 
            newMovie.description = data.overview 
            newMovie.year = data.release_date 
            newMovie.image = data.poster_path 
        })
        console.log(newMovie)
    }else if (mediaSearchType === 'music'){
        const newMusic = {
            artist_name: '',
            album_name: '',
            image: '',
            year: '',
            description: ''
        }
        console.log(newMusic)
    }else if(mediaSearchType === 'book'){
        const newBook = {
            title: '',
            author: '',
            image: '',
            description: ''
        }
        const bookAPI = import.meta.env.VITE_APP_GOOGLE_BOOKS_API_KEY
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${mediaSearch}&key=${bookAPI}`)
        .then(resp => resp.json())
        .then(data => console.log(data))
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
        mediaSearchType,
        handleCommentContentChange,
        handleCommentStarChange,
        handleCommentSubmit,
        handleAddMyMedia,
        handleMediaSearch,
        handleMediaSearchType,
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