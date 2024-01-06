import './App.css';
import { Home } from './components/home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./components/navbar/user/Login";
import { Signup } from "./components/navbar/user/Signup";
import { Laptop } from './components/laptops/Laptop';
import { Accessories } from './components/accesories/Accessories';
import { Desktop } from './components/desktop/Desktop';
import { Laptopdetail } from './components/laptops/Laptopdetail';
import { Accessoriesdetail } from './components/accesories/Accessoriesdetail';
import { Desktopdetail } from './components/desktop/Desktopdetail';
import { Managelaptop } from './components/admin/Managelaptop';
import { Manageuser } from './components/admin/Manageuser';
import { Manageaccessories } from './components/admin/Manageaccessories';
import { Managedesktop } from './components/admin/Managedesktop';
import { Cart } from './components/navbar/Cart';
import { Animation } from './components/animation/Animation';
import { Profile } from './Profile';
import { useEffect, useState } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Order } from './components/admin/Order';
import { Aboutus } from './components/home/Aboutus';
import Searchresult from './components/navbar/Searchresult';

function App() {

  const [user, setUser] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState("false");
  useEffect(() => {
    const checkUser = () => {
      if(window.localStorage.getItem("user"))
      {
        setUser(window.localStorage.getItem("user"))
      }
    }
    const checkisDarkTheme = () => {
      if(window.localStorage.getItem("isDarkTheme"))
      {
        setIsDarkTheme(window.localStorage.getItem("isDarkTheme"))
      }
    }
    checkisDarkTheme()
    checkUser();
  }, [])

  useEffect(() => {
    const toggleisDarkTheme = () => {
      document.body.className = isDarkTheme ? "light-theme" : "dark-theme";
    }
    toggleisDarkTheme()
  },[isDarkTheme])
  return (
    <>
      <div className='app'>
      <Router>
          <Navbar user={user} setUser={setUser}  />
     <div className='body'>
     <Routes>
        <Route path='/' element={<Home isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path='/laptop' element={<Laptop/>} />
        <Route path='/accessories' element={<Accessories/>} />
        <Route path='/desktop' element={<Desktop/>} />
        <Route path= '/laptopdetail' element={<Laptopdetail user={user} />} />
        <Route path='/accessoriesdetail' element={<Accessoriesdetail user={user}/>}/>
        <Route path='/desktopdetail' element={<Desktopdetail user={user}/>}/>
        <Route path='/managelaptop' element={<Managelaptop/>}/>
        <Route path='/manageuser' element={<Manageuser/>}/>
        <Route path='/manageaccessories' element={<Manageaccessories/>}/>
        <Route path='/managedesktop' element={<Managedesktop/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/animation' element={<Animation/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/searchresult' element={<Searchresult />} />
        <Route path="/laptop/:id" element={<Laptopdetail />} />
        <Route path="/accessories/:id" element={<Accessoriesdetail user={user} />} />
        <Route path="/desktop/:id" element={<Desktopdetail user={user} />} />
     </Routes>
     </div>
      </Router>
      </div> 
    </>
  );
}

export default App;