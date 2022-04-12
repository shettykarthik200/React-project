//import logo from './logo.svg';
import './App.css';
import Login from './Component/Login';
//import FirstComponent from './Component/Firstcomponent';
//import Fetchdata from './Component/Fetchdata';
import './Component/Fetchdata/index.css'
import Navbar from './Component/Navbar';
//import Home from './Component/Home';
//import Contactus from './Component/Contactus';
//import FirstComponent from './Component/Firstcomponent';
import {Routes,Route} from 'react-router-dom';
import Pagenotfound from './Component/Pagenotfound';
import Users from './Component/Users';

import React from 'react';




function App() {
  return (
    
    
    <div >
    
    
      <Navbar /> 
      <Routes>
        <Route path='/' element={<Users/>}/>
        <Route path='/addusers' element={<Login />} />
        <Route path='*' element={<Pagenotfound/>}/>
  </Routes>
  
           
      
    </div>
  );
}

export default App;
