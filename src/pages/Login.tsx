import {useState} from 'react'

function Login(){
    const [currentUser, setCurrentUser] = useState({})
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleChange(e: React.SyntheticEvent<HTMLInputElement>){
        if(e.currentTarget.name === 'username'){
            setUsername(e.currentTarget.value)
        }else{
            setPassword(e.currentTarget.value)
        }
    }

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