import './App.css';
import { Header } from './components/navbar/Header';
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
function App() {
  return (
    <>
      <div className='app'>
      <Router>
      <Header />
     <div className='body'>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path='/laptop' element={<Laptop/>} />
        <Route path='/accessories' element={<Accessories/>} />
        <Route path='/desktop' element={<Desktop/>} />
        <Route path= '/laptopdetail' element={<Laptopdetail/>} />
        <Route path='/accessoriesdetail' element={<Accessoriesdetail/>}/>
        <Route path='/desktopdetail' element={<Desktopdetail/>}/>
        <Route path='/managelaptop' element={<Managelaptop/>}/>
        <Route path='/manageuser' element={<Manageuser/>}/>
        <Route path='/manageaccessories' element={<Manageaccessories/>}/>
     </Routes>
     </div>
      </Router>
      </div> 
    </>
  );
}

export default App;