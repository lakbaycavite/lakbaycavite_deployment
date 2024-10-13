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
import PostDisplay from './admin/pages/PostDisplay'
import Users from './admin/pages/Users'
import EventDisplay from './admin/pages/EventDisplay'

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

          <Route path='/admin/event' exact element={<Events />} />
          <Route path='/event/display/:id' exact element={<EventDisplay />} />
          <Route path='/admin/post' exact element={<Posts />} />
          <Route path='/post/display/:id' exact element={<PostDisplay />} />

          <Route path='/admin/user' exact element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
