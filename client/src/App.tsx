import './App.scss'
import Hello from './components/Hello'
import Header from './components/Header'
import About from './components/About'
import Tech from './components/Tech'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {

  return (
    <div className="app-wrapper" >
      <Header />
      <Hello />
      <About />
      <Tech />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
