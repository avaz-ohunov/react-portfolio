import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import Contacts from './pages/Contacts'

import ScrollToTop from './utils/scrollToTop'

import './styles/main.css'


export default function App() {
  return (
    <>
        <Router>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/projects' element={ <Projects /> } />
                <Route path='/project/:id' element={ <ProjectDetails /> } />
                <Route path='/contacts' element={ <Contacts /> } />
            </Routes>
            <Footer />
        </Router>
    </>
  )
}
