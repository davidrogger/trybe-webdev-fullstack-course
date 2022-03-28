import React from 'react';
import './App.css';

function App({ isFetching, src, fetchDog }) {
  return (
    isFetching ? <p>Loading...</p>
    : (
      <div style={ { width: 500 } }>
        <button 
          style={ {display: 'block'} }
          onClick={ fetchDog }
          type="button"
        >
          Novo Doguinho
        </button>
        <img style={ { width: '100%' } } src={ src } alt="dog" />
      </div>
    )
  );
}

export default App;
