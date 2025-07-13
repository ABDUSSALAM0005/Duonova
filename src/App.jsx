import React from 'react'
import './styles.css'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Header from './components/Header';
import AppRoutes from './routes';
// import { AnimatePrescence, motion} from "framer-motion"; 
// import Layout from './Layout';




const App = () => {
  return (
    <main className='bg-primary'>
    <nav>
    <Router>
    <Header/>
    <AppRoutes/>
     </Router>
     </nav>
    </main>
  )
}

export default App