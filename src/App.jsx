import { useState } from 'react'
import Home from './components/Home'
import { Link, Route,Routes } from 'react-router-dom'
import ImageDetail from './components/ImageDetail'


function App() {
  

  return (
    <>
    <div className="main">
     <Link to='/'><h1>Get Image </h1></Link>
    </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<ImageDetail/>}/>        
      </Routes>
    </>
  )
}

export default App
