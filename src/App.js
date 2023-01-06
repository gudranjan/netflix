
import './App.css';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'

import React from 'react' 

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='movies/:id' element={<Movies/>}/>
<





    </Routes>
    
    
    
    
    
    
    </BrowserRouter>
    
    
    
    </>
  )
}

export default App


