import React, {useState, useContext} from 'react'
import { StateContext } from '../context'
import { postRequest } from '../requests'


function Login(){
    const { setCurrentUser, errors, setErrors } = useContext(StateContext)
    const [ loginObj, setLoginObj ] = useState({
        username: '',
        password: ''
    })
    
    function handleChange(e: React.SyntheticEvent<HTMLInputElement>){
        setLoginObj({...loginObj, [e.currentTarget.name]: e.currentTarget.value})
    }
    
    function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>){
        e.preventDefault()
        
        postRequest('/api/login', loginObj)
        .then(data => {
            if(data instanceof Error){
                setErrors(true)
            }else{
                setCurrentUser(data)
                setErrors(false)
            }
            
        })
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input name='username' type='text' value={loginObj.username} placeholder='Enter username here' onChange={handleChange}/>
            <input name='password' type='text' value={loginObj.password} placeholder='Enter password here' onChange={handleChange}/>
            <button type='submit'>Login</button>
            {errors ? <p>Username or Pasword are incorrect</p> : null}
        </form>
    )
}

export default Login