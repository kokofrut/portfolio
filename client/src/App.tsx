import './App.scss'
import Hello from './components/Hello'
import Header from './components/Header'
import About from './components/About'
import Tech from './components/Tech'
import Projects from './components/Projects'
function App() {

  return (
    <div className="app-wrapper" >
      <Header />
      <Hello />
      <About />
      <Tech />
      <Projects />
    </div>
  )
}

export default App
