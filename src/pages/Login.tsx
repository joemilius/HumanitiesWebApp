import {useState} from 'react'

function Login(){
    const [currentUser, setCurrentUser] = useState({})

    function handleSubmit(e){
        e.preventDefault()
        setCurrentUser(currentUser)
    }

    return(
        <form onSubmit={handleSubmit}>

        </form>
    )
}

export default Login