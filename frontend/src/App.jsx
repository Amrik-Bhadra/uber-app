import React from 'react'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import {Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/userlogin' element={<UserLogin/>} />
        <Route path='/usersignup' element={<UserSignup/>} />
        <Route path='/captainlogin' element={<CaptainLogin/>} />
        <Route path='/captainsignup' element={<CaptainSignup/>} />
      </Routes>
    </div>
  )
}

export default App