import React, { createContext } from 'react'
import { Routes, Route, Link } from "react-router-dom"

import Home from "./pages/Home"
import PostsPage from './pages/PostsPage'
import MessagesPage from './pages/MessagesPage'
import MessagesDeletePage from './pages/MessagesDeletePage'
import MessagesEditPage from './pages/MessagesEditPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Default from './layouts/Default'
import Auth from './layouts/Auth'

const App = () => {
  return (<>
    <Routes>
      <Route path="/" element={<Default><Home /></Default>} />
      <Route path="/posts" element={<Default><PostsPage /></Default>} />
      <Route path="/messages" element={<Default><MessagesPage /></Default>} />
      <Route path="/messages/:messageId/delete" element={<Default><MessagesDeletePage /></Default>} />
      <Route path="/messages/:messageId/edit" element={<Default><MessagesEditPage /></Default>} />
      <Route path="/register" element={<Auth><RegisterPage /></Auth>} />
      <Route path="/login" element={<Auth><LoginPage /></Auth>} />
    </Routes>
  </>)
}

export default App