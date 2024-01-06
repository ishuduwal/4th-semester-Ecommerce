import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Register } from '../../../function/User';
import { Animation } from '../../animation/Animation';

export const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [response, setResponse] = useState(null);
  const [isPreload, setIsPreload] = useState(false);
  
  const isUserSignedUp = () => {
    return !!window.localStorage.getItem('user');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Username validation
    if (!user.name.trim()) {
      newErrors.name = 'Username is required';
      valid = false;
    }

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

  const SignupHandler = async (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (!isValid) {
      setIsPreload(false); // Set isPreload to false to stop the loading animation
      return;
    }
    setIsPreload(true);
    const res = await Register(user);
    console.log(res); 
    setResponse(res.message);
    if (res.message === 'User already Registered') {
      setIsPreload(false); // Set isPreload to false in case of an error
      return;
    }
  
    if (res.user.name == false) {
      setIsPreload(false); // Set isPreload to false in case of an error
      return;
    }

    if (res.message === 'User already Registered') {
      return;
    }

    if (res.user.name == false) return;
    window.localStorage.setItem("user", res.user.name)
    window.localStorage.setItem("isAdmin", res.user.isAdmin);
    window.localStorage.setItem("userInfo", JSON.stringify(res.user));
    setTimerLogin(res.user.name);

  };

  const setTimerLogin = (username) => {
    setTimeout(() => {
      navigate('/', { state: { user: username } });
      window.location.reload()
    }, 2000)
  }

  return (
    <>
      {isPreload ? (
        <Animation />
      ) : (
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
                {errors.email && <span className='error'>{errors.email}</span>}
            </div>
            <div className='flex inputBox'>
              <input type={show? "text":"password"} name="password" id='password' value={ user.password } required='required' onChange={ handleChange }/>
                <label>Password</label>
                {errors.password && (<span className='error-password'>{errors.password}</span>)}
              <div id='eyeball' onClick={handleShow}>
                {show ? (<i className='fa-regular fa-eye cursor-pointer'></i>):(<i className='fa-regular fa-eye-slash cursor-pointer'></i>)}
              </div>
            </div>
            <div className='justify-center flex items-center'>
              <button className='login-btn' onClick={(e)=> SignupHandler(e) }>Sign up</button>
            </div>
            <div>
              <p>Already have an account.<Link to="/login" className='link-tag'>Signin</Link></p>
            </div>
        </form>
    </div>
      )}
    </>
  )
}
