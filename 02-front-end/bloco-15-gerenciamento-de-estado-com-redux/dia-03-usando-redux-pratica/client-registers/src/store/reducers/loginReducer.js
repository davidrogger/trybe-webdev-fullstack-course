export const LOGIN_STATUS = 'LOGIN_STATUS';

const INITIAL_STATE = {
  login: false,
  user: {
    email: '',
  }
}

export const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_STATUS:
    return {
      ...state,
      login: true,
      user: { email: action.email },
    }
  default:
    return state;
  }
}
