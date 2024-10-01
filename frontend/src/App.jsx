import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import NavbarModifier from './shared/components/NavbarModifier'
import Navbar from './shared/components/Navbar'
import Home from './user/pages/Home'
import Login from './user/pages/Login'
import Register from './user/pages/Register'

// admin
import Events from './admin/pages/Events'
import Posts from './admin/pages/Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-body'>
      <BrowserRouter>
      
        <NavbarModifier>
          <Navbar />
        </NavbarModifier>

        <Routes>
          {/* redirection */}
          <Route path="/" element={<Navigate to="/home" />} />

          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path='/admin/event' element={<Events />} />
          <Route path='/admin/post' element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
