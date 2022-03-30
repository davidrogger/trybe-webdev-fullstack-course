export const REQUEST_API = 'REQUEST_API';
export const GET_API_RESPONSE = 'GET_API_RESPONSE';
export const GET_TITLES = 'GET_TITLES';
export const GET_FAILURE = 'GET_FAILURE';
export const SET_THEME = 'SET_THEME';

export const requestAPI = () => ({ type: REQUEST_API });

export const getApiResponse = (subResponse, current) => ({ type: GET_API_RESPONSE, subResponse });

export const getTitles = () => ({ type: GET_TITLES });

export const getFailure = (msg) => ({ type: GET_FAILURE, msg })

export const setTheme = (theme) => ({ type: SET_THEME, theme });

export const fetchAPI = (subreddit) => {
  return async (dispatch) => {
    dispatch(requestAPI());
    dispatch(setTheme(subreddit));
    try {
      const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
      const data = await response.json();
      return dispatch(getApiResponse(data));
    } catch(error) {
      return dispatch(getFailure(error));
    }
  }
}