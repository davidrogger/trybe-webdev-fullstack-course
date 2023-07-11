import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={ store }> {component}</Provider>), store,
  }
}

describe('Elements need in the aplication', () => {
  // beforeEach(cleanup);
  it('Should have a button "clique aqui" and a counter with value 0', () => {
    renderWithRedux(<App />);
    const clickBtn = screen.getByRole('button', { name: 'Clique aqui' });
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(clickBtn).toBeInTheDocument();
  });
  it('Should increment the value of clicks, after clicking it', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } } });
    const clickBtn = screen.getByRole('button', { name: 'Clique aqui' });
    expect(screen.getByText('5')).toBeInTheDocument();
    userEvent.click(clickBtn);
    expect(screen.getByText('6')).toBeInTheDocument();
  })
})