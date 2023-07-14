import { CHANGE_SIGNAL } from '../actionCreators';

const INTIAL_STATE = {
  payload: 'red',
}

const signalColorReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
  case CHANGE_SIGNAL:
    return {
      ...state, payload: action.payload,
    };
  default:
      return state;
  }
}

export default signalColorReducer;