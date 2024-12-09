import Header from '../Header/Header'
import Main from '../Main/Main'
import About from '../About/About'
import css from './App.module.css'
function App() {

  return (
    <div className={css.container}>
      <Header />
      <Main />
      <About/>
    </div>
  )
}

export default App
