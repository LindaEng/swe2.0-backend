import React from 'react';


function App() {

  return (
    <div className='layout'>
      <h1>Count provider</h1>
      <h2>The count is: addCountHere!</h2>
      <button
        className='btn btn-primary'
      >
        count++
      </button>
      <button
        className='btn btn-primary'
      >
        count--
      </button>
    </div>
  );
}

export { App };
