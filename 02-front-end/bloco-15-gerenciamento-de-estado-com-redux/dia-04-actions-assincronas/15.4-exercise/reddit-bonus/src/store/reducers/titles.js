import { REQUEST_API, GET_API_RESPONSE } from "../actions";

const INITIAL_STATE = {
  isLoading: false,
  getTitles: [],
}

const redditTitles = ( state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
    return {
      ...state,
      isLoading: true,
    };
    case GET_API_RESPONSE:
      const getTitles = action.data.map(({data}) => data.children.data.title);
      return {
        ...state,
        getTitles,
        isLoading: false,
      }
    default:
      return state;
  }
}

export default redditTitles;
