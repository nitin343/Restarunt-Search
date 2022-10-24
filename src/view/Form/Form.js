import React, { useEffect, useState } from 'react'
import bgImg from '../../assets/Loop.png';
import './Form.scss';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { UserInfo } from '../../React-Redux/action/userInfo/userInfo.action';

export default function SignInForm() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    // const [errorMessage , setErrorMessage] = useState('')
    const [userData,setUserData] =useState();
    const [loginData , setLoginData] = useState([])
    const [loginError , setLoginError] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch();

    useEffect( () => {
      axios.get('https://api.airtable.com/v0/appjWdL7YgpxIxCKA/credenitals?maxRecords=3&view=Grid%20view', { 
            headers: {
                "Authorization": "Bearer keyfXgn8PL6pB3x32"
            }
          })
          .then(response => setUserData(response.data))
          .catch(error => error)    
    },[])

    const onSubmit =  data => {
      setLoginError(true)
     setLoginData([]) 
      userData.records.filter((fields) => {
       if(fields.fields.username === data.username && fields.fields.password === data.password){
           setLoginData(fields) 
           setLoginError(false)
           dispatch(UserInfo(fields))
        }
      })
    }
   
  return (
    <section className="App">
        <div className="register">
            <div className="col-1">
                <h2>Log In</h2>
                <span>Login and enjoy the service</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username", { required : true})} placeholder='username' />
                    <input type="password" {...register("password" , { required : true})} placeholder='password' />
                    {errors.password?.type === "required" && "Password is required"}
                    {errors.username?.type === "required" && "username is required"}
                    {loginData.id && navigate('/') }
                    {loginError ?  <span>Username and password not matching</span> : <span></span>}
                    <button className='btn'>Log In</button>
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}