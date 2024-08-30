import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const routes = [
    {
        path: '/',
        element: <App/>
    },
    {
        path:'/login',
        element: <Login/>
    },
    {
        path:'/signup',
        element: <Signup />
    },
    {
        path:'/home',
        element: <Home />
    }
]

export default routes