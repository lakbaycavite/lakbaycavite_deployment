import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Navbar from './shared/components/Navbar'
import Home from './user/pages/Home'
import Login from './user/pages/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-body'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* redirection */}
          <Route path="/" element={<Navigate to="/home" />} />

          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
