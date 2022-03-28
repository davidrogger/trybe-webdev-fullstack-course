export const GET_IMAGE = 'GET_IMAGE';
export const REQUEST_IMAGE = 'REQUEST_IMAGE';
export const FAILED_REQUEST = 'FAILED_REQUEST';

const firstImage = 'https://images.dog.ceo/breeds/terrier-cairn/n02096177_342.jpg';

const INITIAL_STATE = {
  isFetching: false,
  imagePath: firstImage,
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
        imagePath: action.payload,
        isFetching: false,
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
