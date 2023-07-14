import React from 'react';
import { Provider } from 'react-redux';
import { render } from "@testing-library/react";
import { combineReducers, createStore } from "redux";

import moveCarReducer from '../../redux/reducers/carsReducer';
import signalColorReducer from '../../redux/reducers/signalReducer';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ moveCarReducer, signalColorReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={ store }>{component}</Provider>), store,
  }
};

export default renderWithRedux;
