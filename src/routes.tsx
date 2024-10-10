import App from "./App";
import Groups from "./pages/Groups";
import Home from "./pages/Home";
import Login from "./pages/Login";
import OneGroup from "./pages/OneGroup";
import Signup from "./pages/Signup";
import Movies from "./pages/Movies"
import Music from "./pages/Music";
import Books from "./pages/Books";
import MovieSearch from "./pages/MovieSearch";
import MusicSearch from "./pages/MusicSearch";
import BookSearch from "./pages/BookSearch";

const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: 'login',
                element: <Login />
            }
        ]
    },
    {
        path:'/signup',
        element: <Signup />
    },
    {
        path:'/home',
        element: <Home />
    },
    {
        path:'/groups',
        element: <Groups />
    },
    {
        path:'/groups/:id',
        element: <OneGroup />
    },
    {
        path: '/groups/:id/movies',
        element: <Movies />
    },
    {
        path: '/groups/:id/music',
        element: <Music />
    },
    {
        path: '/groups/:id/books',
        element: <Books />
    },
    {
        path: '/search-movies',
        element: <MovieSearch />
    },
    {
        path: '/search-music',
        element: <MusicSearch />
    },
    {
        path: '/search-books',
        element: <BookSearch />
    }
]

export default routes