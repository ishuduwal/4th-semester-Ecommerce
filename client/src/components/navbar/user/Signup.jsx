import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Register } from '../../../function/User';

export const Signup = () => {

  const navigate = useNavigate();
  const[ user, setUser ] = useState({
    name:"",
    email:"",
    password:""
  })
  const [response,setResponse] = useState(null)
  const handleChange = e => {
    const { name, value } =e.target
    setUser({
      ...user,
      [name]: value

    })
  }

  const SignupHandler = async (e)=>{
    e.preventDefault();
    const res =  await Register(user);
    setResponse(res.message);
    if (res.message == "User already Registered" || res.message == "Sucessfully Registered"){
    navigate('/')
    }
  }
  
  return (
    <>
        <div className='signin flex justify-center items-center'>
        <form className='h-70'>
            <h1 className='text-2xl font-bold'>Signup</h1>
            <div className='flex flex-col inputBox'>
              <input type='text' name="name" value={user.name} required='required' onChange={ handleChange }/>
              <label>Username</label>
            </div>
            <div className='flex flex-col inputBox'>
              <input type='text' name="email" value={user.email} required='required' onChange={ handleChange }/>
              <label>Email</label>
            </div>
            <div className='flex flex-col inputBox'>
              <input type='password' name="password" value={user.password} required='required' onChange={ handleChange }/>
              <label>Password</label>
            </div>
            <div className='justify-center flex items-center'>
              <button className='login-btn' onClick={(e)=> SignupHandler(e) }>Sign up</button>
            </div>
            <div>
              <p>Already have an account.<Link to="/login" className='link-tag'>Signin</Link></p>
            </div>
        </form>
    </div>
    </>
  )
}
