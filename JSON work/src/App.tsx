import React, { createContext } from 'react'
import { Routes, Route, Link } from "react-router-dom"

import Home from "./pages/Home"
import PostsPage from './pages/PostsPage'
import MessagesPage from './pages/MessagesPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { AuthContext } from './contexts'
import AuthProvider from './contexts/Auth'

const App = () => {
  return (<AuthProvider>
    <div id="nav">
      <Link to='/'>Home</Link>
      <Link to='/post'>Posts</Link>
      <Link to='/message'>Messages</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>

    </div>
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<PostsPage />} />
        <Route path="/message" element={<MessagesPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

      </Routes>
    </div>
  </AuthProvider>)
}

export default App