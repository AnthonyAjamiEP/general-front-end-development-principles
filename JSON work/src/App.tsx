import React from 'react'

import Home from './pages/Home'
import Post from './pages/Post'

import { Route, Routes, Link } from 'react-router-dom'

const App = () => {
  return (<>
    <div id="nav">
      <Link to='/'>Home</Link>
      <Link to='/post'>Posts</Link>
    </div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/post' element={<Post />} />
    </Routes>
  </>)
}

export default App