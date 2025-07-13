import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Services from './pages/Services'
import Work from './pages/Work'
// import { AnimatePresence } from 'framer-motion'

const AppRoutes = () => {
  return (

  

    <Routes location={location} key={location.pathname} >

        <Route
        path='/'
        element={<Home />}
        />
        <Route
        path='/Contact'
        element={<Contact />}
        />
        <Route
        path='/Resume'
        element={<Resume />}
        />
        <Route
        path='/Services'
        element={<Services />}
        />
        <Route
        path='/Work'
        element={<Work />}
        />

    </Routes>

  
  )
}

export default AppRoutes