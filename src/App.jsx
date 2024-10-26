import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageGrid from './component/ImageGrid'
import ImageDetail from './component/ImageDetail'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ImageGrid />} />
          <Route path="/:id/" element={<ImageDetail />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
