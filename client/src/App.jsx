import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './home'
import Signup from './signup'
import Login from './login'
const App = () => {
  return (
   <>
<BrowserRouter>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
  </Routes>
</BrowserRouter>
   </>
  )
}

export default App