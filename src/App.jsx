import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'

function App() {


  return (
    <>
      <div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
        
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/about' element= {<About/>}/>
          <Route path='/contact' element= {<Contact/>}/>
        </Routes>

      </div>
    </>
  )
}

export default App
