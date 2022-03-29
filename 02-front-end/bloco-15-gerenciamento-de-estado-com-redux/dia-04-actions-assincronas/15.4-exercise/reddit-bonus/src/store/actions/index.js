export const REQUEST_API = 'REQUEST_API';
export const GET_API_RESPONSE = 'GET_API_RESPONSE';

export const requestAPI = () => ({ type: REQUEST_API });

export const getTitles = (data) => ({ type: GET_API_RESPONSE, data });

export const fetchAPI = (subreddit) => {
  return async (dispatch) => {
    dispatch(requestAPI());
    try {
      const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
      const data = await response.json();
      return dispatch(getTitles(data));
    } catch(error) {
      console.log(`Falha encontrada: ${error}`);
    }
  }
}