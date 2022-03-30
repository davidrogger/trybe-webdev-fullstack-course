import { REQUEST_API, GET_API_RESPONSE, GET_FAILURE, SET_THEME } from "../actions";

const INITIAL_STATE = {
  isLoading: false,
  current: '',
  titles: [],
  lastRefresh: null,
  resquestFailure: false,
  messageFailture: '',
}

const redditTitles = ( state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_API:
    return {
      ...state,
      isLoading: true,
    };
    case SET_THEME:
    return {
      ...state,
      current: action.theme,
    }
    case GET_API_RESPONSE:
      const titles = action.subResponse.data.children.map((title) => title.data.title);
      const day = new Date();
      const hora = ('0' + day.getHours()).slice(-2);
      const minuto = ('0'+ day.getMinutes()).slice(-2);
      const segundo = ('0'+ day.getSeconds()).slice(-2);
      
      const lastRefresh = `${hora}:${minuto}:${segundo}`
      return {
        ...state,
        titles,
        isLoading: false,
        lastRefresh
      };
    case GET_FAILURE:
      return {
        ...state,
        resquestFailure: true,
        messageFailture: `Erro encontrado: ${action.msg}`,
        isLoading: false,
      }
    default:
      return state;
  }
}

export default redditTitles;
