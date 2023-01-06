import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Routes = () => {
    return (
        <div>
        <BrowserRouter>
         <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/about' element={<About/>} />
           <Route path='/blog' element={<Blog/>} /> 
         </Routes>
       </BrowserRouter>
        </div>
    )
}

export default Routes
