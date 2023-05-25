import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'animate.css'

import Header from './components/header'


function App() {
  return (
    <div className="App">
      <div>
          <h1 className="animate__animated animate__bounceInDown animate__delay-0.4s welcome">
            <i>Welcome to my tiny island on the internet!</i>
          </h1>
          <Header />
      </div>
    </div>
  )
}

export default App
