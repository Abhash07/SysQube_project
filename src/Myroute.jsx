import React from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
import Home from './Home';

const Myroute = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Myroute