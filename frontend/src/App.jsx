import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
          <Route path='/home' element={<Home />} />
        </Routes>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
