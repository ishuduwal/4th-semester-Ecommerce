import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Login } from '../../../function/User';
import { Animation } from '../../animation/Animation';

export const Signin = () => {
  
  const navigate = useNavigate();
  
  const [isPreload, setIsPreload] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    login:'',
  });
  const [user, setUser] = useState({
    email:"",
    password:""
  })
  const handleChange = e =>{
    const { name, value } = e.target 
    setUser({
      ...user,
      [name]: value
    })
  }
  const LoginHandler = async (e)=>{
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      setIsPreload(false);
      return;
    }
    try {
      setIsPreload(true);
      const res = await Login(user); 
      if (res.name === false) {
        setErrors({ ...errors, login: 'Invalid email or password' });
        setIsPreload(false);
      } else {
        setErrors({ ...errors, login: '' });
         window.localStorage.setItem("user", res.name)
         window.localStorage.setItem("isAdmin", res.isAdmin);
         window.localStorage.setItem("userInfo", JSON.stringify(res));
         setTimerLogin(res.name);
    }
    } catch(error) {
      console.log("Login failed with error:", error);
      setErrors({ ...errors, login: 'Invalid email or password' });
      setIsPreload(false);
    } finally {
      setTimeout(() => {
        setIsPreload(false);
      }, 2000);
    }
  }

  const [show, setShow]=useState(false)
  const handleShow=()=>{
    setShow(!show)
  }

  const setTimerLogin = (username) => {
    setTimeout(() => {
      navigate('/', { state: { user: username } });  
      window.location.reload()
    }, 2000)
    
  }

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Email validation
    if (!user.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    // Password validation
    if (!user.password.trim()) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (user.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      valid = false;
    }

    setErrors(newErrors);
    console.log("Validation Errors:", newErrors);  // Add this line
    console.log("Form Valid?", valid);  // Add this line
    return valid;
  };
  
  return (
    <>
      {isPreload
        ?
        <Animation/>
        :
    <div className='signin flex justify-center items-center'>
    <form>
   
        <h1 className='text-2xl font-bold'>Login</h1>
        <div className='flex flex-col inputBox'>
          <input type='text' name="email" value={ user.email } required='required' onChange={ handleChange }/>
          <label>Email</label>
          {errors.email && <span className='error'>{errors.email}</span>}
        </div>
        <div className='flex inputBox'>
              <input type={show ? "text" : "password"} name="password" id='password' value={user.password} required='required' onChange={handleChange} />
              <label>Password</label>
              {errors.password && (<span className='error-password'>{errors.password}</span>)}
              {errors.login && (<span className='error-login'>{errors.login}</span>)}
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
      }
    </>
  )
}
