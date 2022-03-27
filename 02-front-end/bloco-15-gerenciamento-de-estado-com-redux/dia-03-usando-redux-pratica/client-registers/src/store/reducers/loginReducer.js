export const LOGIN_STATUS = 'LOGIN_STATUS';

const INITIAL_STATE = {
  login: false,
}

export const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_STATUS:
    return {
      login: true,
    }
  default:
    return state;
  }
}
