import React, {useState, useContext} from 'react'
import { StateContext } from '../context'


function Signup(){
    const {currentUser, setCurrentUser} = useContext(StateContext)
    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        first_name: '',
        last_name: ''
    })

    function handleSignupChange(e: React.SyntheticEvent<HTMLInputElement>){
        setSignupData({
            ...signupData, [e.currentTarget.name]: e.currentTarget.value
        })
    }


    return(
        <>
        <form>
            <input type='text' name='first_name' onChange={handleSignupChange} placeholder='Enter first name here'></input>
            <input type='text' name='last_name' onChange={handleSignupChange} placeholder='Enter last name here'></input>
            <input type='text' name='email' onChange={handleSignupChange} placeholder='Enter email here'></input>
            <input type='text' name='username' onChange={handleSignupChange} placeholder='Enter username here'></input>
            <input type='submit'></input>
        </form>
        </>
    )
}

export default Signup