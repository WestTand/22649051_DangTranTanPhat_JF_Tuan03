import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Capture from './assets/Capture.PNG'
import icon from './assets/icon.jpg'
import avatar from './assets/avatar.jpg'
import './App.css'
import Header from './Compoments/Header'
import Bai02 from './Compoments/Bai2/Bai02.jsx'

function App() {
  

  return (
    <>
        <div className="container">
            <Header />
        </div>
        <div>
          <h1>Bai 02</h1>
          <Bai02/>
        </div>
    </>
  )
}

export default App
