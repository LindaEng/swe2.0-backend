import React, {useContext} from 'react';
import { CountContext } from './CountProvider.js'
import Greeting from './Greeting'

function App() {
  let { count, increment, decrement } = useContext(CountContext)

  return (
    <div className='layout'>
      <h1>Count provider</h1>
      <h2>The count is: addCountHere! {count}</h2>
      <button
        onClick={increment}
        className='btn btn-primary'
      >
        count++
      </button>

      <button
        onClick={decrement}
        className='btn btn-primary'
      >
        count--
      </button>
      
      <Greeting />
    </div>
  );
}

export { App };
