import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact/:title' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
