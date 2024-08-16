import React, {useState} from 'react'
import { StateContext } from '../context'


function Login(){
    const {currentUser, setCurrentUser} = React.useContext(StateContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    console.log(currentUser)
    function handleChange(e: React.SyntheticEvent<HTMLInputElement>){
        if(e.currentTarget.name === 'username'){
            setUsername(e.currentTarget.value)
        }else{
            setPassword(e.currentTarget.value)
        }
    }
    console.log(typeof username)
    console.log(typeof password)

    function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>){
        e.preventDefault()
        fetch('/api/login',{
            method:'POST',
            headers:{
                "Content-Type": 'application/json'
            },
            body:JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(res => {
            if (res.status === 200){
                res.json().then(user => setCurrentUser(user))
            }else{
                res.json().catch(error => console.log(error))
            }
        })
        // setCurrentUser({
        //     id:1,
        //     first_name: "Bugs",
        //     last_name: "Bunny",
        //     username: 'bugsy',
        //     logins: 1,
        //     email: 'bugs@gmail.com',
        //     password: '1234'

        // })
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