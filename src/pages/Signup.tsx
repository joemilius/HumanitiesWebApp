import React, {useState, useContext} from 'react'
import { StateContext } from '../context'
import * as yup from 'yup'
import {useFormik} from 'formik'


function Signup(){
    const {currentUser, setCurrentUser} = useContext(StateContext)
    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        first_name: '',
        last_name: ''
    })
    const signupConfig = {
        initialValue: {
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        password: ''
        },

        fields: [
            {
                label: 'Username',
                name: 'username',
                type: 'text'
            },
            {
                label: 'Email',
                name: 'email',
                type: 'text'
            },
            {
                label: 'First Name',
                name: 'first_name',
                type: 'text'
            },
            {
                label: 'Last Name',
                name: 'last_name',
                type: 'text'
            },
            {
                label: 'Password',
                name: 'password',
                type: 'text'
            },
        ],
        formSchema: yup.object().shape({
            username: yup.string().required('*required'),
            email: yup.string().required('*required'),
            first_name: yup.string().required('*required'),
            last_name: yup.string().required('*required'),
            password: yup.string().required('*required')
        })
        
    }

    const formik = useFormik({
        initialValues: signupConfig.initialValue,
        validationSchema: signupConfig.formSchema,
        onSubmit: (values, {resetForm}) => {
            
        }
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