import React, {useEffect, useContext, useState} from 'react'
import { StateContext } from './context'
import { getRequest } from './requests'
import NavBar from './components/NavBar'
import './App.css'
import Login from './pages/Login'

function App() {

  const [errors, setErrors] = useState(false)
  const {currentUser, setCurrentUser} = useContext(StateContext)

  useEffect(() => {
    getRequest('api/check-session')
    .then(data => {
      if(data instanceof Error){
        console.log(data.message)
        setErrors(true)
    }else{
        setCurrentUser(data)
        setErrors(false)
    }
    })
  },[setCurrentUser])

  return (
    <>
      <header> 
        <NavBar />
      </header>
      {errors ?
      <>
      <p>Please Sign In</p>
      <Login />
      </>
    :
    <p>Welcome {currentUser?.first_name}</p>}
    </>
  )
}

export default App
