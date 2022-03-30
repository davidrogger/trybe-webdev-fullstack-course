import { MOVE_CAR } from '../actionCreators';

const INITAL_STATE = {
  
    redCar: false,
    blueCar: false,
    yellowCar: false,
  
}

const moveCarReducer = (state = INITAL_STATE, action) => {
  switch (action.type){
  case MOVE_CAR:
    return {
      ...state,  [action.car]: action.side,
    };
  default:
    return state;
  }
};

export default moveCarReducer;