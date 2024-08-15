import React, {useState} from 'react'
import { StateContext } from '../context'

function Login(){
    const {currentUser, setCurrentUser} = React.useContext(StateContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleChange(e: React.SyntheticEvent<HTMLInputElement>){
        if(e.currentTarget.name === 'username'){
            setUsername(e.currentTarget.value)
        }else{
            setPassword(e.currentTarget.value)
        }
    }
    console.log(username)
    console.log(password)

    function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>){
        e.preventDefault()
        setCurrentUser(currentUser)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input name='username' type='text' value={username} placeholder='Enter username here' onChange={handleChange}/>
            <input name='password' type='text' value={password} placeholder='Enter password here' onChange={handleChange}/>
            <button type='submit'>Login</button>
        </form>
    )
}

export default Login