import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Login } from '../../../function/User';

export const Signin = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [ user, setUser] = useState({
    email:"",
    password:""
  })
  const [response,setResponse] = useState(null)
  const handleChange = e =>{
    const { name, value } = e.target 
    setUser({
      ...user,
      [name]: value
    })
  }
  const LoginHandler = async (e)=>{
    e.preventDefault();
    const res =  await Login(user);
    setIsLogin(res);
    if (res == false) return;
    window.localStorage.setItem("user",res)
    navigate('/');
    console.log(res)
  }

  const [show, setShow]=useState(false)
  const handleShow=()=>{
    setShow(!show)
  }
  return (
    <>
    <div className='signin flex justify-center items-center'>
        <form>
        {console.log("User", user)}
            <h1 className='text-2xl font-bold'>Login</h1>
            <div className='flex flex-col inputBox'>
              <input type='text' name="email" value={ user.email } required='required' onChange={ handleChange }/>
              <label>Email</label>
            </div>
            <div className='flex inputBox'>
              <input type={show? "text":"password"} name="password" id='password' value={ user.password } required='required' onChange={ handleChange }/>
              <label>Password</label>
              <div id='eyeball' onClick={handleShow}>
                {show ? (<i className='fa-regular fa-eye cursor-pointer'></i>):(<i className='fa-regular fa-eye-slash cursor-pointer'></i>)}
              </div>
            </div>
            <div className='justify-center flex items-center'>
              <button type='submit' className='login-btn' onClick={(e)=> LoginHandler(e) }>Login</button>
            </div>
            <div>
              <p>Don't Have An Account?<Link to="/signup" className='link-tag'>Signup</Link></p>
            </div>
        </form>
    </div>
    </>
  )
}
