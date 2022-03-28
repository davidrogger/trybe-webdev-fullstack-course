export const GET_IMAGE = 'GET_IMAGE';
export const REQUEST_IMAGE = 'REQUEST_IMAGE';
export const FAILED_REQUEST = 'FAILED_REQUEST';

const INITIAL_STATE = {
  isFetching: false,
  imagePath: '',
  error: '',
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_IMAGE:
      return {
        ...state,
        isFetching: true,
      };
    case GET_IMAGE:
      return {
        ...state,
        isFetching: false,
        imagePath: action.payload,
      };
    case FAILED_REQUEST:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    default:
      return state;
  }
}
