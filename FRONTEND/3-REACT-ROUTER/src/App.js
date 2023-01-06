import React from 'react';
import Home from './routes/Home'
import Blog from './routes/Blog'
import About from './routes/About'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

/*
  make sure to install the latest version of react-router-dom
  npm install react-router-dom@6
*/

function App() {
  return (
    <div className='mt-4 mx-auto h-75 w-75'>
      <p>this is where we will create the routes</p>
       <BrowserRouter>
         <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/about' element={<About/>} />
           <Route path='/blog' element={<Blog/>} /> 
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export { App };
