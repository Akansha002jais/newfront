import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Banner from './Component/Banner'
import Registration from './Component/Registration'
import Footer from './Component/Footer'
import {Route,Routes} from "react-router-dom";
import Abouts from './About/Abouts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/ about" element={ <Abouts/>}/>
        <Route path='/'element={<Register/>}/>
      </Routes>
    </>
  )
}
export default App
