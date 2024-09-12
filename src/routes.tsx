import App from "./App";
import Groups from "./pages/Groups";
import Home from "./pages/Home";
import Login from "./pages/Login";
import OneGroup from "./pages/OneGroup";
import Signup from "./pages/Signup";
import Movies from "./pages/Movies"

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
    }
]

export default routes