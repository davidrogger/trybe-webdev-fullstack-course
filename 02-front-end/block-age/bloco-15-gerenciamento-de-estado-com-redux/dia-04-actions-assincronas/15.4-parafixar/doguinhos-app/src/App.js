import React from 'react';
import './App.css';

import { connect } from 'react-redux'
import { fetchDog } from './store/actions';

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
          { !src ? 'Buscar Doguinho' : 'Buscar Outro Doguinho' }
        </button>
        { src ? (
          <img style={ { width: '100%' } } src={ src } alt="dog" />
        ) : <p>Busque um doguinho</p>}
      </div>
    )
  );
}

const mapStateToProps = (state) => ({
  src: state.reducer.imagePath,
  isFetching: state.reducer.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDog: () => dispatch(fetchDog())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
