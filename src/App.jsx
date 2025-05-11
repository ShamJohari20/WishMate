import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Protected from './pages/Protected'
import AddBirthday from './pages/AddBirthday'




function App() {
  return (

    <>
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path='/AddBirthday' element={<Protected Component={AddBirthday} />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    </>
  )
}

export default App