import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import AuthContext from './AuthContext'
import Home from './Home'
import Activities from './Activities'
import Profile from './Profile'


function App() {
  const [jwt,setJwt] = useState('');

  return (
    <>
      <AuthContext.Provider value={jwt}>
        <BrowserRouter>
          <nav>
            <Link to="/">Home</Link>{' '}
            <Link to="/profile">Profile</Link>{' '}
            <Link to="/activities">Activities</Link>{' '}
          </nav>
          <Routes>
            <Route path="/" element={<Home setJwt={setJwt} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/activites" element={<Activities />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  )
}

export default App