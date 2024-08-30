import React, {useState, useContext} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { StateContext } from '../context'
import { postRequest } from '../requests'
import NavBar from '../components/NavBar'


function Login(){
    const { setCurrentUser } = useContext(StateContext)
    const [errors, setErrors] = useState(false)
    const [ loginObj, setLoginObj ] = useState({
        username: '',
        password: ''
    })

    const navigate = useNavigate()
    
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
                navigate('/home')
            }
            
        })
    }
    
    return(
        <>
            <header> 
                <NavBar />
            </header>
            <form onSubmit={handleSubmit}>
                <input name='username' type='text' value={loginObj.username} placeholder='Enter username here' onChange={handleChange}/>
                <input name='password' type='text' value={loginObj.password} placeholder='Enter password here' onChange={handleChange}/>
                <button type='submit'>Login</button>
                {errors ? <p>Username or Pasword are incorrect</p> : null}
            </form>
            <p>Not a member? You can 
                <NavLink to='/signup'>Signup</NavLink>
                here.</p>
        </>
    )
}

export default Login