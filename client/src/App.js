import React from 'react'
import './App.css'
import { Routes, Route  } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import Signup from './components/Signup'
import Signin from './components/Signin'
import About from './components/About'
import Logout from './components/Logout';
import Errorpage from './components/Errorpage';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />    
    <Route path='/contact'   element={<Contact />}/>
    <Route path='/signup' element={<Signup />}/>
    <Route path='/signin' element={<Signin />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/logout' element={<Logout />}/>
    <Route path='*'  element={<Errorpage />}/>    
    </Routes>
    </>
  )
}

export default App