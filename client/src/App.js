import './App.css';
import { Header } from './components/navbar/Header';
import { Home } from './components/home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./components/navbar/user/Login";
import { Signup } from "./components/navbar/user/Signup";
import { Laptop } from './components/laptops/Laptop';
import { Accessories } from './components/accesories/Accessories';
import { Custompc } from './components/custompc/Custompc';
import { Laptopdetail } from './components/laptops/Laptopdetail';
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
        <Route path='/custompc' element={<Custompc/>} />
        <Route path= '/laptopdetail' element={<Laptopdetail/>} />
     </Routes>
     </div>
      </Router>
      </div> 
    </>
  );
}

export default App;
