import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PlayerPage from './pages/PlayerPage'

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/player/:id" element={<PlayerPage />} />
  </Routes>
)

export default App