import { useState } from 'react'
import './App.css'
import Create from './components/create'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Read from './components/read'
import Update from './components/update'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Create />} />
        <Route path='/create' element={<Create />} />
        <Route path="*" element={<p>Page Not Found</p>} />
        <Route path='/read' element={<Read />} />
        <Route path='/update' element={<Update />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
