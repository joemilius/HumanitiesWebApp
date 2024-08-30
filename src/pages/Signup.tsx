import React, { useState, useContext} from 'react'
import { StateContext } from '../context'
import * as yup from 'yup'
import {useFormik} from 'formik'
import { postRequest } from '../requests'
import { useNavigate } from 'react-router-dom'


function Signup(){
    const {setCurrentUser} = useContext(StateContext)
    const [errors, setErrors] = useState(false)
    const navigate = useNavigate()
    // const [signupData, setSignupData] = useState({
    //     username: '',
    //     email: '',
    //     first_name: '',
    //     last_name: ''
    // })
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
            handleSubmit(values)
            resetForm()
        }
    })
    // function handleSignupChange(e: React.SyntheticEvent<HTMLInputElement>){
    //     setSignupData({
    //         ...signupData, [e.currentTarget.name]: e.currentTarget.value
    //     })
    // }
    function handleSubmit(values: object){
        console.log("submitted")
        console.log(values)
        postRequest('api/signup', values)
        .then(data => { 
            if(data instanceof Error){
                console.log(data.message)
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
        <form onSubmit={formik.handleSubmit}>
            <input type='text' name='first_name' onChange={formik.handleChange} placeholder='Enter first name here'></input>
            <input type='text' name='last_name' onChange={formik.handleChange} placeholder='Enter last name here'></input>
            <input type='text' name='email' onChange={formik.handleChange} placeholder='Enter email here'></input>
            <input type='text' name='username' onChange={formik.handleChange} placeholder='Enter username here'></input>
            <input type='password' name='password' onChange={formik.handleChange} placeholder='Enter password here'></input>
            <input type='submit'></input>
            {errors ? <p>The information provided was inocrrect</p>: null}
        </form>
        </>
    )
}

export default Signup