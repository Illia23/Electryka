import About from '../About/About'
import Home from '../Home/Home'
import Services from '../Services/Services'
import Contact from '../Contact/Contact'
import css from './App.module.css'
import { Routes, Route } from "react-router-dom";
import Header from '../Header/Header'
function App() {

  return (
    <div className={css.container}>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
