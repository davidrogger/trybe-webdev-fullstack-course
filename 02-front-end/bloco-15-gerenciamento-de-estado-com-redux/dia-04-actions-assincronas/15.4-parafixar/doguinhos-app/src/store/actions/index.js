import { GET_IMAGE, REQUEST_IMAGE, FAILED_REQUEST } from '../reducers';

const getImage = (json) => ({ type: GET_IMAGE, payload: json.message });

const requestDog = () => ({ type: REQUEST_IMAGE });

const failedRequest = (error) => ({ type: FAILED_REQUEST, payload: error });

export const fetchDog = () => {
  return async (dispatch) => {
    dispatch(requestDog());
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      return  dispatch(getImage(data));
    } catch(error) {
      return dispatch(failedRequest(error));
    }
  };
};

