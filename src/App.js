import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home';
import Banner from './Components/Banner';
import ThirdComponent from './Components/ThirdComponent';
import Mission from './Components/Mission';
import FourthComponent from './Components/FourthComponent';
import WhyZen from './Components/WhyZen';
import Api from './Components/Api';
import WhatPeopleSays from './Components/WhatPeopleSays';
import Insights from './Components/Insights';
import Footer from './Components/Footer';
import Testing from './Components/Testing';
import Sorting from './Components/Sorting';
import UserDetails from './Components/UserDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './Components/Hero';
import { useState } from 'react';
import Counter from './Components/Counter';

function App() {
  const [userData, setUserData] = useState({})
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
          <Routes >
            <Route path='/' element={<Hero/>}></Route>
            <Route path='/list' element={<Testing setUserData={setUserData}/>}></Route>
            <Route path='/userDetails' element={ <UserDetails userData={userData}/>}></Route>
            <Route path='/counter' element={<Counter/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
