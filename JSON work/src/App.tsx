import React from 'react'
import { Routes, Route, Link } from "react-router-dom"

import Home from "./pages/Home"
import Post from './pages/Post'
import RegisterPage from './pages/RegisterPage'

const App = () => {
  return (<>
    <div id="nav">
      <Link to='/'>Home</Link>
      <Link to='/post'>Posts</Link>
      <Link to="/register">Register</Link>
    </div>
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  </>)
}

export default App