import { LOGIN_STATUS } from "../reducers/loginReducer"

 const changeLogin = (email) => ({
  type: LOGIN_STATUS,
  email,
})

export default changeLogin;