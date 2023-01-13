import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home, Add } from './routes';
import { Hats } from './components';

function App() {
  const [hats, setHats] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/hats')
      .then(res => res.json())
      .then(data => setHats(data));
  }, []);

  return (
    <div className='mt-4 mx-auto h-75 w-75'>
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link> | <Link to="/add">Add a Hat</Link>
        </div>
        <Routes>
          <Route path='/' element={<Hats hats={hats}/>} />
          <Route path='/add' element={<Add hats={hats} setHats={setHats}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export { App };
